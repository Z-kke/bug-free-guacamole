import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {[{ title: "Title1", description: "Desc1" }].map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={}
          />
        ))}
      </BentoGrid>{" "}
    </section>
  );
};

export default Grid;
