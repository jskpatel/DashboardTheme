import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { ContentWrapper, Wrapper } from "./AdminLayout.styled";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <ContentWrapper>
          <Header />
          {children}
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default AdminLayout;
