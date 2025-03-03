
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold">K</span>
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
          </div>
          <span className="font-semibold text-xl tracking-tight">DataQuest</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <div className="relative mx-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search competitions..."
              className="pl-10 w-[220px] h-9 bg-secondary/70 border-none focus-visible:ring-1"
            />
          </div>
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" asChild>
              <Link to="/competitions">Competitions</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/datasets">Datasets</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/notebooks">Notebooks</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/learn">Learn</Link>
            </Button>
          </nav>
          <div className="flex items-center space-x-2 ml-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass animate-fade-in p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search competitions..."
              className="pl-10 w-full bg-secondary/70 border-none"
            />
          </div>
          <nav className="flex flex-col space-y-2">
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/competitions">Competitions</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/datasets">Datasets</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/notebooks">Notebooks</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/learn">Learn</Link>
            </Button>
          </nav>
          <div className="flex items-center space-x-2 mt-4">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
