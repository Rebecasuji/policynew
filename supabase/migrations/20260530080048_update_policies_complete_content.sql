/*
  # Update Policies with Complete Content

  1. Updates
    - Replace policy content with the complete policy text from the PDF
*/

UPDATE policies 
SET content = 'EMPLOYEE WORK HOURS & ATTENDANCE POLICY - 2025

(EFFECTIVE IMMEDIATELY FROM APRIL, 2025)

[THIS POLICY APPLIES TO ALL EMPLOYEES WHO REPORT TO THE OFFICE AND DOES NOT APPLY TO OPERATIONAL ROLES OR EMPLOYEES WORKING FROM HOME.]

SECTION 1: OFFICE TIMINGS & BUFFER TIME

UPDATE policies 
SET content = 'EMPLOYEE WORK HOURS & ATTENDANCE POLICY - 2025

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

[Emergencies will not result in salary deductions, provided they are informed and approved by the reporting manager and HR.]'
WHERE title = 'Employee Work Hours & Attendance Policy - 2025';

• Employees are not encouraged to work beyond their respective shift end times unless required due to pending work of their own.

• If requested by the reporting manager, overtime will be calculated only after 9 hours of work from the punched-in time.

• Overtime will be considered only if approved by the reporting manager via email or Cliq. Overtime will be applicable only if an employee works from the office for more than one hour beyond their scheduled shift end time (e.g., for an 8:00 PM shift end, overtime will be counted only if the employee works past 9:00 PM at office; work done until 8:59 PM will not be considered overtime). If additional work is needed before or after office hours, employees are advised to work from home where feasible.

SECTION 6: COMPLIANCE & ENFORCEMENT

• Employees must adhere to these policies to maintain discipline and professionalism.

• Any disputes regarding attendance, salary deductions, or overtime must be addressed with HR.'
WHERE title = 'Employee Work Hours & Attendance Policy - 2026';

-- Update other sample policies to empty or generic content since they should be derived from the main policy
UPDATE policies 
SET content = 'SECTION 1: OFFICE TIMINGS & BUFFER TIME\n\n• OFFICIAL SHIFTS:\n• Shift 1: 09:30 AM – 06:30 PM\n• Shift 2: 10:00 AM – 07:00 PM\n• Shift 3: 11:00 AM – 08:00 PM\n• Each shift includes a one-hour break, which employees can take at their discretion.\n• Employees must report at their designated shift start time, with a buffer period of 20 minutes (e.g., employees in the 10-7 shift must arrive by 10:00 AM, excuse will be given till 10:20).\n• Repeated late arrivals will result in salary deductions (see Section 3).' 
WHERE title = 'Office Timings & Buffer Time';

UPDATE policies 
SET content = 'SECTION 2A: 100% ATTENDANCE REWARD\n\n• Every month, employees who arrive before their shift start time and leave after their shift end time every working day—without taking any leave (including sick leave and paid leave [PL])—will receive a 5% bonus on their monthly salary as a reward for their punctuality and commitment.\n• This applies only to employees with a salary not exceeding ₹25,000 per month.\n\n[For example: An employee with a 10:00 AM - 7:00 PM shift who punches in, on or before 10:00 AM (even 10:01 AM will not be considered) and punches out after 7:00 PM every working day, without taking any leave (including PL or sick leave), will qualify for a 5% monthly bonus.]'
WHERE title = '100% Attendance Reward';

UPDATE policies 
SET content = 'SECTION 3: LATE ARRIVAL POLICY & SALARY DEDUCTIONS\n\n• Employees are allowed up to 3 late arrivals per month without salary deduction.\n• From the 4th to the 10th late arrival, salary deduction will be based on hourly wage loss. However, if late arrivals exceed 10 times in a month, a half-day salary will be deducted for each late arrival from the very first instance, retroactively applying to all late arrivals of the month.\n\n(For example, if an employee arrives late on April 2, 5, 8, 12, 15, 18, 20, 22, 25, and 28, salary deduction will be based on hourly wage loss; but if they are also late on April 30 [11th instance], then from April 2 onward, each late arrival will be recalculated as a half-day salary deduction.)\n\n• Employees arriving late after the buffer time will face salary deductions rounded up to the next full hour. (For Example: For a 10:00 AM shift: Arriving at 10:25 AM results in a 1-hour salary deduction, For a 10:00 AM shift: Arriving at 11:05 AM results in a 2-hour salary deduction).\n• Arriving after 5 hours from shift start time (e.g., after 2:00 PM for the 9-6 shift) will be considered a half-day (Refer Section 4).\n• Leaving the office without prior approval from the reporting manager and HR during work hours will result in an absent mark, unless it is an emergency.\n\n[Emergencies will not result in salary deductions, provided they are informed and approved by the reporting manager and HR.]'
WHERE title = 'Late Arrival Policy & Salary Deductions';

UPDATE policies 
SET content = 'SECTION 4: HALF-DAY POLICY\n\n• A half-day will be applied in the following cases:\n• If an employee arrives after 4 hours from their shift start time (e.g., after 1:00 PM for the 9-6 shift).\n\nSalary will be calculated based on hours worked if the employee has not completed at least 5 hours, which is considered the minimum for a half-day salary.'
WHERE title = 'Half-Day Policy';

UPDATE policies 
SET content = 'SECTION 5: OVERTIME POLICY\n\n• Employees are not encouraged to work beyond their respective shift end times unless required due to pending work of their own.\n• If requested by the reporting manager, overtime will be calculated only after 9 hours of work from the punched-in time.\n• Overtime will be considered only if approved by the reporting manager via email or Cliq. Overtime will be applicable only if an employee works from the office for more than one hour beyond their scheduled shift end time (e.g., for an 8:00 PM shift end, overtime will be counted only if the employee works past 9:00 PM at office; work done until 8:59 PM will not be considered overtime). If additional work is needed before or after office hours, employees are advised to work from home where feasible.'
WHERE title = 'Overtime Policy';

UPDATE policies 
SET content = 'SECTION 6: COMPLIANCE & ENFORCEMENT\n\n• Employees must adhere to these policies to maintain discipline and professionalism.\n• Any disputes regarding attendance, salary deductions, or overtime must be addressed with HR.'
WHERE title = 'Compliance & Enforcement';