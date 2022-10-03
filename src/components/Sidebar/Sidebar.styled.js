import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 7.4rem;
`;
export const TopLogo = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    text-align: center;
    padding: 2.9rem 0;
  }
`;
