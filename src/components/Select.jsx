import { Select, SelectItem } from "@nextui-org/react";

export default function SelectText(props) {
  return (
    <Select
      onChange={props.onChange}
      // variant={`flat`}
      label={props.label}
      placeholder={props.placeholder}
      startContent={props.icon}
      size="lg"
      isRequired
      classNames={{
        label: "text-black/50",
        base: [
          "bg-transparent",
          "text-black/90",
          "placeholder:text-default-700/50",
        ],
        listbox: [
          "bg-transparent",
          "text-black/90",
          "placeholder:text-default-700/50",
        ],
        // mainWrapper: [
        //   "shadow-xl",
        //   "backdrop-blur-xl",
        //   "backdrop-saturate-200",
        //   "hover:bg-default-200/70",
        //   "group-data-[focus=true]:bg-default-200/50",
        //   "!cursor-text",
        // ],
      }}
    >
      {props.listData.map((item) => (
        <SelectItem key={item.name}>{item.name}</SelectItem>
      ))}
    </Select>
  );
}
