import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.0";
import { Configuration, OpenAIApi } from "npm:openai@3.3.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { command, userId } = await req.json();

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Initialize OpenAI
    const configuration = new Configuration({
      apiKey: Deno.env.get("OPENAI_API_KEY"),
    });
    const openai = new OpenAIApi(configuration);

    // Process command and get response
    const response = await processCommand(command, openai, supabaseClient, userId);

    return new Response(
      JSON.stringify(response),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

async function processCommand(command: string, openai: OpenAIApi, supabaseClient: any, userId: string) {
  // Basic command processing
  const normalizedCommand = command.toLowerCase();

  // Store command in history
  await supabaseClient
    .from('command_history')
    .insert([
      { user_id: userId, command, timestamp: new Date().toISOString() }
    ]);

  // Handle different command types
  if (normalizedCommand.includes('weather')) {
    return await handleWeatherCommand(command);
  } else if (normalizedCommand.includes('reminder') || normalizedCommand.includes('task')) {
    return await handleTaskCommand(command, supabaseClient, userId);
  } else {
    // Default to AI response for unknown commands
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `As Emma, a helpful AI assistant, respond to: ${command}`,
      max_tokens: 150,
    });

    return {
      type: 'ai_response',
      content: completion.data.choices[0].text.trim(),
    };
  }
}

async function handleWeatherCommand(command: string) {
  const WEATHER_API_KEY = Deno.env.get("OPENWEATHER_API_KEY");
  const city = "London"; // Default city, should be extracted from command or user preferences

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
  );
  const data = await response.json();

  return {
    type: 'weather',
    content: `Current weather in ${city}: ${data.main.temp}°C, ${data.weather[0].description}`,
  };
}

async function handleTaskCommand(command: string, supabaseClient: any, userId: string) {
  const task = command.replace(/^(add|create|set|new)\s+(task|reminder)\s*/i, '').trim();
  
  await supabaseClient
    .from('tasks')
    .insert([
      { user_id: userId, description: task, status: 'pending' }
    ]);

  return {
    type: 'task',
    content: `Task added: ${task}`,
  };
}