import styled from 'styled-components';
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';

interface ContainerProps {
  isCurrent: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  height: 70px;
  background: ${(props) => props.theme.colors.gray};
  z-index: 99;
  box-shadow: 0 2px 0 rgba(255, 255, 255, 0.5) inset,
                0 -2px 0 rgba(255, 255, 255, 0.1) inset,
                0 5px 0 rgba(0, 0, 0, 0.01),
                0 5px 3px rgba(0, 0, 0, 0.5);
`;

export const MessageContainer = styled(ScrollToBottom)`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
`;

export const Message = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${(props) => (props.isCurrent ? 'flex-end' : 'flex-start')};
  padding: 0 5%;
  margin-top: 15px;

  div {
    background: ${(props) => (props.isCurrent ? props.theme.colors.primary : props.theme.colors.gray)};
    border-radius: ${(props) => (props.isCurrent ? '20px 20px 0 20px' : '20px 20px 20px 0')};
    padding: 10px 20px;
    color: ${(props) => (props.isCurrent ? props.theme.colors.textLight : props.theme.colors.textDark)};
    display: inline-block;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.gray};
  position: sticky;
  bottom: 0;

  display: flex;
  align-items: center;
  padding: 0 20px;

  input {
    height: 40px;
    width: 90%;
    padding: 5px 20px;
    margin: 0 25px;
    border: 1px solid #333;
    border-radius: 20px;
  }

  button {
    background: 0;
    border: 0;

    svg {
      font-size: 30px;
      color: ${(props) => props.theme.colors.primary}
    }
  }
`;
