import styled from "styled-components";

export const Headerbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;

  .searchbar {
    position: relative;
    width: 100%;
    max-width: 36.2rem;
    svg {
      position: absolute;
      left: 1.3rem;
      top: 1.3rem;
      path {
        color: var(--black);
      }
    }
    span {
      position: absolute;
      right: 0.8rem;
      top: 0.8rem;
      width: 5.4rem;
      height: 2.8rem;
      border-radius: 0.7rem;
      display: flex;
      justify-content: flex-end;
      padding: 0.3rem 1rem;
    }
    input {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: var(--gray);
      padding: 1.2rem 6.5rem 1.2rem 4.7rem;
      width: 100%;
      border: 0;
      border-radius: 1.3rem;
    }
  }

  .themeModeSwitch {
    display: flex;

    .form-switch {
      transform: scale(1.2);
      padding-left: 2.9em;

      .form-check-input {
        cursor: pointer;
      }
    }
  }

  .messageNotify {
    position: relative;
    &Dot {
      background: var(--light-red);
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 100%;
      display: flex;
      position: absolute;
      top: 0.2rem;
      right: 0;
    }
  }
`;

export const ProfileIcon = styled.span`
  height: 4.6rem;
  width: 4.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue-dark);
  border-radius: 100%;
`;
