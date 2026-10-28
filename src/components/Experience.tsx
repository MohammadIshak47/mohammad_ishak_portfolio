interface Job {
  role: string;
  company: string;
  period: string;
  points: string[];
}

const jobs: Job[] = [
  {
    role: 'Software Developer',
    company: 'NextTech Code (Remote)',
    period: 'Jan 2025 — Present',
    points: [
      'Develop and maintain web application features using Python/FastAPI and React.js, collaborating with a cross-functional remote team across U.S. time zones.',
      'Integrate RESTful APIs and authentication flows, and contribute to source-controlled Git workflows in an async-first environment.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Excel IT AI LTD',
    period: 'Sep 2023 — Sep 2024',
    points: [
      'Built and maintained full-stack features with Python (Django/FastAPI), React.js, and PostgreSQL, implementing REST APIs and JWT authentication for client-facing applications.',
      'Collaborated with product and engineering teams to define requirements and deliver working features on schedule.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-ink-line">
      <div className="section">
        <p className="eyebrow mb-3">04 · Experience</p>
        <h2 className="text-3xl font-bold text-paper sm:text-4xl">Where I've worked</h2>

        <div className="mt-10 space-y-6">
          {jobs.map((job) => (
            <div key={job.role} className="panel grid gap-2 p-6 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <h3 className="text-base font-bold text-paper">{job.role}</h3>
                <p className="font-mono text-xs text-teal">{job.company}</p>
                <ul className="mt-3 space-y-2">
                  {job.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-paper-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="font-mono text-xs text-paper-muted sm:text-right">
                {job.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
