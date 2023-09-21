import { Image } from "@chakra-ui/react";
import whereswaldo from "../../public/assets/images/simple.jpg";
import { MouseEvent } from "react";

interface Props {
  handleClick: (event: MouseEvent) => void;
}

const WheresWaldoImage = ({ handleClick }: Props) => {
  return (
    <Image
      className="app"
      role="pop-menu"
      onClick={handleClick}
      cursor={"crosshair"}
      src={whereswaldo}
      minW={"100%"}
      backgroundSize={"cover"}
    />
  );
};

export default WheresWaldoImage;