/*
  # Create Policies Table

  1. New Tables
    - `policies`
      - `id` (uuid, primary key)
      - `title` (text, policy title)
      - `category` (text, policy category - HR, Compliance, SOP, Guidelines)
      - `description` (text, short description)
      - `content` (text, full policy content)
      - `file_url` (text, URL to PDF/document)
      - `icon` (text, icon name from lucide-react)
      - `order` (integer, display order)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `policies` table
    - Add policy for public read access (policies are read-only for all)
*/

CREATE TABLE IF NOT EXISTS policies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text,
  content text,
  file_url text,
  icon text DEFAULT 'FileText',
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE policies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read policies"
  ON policies
  FOR SELECT
  TO public
  USING (true);

-- Insert sample policies
INSERT INTO policies (title, category, description, content, icon, "order") VALUES
(
  'Employee Work Hours & Attendance Policy - 2025',
  'HR',
  'Official work hours, attendance system, and salary deduction policies effective from April 2025',
  'This policy applies to all employees who report to the office. It covers office timings, buffer time, biometric attendance, late arrival policies, half-day policies, overtime policies, and compliance enforcement.',
  'Clock',
  1
),
(
  'Office Timings & Buffer Time',
  'Guidelines',
  'Official shift timings and buffer period guidelines',
  'OFFICIAL SHIFTS: Shift 1: 09:30 AM – 06:30 PM, Shift 2: 10:00 AM – 07:00 PM, Shift 3: 11:00 AM – 08:00 PM. Each shift includes a one-hour break. Employees must report at designated shift start time with a 20-minute buffer period.',
  'Calendar',
  2
),
(
  '100% Attendance Reward',
  'HR',
  'Bonus structure for perfect attendance',
  'Every month, employees who arrive before their shift start time and leave after their shift end time every working day—without taking any leave—will receive a 5% bonus on their monthly salary. This applies only to employees with a salary not exceeding ₹25,000 per month.',
  'Trophy',
  3
),
(
  'Late Arrival Policy & Salary Deductions',
  'HR',
  'Late arrival guidelines and salary deduction structure',
  'Employees are allowed up to 3 late arrivals per month without salary deduction. From the 4th to 10th late arrival, deduction is based on hourly wage loss. Late arrivals exceeding 10 times result in half-day salary deduction retroactively.',
  'AlertCircle',
  4
),
(
  'Half-Day Policy',
  'SOP',
  'Guidelines for half-day attendance',
  'A half-day will be applied if an employee arrives after 4 hours from their shift start time. Salary will be calculated based on hours worked if less than 5 hours, which is the minimum for half-day salary.',
  'Clock',
  5
),
(
  'Overtime Policy',
  'SOP',
  'Overtime calculation and approval process',
  'Employees are not encouraged to work beyond shift end times unless required. Overtime is calculated only after 9 hours of work from punched-in time. Must be approved by reporting manager via email or Cliq.',
  'Zap',
  6
),
(
  'Compliance & Enforcement',
  'Compliance',
  'Policy compliance requirements and dispute resolution',
  'Employees must adhere to these policies to maintain discipline and professionalism. Any disputes regarding attendance, salary deductions, or overtime must be addressed with HR.',
  'CheckCircle',
  7
);