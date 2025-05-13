/*
  # Initial schema setup for Emma assistant

  1. New Tables
    - command_history: Stores user command history
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - command (text)
      - timestamp (timestamptz)
    
    - tasks: Stores user tasks and reminders
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - description (text)
      - status (text)
      - due_date (timestamptz, optional)
      - created_at (timestamptz)
    
    - user_preferences: Stores user settings
      - user_id (uuid, primary key, references auth.users)
      - location (text)
      - timezone (text)
      - voice_settings (jsonb)
      - created_at (timestamptz)
      - updated_at (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Command History Table
CREATE TABLE command_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  command text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE command_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own commands"
  ON command_history FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own command history"
  ON command_history FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- Tasks Table
CREATE TABLE tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  description text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  due_date timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own tasks"
  ON tasks FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- User Preferences Table
CREATE TABLE user_preferences (
  user_id uuid PRIMARY KEY REFERENCES auth.users,
  location text DEFAULT 'London',
  timezone text DEFAULT 'UTC',
  voice_settings jsonb DEFAULT '{"speed": 1, "pitch": 1, "voice": "default"}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own preferences"
  ON user_preferences FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for user_preferences
CREATE TRIGGER update_user_preferences_updated_at
  BEFORE UPDATE ON user_preferences
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();