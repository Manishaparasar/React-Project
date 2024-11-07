
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./button.module.css"; 

export default function Button({ buttonText, route, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    }
    if (route) {
      navigate(route); 
    }
  };

  return (
    <div className={style.button}>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
