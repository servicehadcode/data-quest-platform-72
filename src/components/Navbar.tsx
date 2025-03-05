
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold">X</span>
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
          </div>
          <span className="font-semibold text-xl tracking-tight">XYZ Education</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              asChild
              className={location.pathname === "/" ? "bg-primary/10" : ""}
            >
              <Link to="/">Home</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild
              className={location.pathname === "/interviews" ? "bg-primary/10" : ""}
            >
              <Link to="/interviews">Request Interview</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild
              className={location.pathname === "/projects" ? "bg-primary/10" : ""}
            >
              <Link to="/projects">Learn Projects</Link>
            </Button>
          </nav>
          <div className="flex items-center space-x-2 ml-4">
            {isAuthenticated ? (
              <>
                <Button size="sm" asChild>
                  <Link to="/profile">
                    <User className="h-4 w-4 mr-2" />
                    Your Profile
                  </Link>
                </Button>
                <Button size="sm" variant="outline" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Button size="sm" asChild>
                <a href="#auth-section">
                  <User className="h-4 w-4 mr-2" />
                  Login / Register
                </a>
              </Button>
            )}
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
          <nav className="flex flex-col space-y-2">
            <Button 
              variant="ghost" 
              className="justify-start" 
              asChild
              data-active={location.pathname === "/"}
            >
              <Link to="/">Home</Link>
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start" 
              asChild
              data-active={location.pathname === "/interviews"}
            >
              <Link to="/interviews">Request Interview</Link>
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start" 
              asChild
              data-active={location.pathname === "/projects"}
            >
              <Link to="/projects">Learn Projects</Link>
            </Button>
          </nav>
          <div className="flex flex-col space-y-2 mt-4">
            {isAuthenticated ? (
              <>
                <Button className="w-full justify-start" asChild>
                  <Link to="/profile">
                    <User className="h-4 w-4 mr-2" />
                    Your Profile
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Button className="w-full justify-start" asChild>
                <a href="#auth-section">
                  <User className="h-4 w-4 mr-2" />
                  Login / Register
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
