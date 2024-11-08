import React from "react";
import { useNavigate } from "react-router-dom";

function Navigate() {
  const Navigate = useNavigate();

  const goToPage = () => {
    Navigate("/about");
  };

  return (
    <>
      <button onClick={goToPage}>Go to about page</button>
    </>
  );
}

export default Navigate;
