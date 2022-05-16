import React from "react";

const Selection = props => {
  const [background, setBackground] = useState({ background: "" });
  const handleClick = () => {
    setBackground(props.applyColor);
  };
  return (
    <>
      <div className="fix-box" onClick={handleClick}>
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
