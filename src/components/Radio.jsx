import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function RadioInput(props) {
  return (
    <RadioGroup
      label="Apakah sudah pernah belajar bahasa Inggris?"
      defaultValue="Sudah"
      orientation="horizontal"
      size="sm"
      onChange={props.onChange}
    >
      <Radio value="Sudah">Sudah</Radio>
      <Radio value="Belum">Belum</Radio>
    </RadioGroup>
  );
}
