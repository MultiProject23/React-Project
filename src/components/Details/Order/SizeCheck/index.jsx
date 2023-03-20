import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, SelectedButton } from "./index.styled";

function SizeCheck() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "S", value: "1" },
    { name: "M", value: "2" },
    { name: "L", value: "3" },
  ];

  return (
    <ButtonGroup>
    {radios.map((radio, idx) => (
      radioValue === radio.value ? 
      <SelectedButton
        key={idx}
        id={`radio-${idx}`}
        type="radio"
        variant={idx % 2 ? "outline-success" : "outline-danger"}
        name="radio"
        value={radio.value}
        onChange={(e) => setRadioValue(e.currentTarget.value)}
        checked={radioValue === radio.value}
      >
        {radio.name}
      </SelectedButton> : 
      <Button 
        key={idx}
        id={`radio-${idx}`}
        type="radio"
        variant={idx % 2 ? "outline-success" : "outline-danger"}
        name="radio"
        value={radio.value}
        onClick={(e) => setRadioValue(e.currentTarget.value)}
        checked={radioValue === radio.value}>
        {radio.name}
      </Button>
    ))}
  </ButtonGroup>
  );
}

export default SizeCheck;