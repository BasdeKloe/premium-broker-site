import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Anchor } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-navy-800">
        <Container>
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-navy-700 flex items-center justify-center">
              <Anchor className="w-12 h-12 text-gold-500" />
            </div>
            <span className="text-overline text-gold-500 block mb-4">
              PAGE NOT FOUND
            </span>
            <h1 className="text-hero text-white mb-6">404</h1>
            <p className="text-body-lg text-neutral-300 mb-10 max-w-lg mx-auto">
              It seems you've drifted off course. Let us guide you back to safe waters.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
