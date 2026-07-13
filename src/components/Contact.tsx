import { Github, Linkedin, Mail, Phone, FileDown } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-ink-line">
      <div className="section text-center">
        <p className="eyebrow mb-3">05 · Contact</p>
        <h2 className="text-3xl font-bold text-paper sm:text-4xl">Let's build something</h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] text-paper-muted">
          Open to full-time and contract remote roles as a Full Stack / Software Developer.
          The fastest way to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:ishak199bd@gmail.com" className="btn-primary">
            <Mail size={16} />
            ishak199bd@gmail.com
          </a>
          <a href="tel:+8801633580471" className="btn-outline">
            <Phone size={16} />
            +88 01633580471
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
          <a href="/Mohammad_Ishak_Resume.pdf" download className="btn-outline">
            <FileDown size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
