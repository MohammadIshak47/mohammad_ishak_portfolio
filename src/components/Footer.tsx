const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-paper-muted sm:flex-row sm:px-8">
        <p className="font-mono">
          <span className="text-signal">~/</span>ishak.dev © {year}
        </p>
        <p className="font-mono">Built with React · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
