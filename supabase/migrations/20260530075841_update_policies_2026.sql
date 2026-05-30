/*
  # Update Policies to 2026

  1. Updates
    - Change policy titles and descriptions from 2025 to 2026
*/

UPDATE policies 
SET title = 'Employee Work Hours & Attendance Policy - 2026'
WHERE title = 'Employee Work Hours & Attendance Policy - 2025';

UPDATE policies 
SET description = 'Official work hours, attendance system, and salary deduction policies effective from April 2026'
WHERE title = 'Employee Work Hours & Attendance Policy - 2026' AND description LIKE '%2025%';

UPDATE policies
SET content = REPLACE(content, '2025', '2026')
WHERE content LIKE '%2025%';