import type { Project } from "../types";

// Source: the 2026 CV + the previous site. Solo tool, no case study page
// and no public link.
export const gymAttendanceAnalyzer: Project = {
  slug: "gym-attendance-analyzer",
  number: "04",
  title: "Gym Staff Attendance Analyzer",
  role: "Solo build",
  type: "tool",
  year: "2025",
  summary:
    "A client-side tool that turns fingerprint attendance exports into printable reports on lateness, absences and overtime. It parses Excel and PDF reports in the browser — no backend required.",
  outcomeLine: "Zero backend · client-side only",
  plate: "pipeline",
  stack: ["TypeScript", "React", "Excel/PDF parsing", "Client-side PDF"],
};
