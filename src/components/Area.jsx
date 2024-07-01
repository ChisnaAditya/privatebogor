import { Textarea } from "@nextui-org/input";

export default function InputArea(props) {
  return (
    <Textarea
      onChange={props.onChange}
      label={props.label}
      placeholder={props.placeholder}
      size="lg"
      variant="bordered"
      required
    />
  );
}
