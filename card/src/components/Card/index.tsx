import React from "react";

interface Props {
  title: string;
  description: string;
  rate: number;
}

import styled from "./card.module.css";

const Card = ({ title, description, rate }: Props) => {
  return (
    <>
      {rate < 2 && (
        <div className={styled.div}><h1 className={styled.menosAvaliado}>{"menos avaliado"}</h1><h2 className={styled.titulo}>{title}</h2><p>{description}</p></div>
      )}

      {rate >= 2  && (
         <div className={styled.div}><h2 className={styled.titulo}>{title}</h2><p>{description}</p></div>
      )}
    </>
  );
};

export default Card;
