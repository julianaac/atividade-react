import React from "react";

interface Props {
  title: string;
  type: string;
}

import styled from "./button.module.css";

const Button = ({ title, type }: Props) => {
  return (
    <>
      {type === "primary" && (
        <button className={styled.buttonPrimary}>{title}</button>
      )}

      {type === "secondary" && (
        <button className={styled.buttonSecondary}>{title}</button>
      )}
    </>
  );
};

export default Button;
