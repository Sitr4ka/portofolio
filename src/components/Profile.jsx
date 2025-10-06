import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/images/profile.jpg";
import { usePageLoad } from "../context/PageLoadContext";

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { setIsPageLoaded } = usePageLoad();

  useEffect(() => {
    const img = new Image();
    img.src = profileImg;
    img.onload = () => {
      setTimeout(() => {
        setIsLoaded(true);
        setIsPageLoaded(true); //
      }, 300);
    };
  }, [setIsPageLoaded]);

  return (
    <aside className="min-h-screen border-border lg:sticky lg:top-0 lg:h-screen flex flex-col items-center justify-center p-8 text-center lg:bg-card/50 relative overflow-hidden">
      {/* Loader visible pendant le chargement */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            className="absolute lg:invisible inset-0 flex items-center justify-center bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              className="mb-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(0,188,255,0.3)]">
                <img
                  src={profileImg}
                  alt="Sitraka Fifaliana"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="profile space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-foreground">Sitraka Fifaliana</h3>
              <h3 className="text-foreground">RAKOTOMALALARINTSOA</h3>
              <h4 className="italic text-primary">Développeur fullstack</h4>
              <div className="pt-4">
                <h5 className="text-muted-foreground leading-relaxed max-w-xs">
                  "Des lignes de codes pour transformer vos idées en réalités"
                </h5>
              </div>
            </motion.div>

            <motion.a
              href="/CV_RAKOTOMALALARINTSOA_SITRAKA_FIFALIANA.pdf"
              className="flex items-center justify-center mt-8 h-11 rounded-md px-8 text-primary-foreground bg-primary cursor-pointer hover:bg-primary/90 shadow-[0_0_20px_rgba(0,188,255,0.3)] hover:shadow-[0_0_30px_rgba(0,188,255,0.5)] transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Télécharger CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Profile;
