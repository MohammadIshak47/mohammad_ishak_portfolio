import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-ink-line">
      <div className="section">
        <p className="eyebrow mb-3">03 · Projects</p>
        <h2 className="text-3xl font-bold text-paper sm:text-4xl">Selected work</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-paper-muted">
          Eight full-stack projects covering hiring tools, education, e-commerce, health,
          content, and internal ops — most with a live demo to click through.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
