import { useEffect, useState } from 'react';
import { supabase, SUPABASE_CONFIGURED } from './lib/supabase';
import Header from './components/Header';
import Hero from './components/Hero';
import PoliciesGrid from './components/PoliciesGrid';
import PolicyDetail from './components/PolicyDetail';
import Footer from './components/Footer';

interface Policy {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  file_url: string | null;
  icon: string;
  order: number;
}

function App() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [loading, setLoading] = useState(true);

  const leavePolicyFallback: Policy = {
    id: 'leave-policy-card',
    title: 'Leave Policy',
    category: 'HR',
    description: 'Privilege leave, sick leave, government holidays, and general leave guidelines.',
    content: 'Leave Policy\n\n• Privilege Leave: Employees are entitled to 10 days of privilege leave per calendar year, which commences after the completion of their probation period. Privilege leave can only be availed after obtaining confirmation from the management. Employees may utilize up to 3 days of privilege leave at a stretch, subject to management’s approval. Request for privilege leave must be submitted to the management via email (hr@ctint.in) or through leave management system at least a week in advance for planned leave and 1 day in advance for unplanned leave. Any unused privilege leave cannot be carried forward to the next year.\n\n• Sick Leave: Employees are granted 5 days of sick leave per calendar year. Sick leave can be utilized for personal illness or medical appointments. Employees must inform the management via email (hr@ctint.in) or through leave management system as soon as possible in case of illness, and provide a doctor’s certificate from a reputed hospital if absent for more than 2 consecutive days.\n\n• Government Holidays: Employees will be provided with government holidays as per the regulations of Tamil Nadu. The list of government holidays will be communicated to all employees at the beginning of each calendar year.\n\n• List of government holidays in Tamil Nadu with the number of days for each:\n  - New Year’s Day - January 1 (1 day)\n  - Republic Day - January 26 (1 day)\n  - Pongal - January 15 (1 day)\n  - Independence Day - August 15 (1 day)\n  - May Day - May 1 (1 day)\n  - Gandhi Jayanti - October 2 (1 day)\n  - Deepavali - November 1 (1 day)\n  - Vijayadhasami - October 12 (1 day)\n  - Vinayagar Chaturthi - September 7 (1 day)\n  - Christmas - December 25 (1 day)\n\n• Compensation Policy for Government Holidays: Employees who are required to work on any of the government holidays listed above will be eligible for double the regular salary for that day.\n\n• General Guidelines: All leave requests are subject to approval by the management. In case of emergency or unforeseen circumstances, employees should notify immediately. Unauthorized absence from work may result in loss of pay. Special leave beyond the specified allowances may be granted under exceptional circumstances at the discretion of the management.\n\n• Note: This leave policy is subject to periodic review and may be amended by the company as deemed necessary. Employees are encouraged to familiarize themselves with the policy and seek clarification from the management if needed. All leave requests, even those conveyed verbally, must be officially communicated through email or the leave management system for validation.',
    file_url: null,
    icon: 'CalendarDays',
    order: 8,
  };

  // Static policies used when there is no database configured (fully static deploy)
  const staticPolicies: Policy[] = [
    {
      id: 'work-hours-2025',
      title: 'Employee Work Hours & Attendance Policy - 2025',
      category: 'HR',
      description: 'Official work hours, attendance system, and salary deduction policies effective from April 2025',
      content: `EMPLOYEE WORK HOURS & ATTENDANCE POLICY - 2025

(EFFECTIVE IMMEDIATELY FROM APRIL, 2025)

[THIS POLICY APPLIES TO ALL EMPLOYEES WHO REPORT TO THE OFFICE AND DOES NOT APPLY TO OPERATIONAL ROLES OR EMPLOYEES WORKING FROM HOME.]

SECTION 1: OFFICE TIMINGS & BUFFER TIME

• OFFICIAL SHIFTS:

• Shift 1: 09:30 AM – 06:30 PM

• Shift 2: 10:00 AM – 07:00 PM

• Shift 3: 11:00 AM – 08:00 PM

• Each shift includes a one-hour break, which employees can take at their discretion.

• Employees must report at their designated shift start time, with a buffer period of 20 minutes (e.g., employees in the 10-7 shift must arrive by 10:00 AM, excuse will be given till 10:20).

• Repeated late arrivals will result in salary deductions (see Section 3).

SECTION 2: ATTENDANCE SYSTEM

• Biometric attendance is mandatory. Failure to record attendance will result in an absent mark unless manually verified by HR or the reporting manager.

• Early departures are only allowed with prior approval from the reporting manager and a copy to HR via email. Verbal approvals will not be considered valid.

• Employees arriving after 4 hours from their shift start time will be marked as half-day (Refer Section 4).

SECTION 2A: 100% ATTENDANCE REWARD

• Every month, employees who arrive before their shift start time and leave after their shift end time every working day—without taking any leave (including sick leave and paid leave [PL])—will receive a 5% bonus on their monthly salary as a reward for their punctuality and commitment.

• This applies only to employees with a salary not exceeding ₹25,000 per month.

[For example: An employee with a 10:00 AM - 7:00 PM shift who punches in, on or before 10:00 AM (even 10:01 AM will not be considered) and punches out after 7:00 PM every working day, without taking any leave (including PL or sick leave), will qualify for a 5% monthly bonus.]

SECTION 3: LATE ARRIVAL POLICY & SALARY DEDUCTIONS

• Employees are allowed up to 3 late arrivals per month without salary deduction.

• From the 4th to the 10th late arrival, salary deduction will be based on hourly wage loss. However, if late arrivals exceed 10 times in a month, a half-day salary will be deducted for each late arrival from the very first instance, retroactively applying to all late arrivals of the month.

(For example, if an employee arrives late on April 2, 5, 8, 12, 15, 18, 20, 22, 25, and 28, salary deduction will be based on hourly wage loss; but if they are also late on April 30 [11th instance], then from April 2 onward, each late arrival will be recalculated as a half-day salary deduction.)

• Employees arriving late after the buffer time will face salary deductions rounded up to the next full hour. (For Example: For a 10:00 AM shift: Arriving at 10:25 AM results in a 1-hour salary deduction, For a 10:00 AM shift: Arriving at 11:05 AM results in a 2-hour salary deduction).

• Arriving after 5 hours from shift start time (e.g., after 2:00 PM for the 9-6 shift) will be considered a half-day (Refer Section 4).

• Leaving the office without prior approval from the reporting manager and HR during work hours will result in an absent mark, unless it is an emergency.

[Emergencies will not result in salary deductions, provided they are informed and approved by the reporting manager and HR.]

SECTION 4: HALF-DAY POLICY

• A half-day will be applied in the following cases:

• If an employee arrives after 4 hours from their shift start time (e.g., after 1:00 PM for the 9-6 shift).

Salary will be calculated based on hours worked if the employee has not completed at least 5 hours, which is considered the minimum for a half-day salary.

SECTION 5: OVERTIME POLICY

• Employees are not encouraged to work beyond their respective shift end times unless required due to pending work of their own.

• If requested by the reporting manager, overtime will be calculated only after 9 hours of work from the punched-in time.

• Overtime will be considered only if approved by the reporting manager via email or Cliq. Overtime will be applicable only if an employee works from the office for more than one hour beyond their scheduled shift end time (e.g., for an 8:00 PM shift end, overtime will be counted only if the employee works past 9:00 PM at office; work done until 8:59 PM will not be considered overtime). If additional work is needed before or after office hours, employees are advised to work from home where feasible.

SECTION 6: COMPLIANCE & ENFORCEMENT

• Employees must adhere to these policies to maintain discipline and professionalism.

• Any disputes regarding attendance, salary deductions, or overtime must be addressed with HR.`,
      file_url: null,
      icon: 'Clock',
      order: 1,
    },
    {
      id: 'office-timings',
      title: 'Office Timings & Buffer Time',
      category: 'Guidelines',
      description: 'Official shift timings and buffer period guidelines',
      content: 'SECTION 1: OFFICE TIMINGS & BUFFER TIME\n\n• OFFICIAL SHIFTS:\n• Shift 1: 09:30 AM – 06:30 PM\n• Shift 2: 10:00 AM – 07:00 PM\n• Shift 3: 11:00 AM – 08:00 PM\n• Each shift includes a one-hour break, which employees can take at their discretion.\n• Employees must report at their designated shift start time, with a buffer period of 20 minutes (e.g., employees in the 10-7 shift must arrive by 10:00 AM, excuse will be given till 10:20).\n• Repeated late arrivals will result in salary deductions (see Section 3).',
      file_url: null,
      icon: 'Calendar',
      order: 2,
    },
    {
      id: 'attendance-reward',
      title: '100% Attendance Reward',
      category: 'HR',
      description: 'Bonus structure for perfect attendance',
      content: 'SECTION 2A: 100% ATTENDANCE REWARD\n\n• Every month, employees who arrive before their shift start time and leave after their shift end time every working day—without taking any leave (including sick leave and paid leave [PL])—will receive a 5% bonus on their monthly salary as a reward for their punctuality and commitment.\n• This applies only to employees with a salary not exceeding ₹25,000 per month.\n\n[For example: An employee with a 10:00 AM - 7:00 PM shift who punches in, on or before 10:00 AM (even 10:01 AM will not be considered) and punches out after 7:00 PM every working day, without taking any leave (including PL or sick leave), will qualify for a 5% monthly bonus.]',
      file_url: null,
      icon: 'Trophy',
      order: 3,
    },
    {
      id: 'late-arrival',
      title: 'Late Arrival Policy & Salary Deductions',
      category: 'HR',
      description: 'Late arrival guidelines and salary deduction structure',
      content: 'SECTION 3: LATE ARRIVAL POLICY & SALARY DEDUCTIONS\n\n• Employees are allowed up to 3 late arrivals per month without salary deduction.\n• From the 4th to the 10th late arrival, salary deduction will be based on hourly wage loss. However, if late arrivals exceed 10 times in a month, a half-day salary will be deducted for each late arrival from the very first instance, retroactively applying to all late arrivals of the month.\n\n(For example, if an employee arrives late on April 2, 5, 8, 12, 15, 18, 20, 22, 25, and 28, salary deduction will be based on hourly wage loss; but if they are also late on April 30 [11th instance], then from April 2 onward, each late arrival will be recalculated as a half-day salary deduction.)\n\n• Employees arriving late after the buffer time will face salary deductions rounded up to the next full hour. (For Example: For a 10:00 AM shift: Arriving at 10:25 AM results in a 1-hour salary deduction, For a 10:00 AM shift: Arriving at 11:05 AM results in a 2-hour salary deduction).\n• Arriving after 5 hours from shift start time (e.g., after 2:00 PM for the 9-6 shift) will be considered a half-day (Refer Section 4).\n• Leaving the office without prior approval from the reporting manager and HR during work hours will result in an absent mark, unless it is an emergency.\n\n[Emergencies will not result in salary deductions, provided they are informed and approved by the reporting manager and HR.]',
      file_url: null,
      icon: 'AlertCircle',
      order: 4,
    },
    {
      id: 'half-day-policy',
      title: 'Half-Day Policy',
      category: 'SOP',
      description: 'Guidelines for half-day attendance',
      content: 'SECTION 4: HALF-DAY POLICY\n\n• A half-day will be applied in the following cases:\n• If an employee arrives after 4 hours from their shift start time (e.g., after 1:00 PM for the 9-6 shift).\n\nSalary will be calculated based on hours worked if the employee has not completed at least 5 hours, which is considered the minimum for a half-day salary.',
      file_url: null,
      icon: 'Clock',
      order: 5,
    },
    {
      id: 'overtime-policy',
      title: 'Overtime Policy',
      category: 'SOP',
      description: 'Overtime calculation and approval process',
      content: 'SECTION 5: OVERTIME POLICY\n\n• Employees are not encouraged to work beyond their respective shift end times unless required due to pending work of their own.\n• If requested by the reporting manager, overtime will be calculated only after 9 hours of work from the punched-in time.\n• Overtime will be considered only if approved by the reporting manager via email or Cliq. Overtime will be applicable only if an employee works from the office for more than one hour beyond their scheduled shift end time (e.g., for an 8:00 PM shift end, overtime will be counted only if the employee works past 9:00 PM at office; work done until 8:59 PM will not be considered overtime). If additional work is needed before or after office hours, employees are advised to work from home where feasible.',
      file_url: null,
      icon: 'Zap',
      order: 6,
    },
    {
      id: 'compliance-enforcement',
      title: 'Compliance & Enforcement',
      category: 'Compliance',
      description: 'Policy compliance requirements and dispute resolution',
      content: 'SECTION 6: COMPLIANCE & ENFORCEMENT\n\n• Employees must adhere to these policies to maintain discipline and professionalism.\n• Any disputes regarding attendance, salary deductions, or overtime must be addressed with HR.',
      file_url: null,
      icon: 'CheckCircle',
      order: 7,
    },
    leavePolicyFallback,
  ];

  useEffect(() => {
    const fetchPolicies = async () => {
      if (!SUPABASE_CONFIGURED) {
        // No DB configured — use static policies for a fully static deploy
        setPolicies(staticPolicies.sort((a, b) => a.order - b.order));
        setLoading(false);
        console.warn('[app] Supabase not configured — using static policy data.');
        return;
      }

      try {
        const { data, error } = await supabase
          .from('policies')
          .select('*')
          .order('order', { ascending: true });

        if (error) throw error;
        const fetchedPolicies = data || [];
        const hasLeavePolicy = fetchedPolicies.some(
          (policy) => policy.title.toLowerCase() === leavePolicyFallback.title.toLowerCase()
        );
        setPolicies(hasLeavePolicy ? fetchedPolicies : [...fetchedPolicies, leavePolicyFallback]);
      } catch (error) {
        console.error('Error fetching policies:', error);
        // fallback to static policies on fetch error
        setPolicies(staticPolicies.sort((a, b) => a.order - b.order));
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F7F4 50%, #EDE7DE 100%)' }}>
      <Header />
      <main>
        {!selectedPolicy ? (
          <>
            <Hero />
            <PoliciesGrid policies={policies} onSelectPolicy={setSelectedPolicy} loading={loading} />
          </>
        ) : (
          <PolicyDetail policy={selectedPolicy} onBack={() => setSelectedPolicy(null)} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;