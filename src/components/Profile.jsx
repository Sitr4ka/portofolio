import React from "react";
import profileImg from "../assets/images/profile.jpg";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-8 relative">
        <div className="img-container w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(0,188,255,0.3)]">
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
      <button className="mt-8 h-11 rounded-md px-8 text-primary-foreground bg-primary cursor-pointer hover:bg-primary/90 shadow-[0_0_20px_rgba(0,188,255,0.3)] hover:shadow-[0_0_30px_rgba(0,188,255,0.5)] transition-all">
        Télécharger CV
      </button>
    </div>
  );
};

export default Profile;
