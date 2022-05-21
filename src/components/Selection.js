import React, { useState } from "react";

const Selection = (props) => {
  const [background, setBackground] = useState({ background: "" });
  const handleClick = () => {
    setBackground(props.nextBackground);
  };
  return (
    <>
      <div className="fix-box" onClick={handleClick} style={background}>
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
