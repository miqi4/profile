export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 w-full flex-shrink-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 sm:px-8 py-4 mx-auto gap-2">
        <div className="text-base leading-[1.6] text-on-surface-variant text-center md:text-left">
          © 2024 Mohammad Iqbal.
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/miqi4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-wider font-medium text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/mohammad-iqbal-766023386/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-wider font-medium text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:mdiqbaal412@gmail.com"
            className="text-sm tracking-wider font-medium text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
