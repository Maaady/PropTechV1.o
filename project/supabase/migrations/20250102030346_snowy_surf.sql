/*
  # Initial Schema Setup

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text)
      - `vat_number` (text)
      - `manager_name` (text) 
      - `created_at` (timestamp)
    
    - `profiles`
      - `id` (uuid, primary key, matches auth.users)
      - `company_id` (uuid, foreign key)
      - `full_name` (text)
      - `role` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  vat_number text NOT NULL UNIQUE,
  manager_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  company_id uuid REFERENCES companies(id),
  full_name text,
  role text DEFAULT 'agent',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own company data"
  ON companies
  FOR SELECT
  TO authenticated
  USING (id IN (
    SELECT company_id 
    FROM profiles 
    WHERE profiles.id = auth.uid()
  ));

CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());