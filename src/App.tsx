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
      description: 'Official work hours, attendance system, and salary deduction policies.',
      content: 'Official shifts and attendance rules. Refer to company communications for full text.',
      file_url: null,
      icon: 'Clock',
      order: 1,
    },
    {
      id: 'office-timings',
      title: 'Office Timings & Buffer Time',
      category: 'Guidelines',
      description: 'Official shift timings and buffer period guidelines',
      content: 'Shift 1: 09:30 AM – 06:30 PM; Shift 2: 10:00 AM – 07:00 PM; Shift 3: 11:00 AM – 08:00 PM.',
      file_url: null,
      icon: 'Calendar',
      order: 2,
    },
    {
      id: 'attendance-reward',
      title: '100% Attendance Reward',
      category: 'HR',
      description: 'Bonus structure for perfect attendance',
      content: 'Employees who maintain perfect attendance may receive a performance bonus as per policy.',
      file_url: null,
      icon: 'Trophy',
      order: 3,
    },
    {
      id: 'late-arrival',
      title: 'Late Arrival Policy & Salary Deductions',
      category: 'HR',
      description: 'Late arrival guidelines and salary deduction structure',
      content: 'Employees allowed up to 3 late arrivals per month without deduction; further late arrivals may incur deductions.',
      file_url: null,
      icon: 'AlertCircle',
      order: 4,
    },
    {
      id: 'half-day-policy',
      title: 'Half-Day Policy',
      category: 'SOP',
      description: 'Guidelines for half-day attendance',
      content: 'A half-day applies if arrival is after 4 hours from shift start.',
      file_url: null,
      icon: 'Clock',
      order: 5,
    },
    {
      id: 'overtime-policy',
      title: 'Overtime Policy',
      category: 'SOP',
      description: 'Overtime calculation and approval process',
      content: 'Overtime calculated after 9 hours of work and must be approved by reporting manager.',
      file_url: null,
      icon: 'Zap',
      order: 6,
    },
    {
      id: 'compliance-enforcement',
      title: 'Compliance & Enforcement',
      category: 'Compliance',
      description: 'Policy compliance requirements and dispute resolution',
      content: 'Employees must adhere to company policies; disputes should be addressed to HR.',
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