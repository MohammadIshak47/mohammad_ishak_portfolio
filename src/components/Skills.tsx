import { Folder } from 'lucide-react';
import { skillGroups } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-ink-line">
      <div className="section">
        <p className="eyebrow mb-3">02 · Skills</p>
        <h2 className="text-3xl font-bold text-paper sm:text-4xl">Tech stack</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-paper-muted">
          Organized the way I'd organize a project — by directory.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.dir} className="panel p-5">
              <div className="mb-4 flex items-center gap-2 font-mono text-sm text-teal">
                <Folder size={15} />
                {group.dir}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
