import { ReactComponent as Logo } from "./../../assets/images/logo.svg";
import Category from "./../../assets/images/category.svg";
import Module2 from "./../../assets/images/icon_1.svg";
import Module3 from "./../../assets/images/module3.svg";
import User from "./../../assets/images/user.svg";
import { SidebarWrapper, TopLogo, Ul } from "./Sidebar.styled";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper className="bgTheme">
        <TopLogo>
          <Logo className="cursor-pointer" />
        </TopLogo>
        <Ul>
          <li>
            <Link to="/dashboard" className="cursor-pointer">
              <img src={Category} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link to="/google-ads" className="cursor-pointer">
              <img src={Module2} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link to="/ringba" className="cursor-pointer">
              <img src={Module3} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="cursor-pointer">
              <img src={User} alt="Icon" />
            </Link>
          </li>
        </Ul>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
