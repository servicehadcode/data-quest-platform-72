
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import AuthButtons from "@/components/AuthButtons";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AuthButtons />
        <FeaturedProjects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
