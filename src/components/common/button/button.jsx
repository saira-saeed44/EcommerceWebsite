import React from "react";
const Button = ({ ...props }) => {
  const { label } = props;
  return (
    <div>
      <button {...props}>{label}</button>
    </div>
  );
};
export default Button;
