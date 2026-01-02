import React from "react";
import { MadeWithAutoPlans } from "./made-with-autoplans";
import { BrainCircuit, Github, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <BrainCircuit className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Text to Mind Map AI</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/features') ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
            >
              Features
            </Link>
            <Link 
              to="/templates" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/templates') ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
            >
              Templates
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/pricing') ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
            <a 
              href="https://github.com/mohamedgb00714/mindmap" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <Link to="/" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="border-t py-6 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2024 Text to Mind Map AI. All rights reserved.</p>
          <MadeWithAutoPlans />
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};