import { GraduationCap, MapPin, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="section">
        <p className="eyebrow mb-3">01 · About</p>
        <h2 className="text-3xl font-bold text-paper sm:text-4xl">
          Comfortable across the whole stack
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-paper-muted">
            <p>
              I'm a Full Stack Developer with a B.Sc. in Computer Science &amp; Engineering,
              building complete web applications end to end — from responsive React.js /
              Next.js front ends to Python (Django, FastAPI) REST APIs and PostgreSQL data
              models.
            </p>
            <p>
              My projects span an applicant tracking system, an online education platform,
              a live e-commerce pharmacy, and internal tools for asset tracking and personal
              analytics — so I'm equally comfortable shipping customer-facing products and
              backend-heavy admin systems.
            </p>
            <p>
              I'm comfortable with JWT authentication, Git-based collaboration, and Docker /
              CI deployment, and I currently work with a cross-functional remote team across
              U.S. time zones. I'm looking to keep growing as a full-stack engineer inside an
              international, remote-first team.
            </p>
          </div>

          <div className="panel space-y-5 p-6">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 shrink-0 text-signal" size={18} />
              <div>
                <p className="text-sm font-semibold text-paper">
                  B.Sc. Computer Science &amp; Engineering
                </p>
                <p className="text-sm text-paper-muted">
                  Manarat International University, Dhaka · CGPA 3.51/4.00 · 2026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-signal" size={18} />
              <div>
                <p className="text-sm font-semibold text-paper">Based in Dhaka, Bangladesh</p>
                <p className="text-sm text-paper-muted">Open to fully remote roles worldwide</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 shrink-0 text-signal" size={18} />
              <div>
                <p className="text-sm font-semibold text-paper">Flexible working hours</p>
                <p className="text-sm text-paper-muted">
                  Comfortable overlapping with U.S. EST / Europe CET teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
