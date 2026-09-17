import type { Project } from "../types";

// Source: legacy/index.html. Solo tool, no case study page — see plan §4(b).
export const gymAttendanceAnalyzer: Project = {
  slug: "gym-attendance-analyzer",
  number: "03",
  title: "Gym Staff Attendance Analyzer",
  role: "Solo build",
  type: "tool",
  year: "2025",
  summary:
    "Fully client-side tool for analyzing gym staff attendance. Parses Excel/PDF reports, auto-detects late arrivals, absences, and overtime, and generates printable PDF summaries — no backend required.",
  outcomeLine: "Zero backend · client-side only",
  stack: ["TypeScript", "React", "Excel/PDF parsing", "Client-side PDF"],
};
