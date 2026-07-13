import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const stats = [
  { label: 'Shipped projects', value: '8+' },
  { label: 'Core stack', value: 'React · Django · FastAPI' },
  { label: 'Remote availability', value: 'EST / CET' },
];

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="section grid gap-12 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
        <div className="reveal">
          <p className="eyebrow mb-5">Full Stack Developer · Open to remote roles</p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            I build production web apps, end to end —{' '}
            <span className="text-signal">frontend to database.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-muted sm:text-lg">
            Mohammad Ishak — a B.Sc. Computer Science graduate shipping React/TypeScript
            front ends and Python (Django, FastAPI) APIs for real users, from an online
            pharmacy to an internal applicant tracking system.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View projects
              <ArrowDown size={16} />
            </a>
            <a
              href="https://github.com/MohammadIshak47"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mohammadishak47"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-ink-line pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-paper-muted">
                  {s.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-paper">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal panel overflow-hidden shadow-2xl shadow-black/40" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-2 border-b border-ink-line bg-white/[0.02] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-paper-muted">whoami.ts</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-paper-muted">
<code>
<span className="text-teal">const</span> <span className="text-paper">developer</span> = {'{'}
{'\n  '}<span className="text-signal">name</span>: <span className="text-paper-muted">'Mohammad Ishak'</span>,
{'\n  '}<span className="text-signal">title</span>: <span className="text-paper-muted">'Full Stack Developer'</span>,
{'\n  '}<span className="text-signal">based_in</span>: <span className="text-paper-muted">'Dhaka, Bangladesh'</span>,
{'\n  '}<span className="text-signal">stack</span>: [
{'\n    '}<span className="text-paper-muted">'React'</span>, <span className="text-paper-muted">'TypeScript'</span>, <span className="text-paper-muted">'Next.js'</span>,
{'\n    '}<span className="text-paper-muted">'Python'</span>, <span className="text-paper-muted">'Django'</span>, <span className="text-paper-muted">'FastAPI'</span>,
{'\n    '}<span className="text-paper-muted">'PostgreSQL'</span>, <span className="text-paper-muted">'Docker'</span>
{'\n  '}],
{'\n  '}<span className="text-signal">currentlyBuilding</span>: <span className="text-paper-muted">'production-ready full-stack apps'</span>,
{'\n  '}<span className="text-signal">openTo</span>: <span className="text-paper-muted">'remote, international teams'</span>
{'\n'}{'}'}<span className="caret"></span>
</code>
          </pre>
          <div className="flex items-center gap-2 border-t border-ink-line bg-white/[0.02] px-4 py-3 font-mono text-xs text-paper-muted">
            <Mail size={13} />
            ishak199bd@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
