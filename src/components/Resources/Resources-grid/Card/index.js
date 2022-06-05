import React from "react";
import { CardWrapper } from "./Card.style";

const Card = ({ data }) => {
  return (
    <CardWrapper >
      <div className="post-block">
      <div className="chip">
          <small className="pattern-type"> {data.type}</small>
        </div>
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
        <h6 className="pattern-id">{data.Id}</h6>
      </div>
    </CardWrapper>
  );
};

export default Card;
