import React from "react";

const Card = ({ item, title, content }) => {
  return (
    <div className="rounded-xl cursor-pointer h-70 place-content-center border bg-gradient-to-br from-card to-secondary border-border bg-card text-card-foreground shadow-sm hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,188,255,0.2)] group">
      <div className="card-header flex flex-col space-y-3 p-6">
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
  );
};

export default Card;
