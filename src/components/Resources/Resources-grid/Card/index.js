import React from "react";
import { Link } from "gatsby";
import Image from "../image";

import { CardWrapper } from "./Card.style";

const Card = ({ data }) => {
  return (
    <CardWrapper >
      <div className="post-block">
        <div className="post-thumb-block">
          <img
            src = {data.image}
            imgStyle={{ objectFit: "contain" }}
            alt={data.name}
          />
        </div>
        <div className="post-content-block">
          <h2 className="post-title">
            {data.name}
          </h2>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
