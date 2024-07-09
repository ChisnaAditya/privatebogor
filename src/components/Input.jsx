import React from "react";
import { Input } from "@nextui-org/react";

export default function InputText(props) {
  return (
    <Input
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      label={props.label}
      placeholder={props.placeholder}
      size="lg"
      startContent={props.icon}
      isInvalid={props.isInvalid}
      errorMessage={props.errorMessage}
      required
      classNames={{
        label: "text-black/80",
        input: [
          "bg-transparent",
          "text-black/50",
          "placeholder:text-default-700/50",
        ],
      }}
    />
  );
}
