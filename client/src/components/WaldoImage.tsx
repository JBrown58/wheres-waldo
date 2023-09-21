import { Image, border } from "@chakra-ui/react";
import sonicImage from "/assets/images/waldo.png";
import { MouseEvent } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  handleClick: (event: MouseEvent) => void;
}

const WaldoImage = ({ setCurrentCharacter }) => {
  return (
    <Box _hover={{ bg: "green" }}>
      <Image
        onClick={() => setCurrentCharacter("Waldo")}
        cursor={"pointer"}
        src={sonicImage}
        // boxSize={"sm"}
      />
    </Box>
  );
};

export default WaldoImage;
