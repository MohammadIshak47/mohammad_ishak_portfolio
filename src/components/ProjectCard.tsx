import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';

const linkIcon = (label: string) =>
  label.toLowerCase().includes('live') ? (
    <ExternalLink size={14} />
  ) : (
    <Github size={14} />
  );

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="panel group flex h-full flex-col p-6 transition-colors duration-300 hover:border-teal/40">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-paper-muted">{project.path}</span>
        <span className="font-mono text-[11px] text-paper-muted">{project.period}</span>
      </div>

      <h3 className="text-lg font-bold leading-snug text-paper group-hover:text-signal transition-colors">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-paper-muted">{project.summary}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-paper-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-ink-line">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={
              link.label.toLowerCase().includes('live')
                ? 'flex items-center gap-1.5 rounded-md bg-signal px-3 py-1.5 font-mono text-xs font-semibold text-ink hover:bg-signal-soft transition-colors'
                : 'flex items-center gap-1.5 rounded-md border border-ink-line px-3 py-1.5 font-mono text-xs text-paper-muted hover:text-paper hover:border-teal/40 transition-colors'
            }
          >
            {linkIcon(link.label)}
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
