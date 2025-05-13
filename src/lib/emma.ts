import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function sendCommand(command: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User not authenticated');
    }

    const response = await fetch(
      `${supabaseUrl}/functions/v1/emma`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          command,
          userId: user.id,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to process command');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending command:', error);
    throw error;
  }
}

export async function getUserPreferences() {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('user_preferences')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateUserPreferences(preferences: Partial<{
  location: string;
  timezone: string;
  voice_settings: {
    speed: number;
    pitch: number;
    voice: string;
  };
}>) {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('user_preferences')
    .upsert({
      user_id: user.id,
      ...preferences,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getTasks() {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

export async function getCommandHistory() {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('command_history')
    .select('*')
    .eq('user_id', user.id)
    .order('timestamp', { ascending: false })
    .limit(50);

  if (error) {
    throw error;
  }

  return data;
}