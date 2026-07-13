import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const tabs = [
  { id: 'about', label: 'About.tsx' },
  { id: 'skills', label: 'Skills.ts' },
  { id: 'projects', label: 'Projects.tsx' },
  { id: 'experience', label: 'Experience.tsx' },
  { id: 'contact', label: 'Contact.tsx' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-ink-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6 sm:px-8">
        <button
          onClick={() => handleNavigate('top')}
          className="font-mono text-sm font-semibold tracking-tight text-paper"
        >
          <span className="text-signal">~/</span>ishak<span className="text-teal">.dev</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => handleNavigate(tab.id)}
                className={`flex items-center gap-2 rounded-t-md border-b-2 px-3 py-2 font-mono text-[13px] transition-colors ${
                  active === tab.id
                    ? 'border-signal text-paper'
                    : 'border-transparent text-paper-muted hover:text-paper'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    active === tab.id ? 'bg-signal' : 'bg-ink-line'
                  }`}
                />
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('contact');
          }}
          className="hidden font-mono text-[13px] font-semibold text-ink bg-signal rounded-lg px-4 py-2 md:inline-block hover:bg-signal-soft transition-colors"
        >
          Hire me →
        </a>

        <button
          className="text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-line bg-ink/95 px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => handleNavigate(tab.id)}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-3 font-mono text-sm text-paper-muted hover:bg-white/[0.03] hover:text-paper"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-ink-line" />
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
