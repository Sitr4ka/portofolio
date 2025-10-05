import React from "react";
import { FaGithub, FaGithubAlt } from "react-icons/fa";

const Card = ({ item, title, content, technos }) => {
  return !technos ? (
    <div className="rounded-xl cursor-pointer space-y-4 min-h-70 place-content-center border bg-gradient-to-br from-card to-secondary border-border bg-card text-card-foreground shadow-sm hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(0,188,255,0.2)] group">
      <div className="card-header flex flex-col space-y-3 px-6 border">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <item.icon className="w-[32px] h-[32px] text-primary" />
        </div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
      </div>

      <div className="text-sm text-muted-foreground px-6 text-justify">
        {content}
      </div>
    </div>
  ) : <DefaultCard cardImg={item.img} title={title} technos={technos}/>;
};

export default Card;

const DefaultCard = ({ cardImg, title, technos }) => {
  return (
    <div className="rounded-xl h-max cursor-pointer space-y-4 pb-6 border bg-gradient-to-br from-card to-secondary border-border bg-card text-card-foreground shadow-sm hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(0,188,255,0.2)] group">
      <div className="w-full h-40 overflow-hidden">
        <img src={cardImg} className="text-primary rounded-md"/>
      </div>
      <div className="card-header flex flex-col space-y-3 px-6 border">
        <h4 className="text-2xl font-semibold">
          {title}
        </h4>
        <div className="technos flex flex-wrap gap-2">
          {technos.map((techno, id) => (
            <div key={id} className=" text-sm  py-1 px-2 border border-primary/30 text-primary flex justify-center items-center rounded-2xl">
              {techno}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="github">
      </div> */}
    </div>
  );
};
