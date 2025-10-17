import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      className="back-button" 
      onClick={() => navigate("/")}
    >
      <IoArrowBackOutline size={38} />
    </button>
  );
}

export default BackButton;
