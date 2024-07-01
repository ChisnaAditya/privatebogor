import React from "react";
import { Input } from "@nextui-org/react";

export default function InputText(props) {
  return (
    <Input
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      variant={`bordered`}
      label={props.label}
      placeholder={props.placeholder}
      size="lg"
      isInvalid={props.isInvalid}
      errorMessage={props.errorMessage}
      required
    />
  );
}
