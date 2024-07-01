import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Link,
  useDisclosure,
} from "@nextui-org/react";
import HTMLReactParser from "html-react-parser";
export default function TextModal(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Link onPress={onOpen} className="cursor-pointer">
        {props.title}
      </Link>
      <Modal
        size="xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {props.title}
              </ModalHeader>
              <ModalBody>{HTMLReactParser(props.content)}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
