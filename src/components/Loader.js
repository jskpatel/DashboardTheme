import { Oval } from "react-loader-spinner";

const Loader = ({
  height = 50,
  width = 50,
  strokeWidth = 4,
  color = "white",
  secondaryColor = "#fff700",
}) => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={height}
      width={width}
      strokeWidth={strokeWidth}
      color={color}
      secondaryColor={secondaryColor}
    />
  );
};

export default Loader;
