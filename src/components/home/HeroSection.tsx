import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { SITE_CONFIG } from "@/lib/constants";
import { useIsMobileOrTablet } from "@/hooks/use-mobile";
import heroYacht from "@/assets/hero-yacht.jpg";
import heroVideo from "@/assets/herosectievideoh.mp4";
export const HeroSection = () => {
  const isMobileOrTablet = useIsMobileOrTablet();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Start video at 8 seconds to show the yacht immediately on mobile
      videoRef.current.currentTime = 8;
    }
  }, []);

  return <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-navy flex items-center justify-center">
        <video ref={videoRef} autoPlay muted loop playsInline preload="auto" disablePictureInPicture className="w-full h-full object-cover object-center" style={{
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0, 0, 0)'
      }}>
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay - minimized for maximum video clarity */}
        <div className="absolute inset-0 bg-navy/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-white mb-6 text-5xl">
          De Kloe Yachts
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-body-lg text-white/90 mb-10 max-w-2xl mx-auto">
          {SITE_CONFIG.tagline}
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetId="intro" />
    </section>;
};