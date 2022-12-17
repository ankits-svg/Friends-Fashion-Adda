import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import "./ParentCart.css"
export const ParentCart = () => {
  

  
  return (
    <div className="mainCart">
      <CartItems />
      <CartTotal />
    </div>
  );
};


