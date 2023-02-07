import React, { useState } from "react";

function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [money, setMoney] = useState(10);

    const handleClick = () => {
      setMoney(money * 2);
    };
    return <OriginalComponent handleClick={handleClick} money={money}/>;
  }
  return NewComponent;
}

export default UpdatedComponent;
