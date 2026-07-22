import React from "react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import HackathonExperience from "../components/HackathonExperience";

export default function Experience() {
  return (
    <div className="bg-slate-50 pt-16 min-h-screen">
      <HackathonExperience />
      <ExperienceTimeline />
    </div>
  );
}

