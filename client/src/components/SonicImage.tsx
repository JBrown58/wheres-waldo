import { Image } from "@chakra-ui/react";
import sonicImage from "/assets/images/sonic.webp";
import { Box } from "@chakra-ui/react";

interface Props {
  setCurrentCharacter: React.Dispatch<React.SetStateAction<string>>;
  allCharacters: Array<string>;
}
const SonicImage = ({ setCurrentCharacter, allCharacters }: Props) => {
  return (
    <>
      {!allCharacters.includes("Sonic The Hedgehog") && (
        <Box _hover={{ bg: "green" }}>
          <Image
            name="Sonic The Hedgehog"
            onClick={() => setCurrentCharacter("Sonic The Hedgehog")}
            cursor={"pointer"}
            src={sonicImage}
            data-testid="sonic-image"
          />
        </Box>
      )}
    </>
  );
};

export default SonicImage;
