
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import AuthButtons from "@/components/AuthButtons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div id="auth-section">
          <AuthButtons />
        </div>
        <FeaturedProjects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
