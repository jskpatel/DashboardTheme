import { Image } from "react-bootstrap";
import empty from "../assets/images/empty.png";

const EmptyTable = ({ msg, icon }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "40vh" }}
    >
      <Image src={icon || empty} />
      <h4>{msg || "No data found!"}</h4>
    </div>
  );
};

export default EmptyTable;
