import React from "react";
import profileImg from "../assets/images/profile.jpg";

const Profile = () => {
  return (
    <aside className="min-h-screen border-b border-border lg:sticky lg:top-0 lg:h-screen placeholder flex flex-col items-center justify-center p-8 text-center lg:bg-card/50">
      <div className="mb-8 relative">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(0,188,255,0.3)]">
          <img
            src={profileImg}
            alt="Sitraka Fifaliana"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="profile space-y-3">
        <h3 className="text-foreground">Sitraka Fifaliana</h3>
        <h3 className="text-foreground">RAKOTOMALALARINTSOA</h3>
        <h4 className="italic text-primary">Développeur fullstack</h4>
        <div className="pt-4">
          <h5 className="text-muted-foreground leading-relaxed max-w-xs">
            "Des lignes de codes pour transformer vos idées en réalités"
          </h5>
        </div>
      </div>
      <a
        href="/CV_RAKOTOMALALARINTSOA_SITRAKA_FIFALIANA.pdf"
        className="flex items-center justify-center mt-8 h-11 rounded-md px-8 text-primary-foreground bg-primary cursor-pointer hover:bg-primary/90 shadow-[0_0_20px_rgba(0,188,255,0.3)] hover:shadow-[0_0_30px_rgba(0,188,255,0.5)] transition-all"
      >
        Télécharger CV
      </a>
    </aside>
  );
};

export default Profile;
