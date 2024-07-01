import { Select, SelectItem } from "@nextui-org/react";

export default function SelectText(props) {
  return (
    <Select
      onChange={props.onChange}
      variant={`bordered`}
      label={props.label}
      placeholder={props.placeholder}
      size="lg"
      isRequired
    >
      {props.listData.map((item) => (
        <SelectItem key={item.name}>{item.name}</SelectItem>
      ))}
    </Select>
  );
}
