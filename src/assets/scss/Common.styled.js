import styled from "styled-components";

export const CardFullWidth = styled.div`
  border-radius: 1.2rem;
  border: 0;
  width: 100%;
  padding: 1.5rem 1.8rem;
  margin: 2rem 0 3rem;
`;

export const InlineCardsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0 3rem;
`;

export const ProfitFloor = styled.div`
  width: calc(66.66% - 1rem);
  flex-basis: calc(66.66% - 1rem);
  padding: 2rem;
  border-radius: 1.5rem;
`;

export const SettingOptions = styled.div`
  position: absolute;
  z-index: 9;
  top: calc(100% + 0.5rem);
  right: 0;
  border-radius: 1rem;
  width: 20rem;
  overflow: hidden;
  ul {
    display: flex;
    flex-direction: column;
    li {
      width: 100%;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: var(--blue-light);
      }

      span {
        width: 100%;
        height: auto;
        padding: 1.5rem;
        display: flex;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.2;
      }
    }
  }
`;
