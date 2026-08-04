export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-white w-full flex-shrink-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 sm:px-8 py-4 mx-auto gap-2">
        <div className="text-sm tracking-widest font-bold uppercase text-white text-center md:text-left">
          © 2024 Mohammad Iqbal.
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/miqi4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-widest font-bold uppercase text-gray-400 hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/mohammad-iqbal-766023386/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm tracking-widest font-bold uppercase text-gray-400 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:mdiqbaal412@gmail.com"
            className="text-sm tracking-widest font-bold uppercase text-gray-400 hover:text-white transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
