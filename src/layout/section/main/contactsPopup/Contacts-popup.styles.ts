import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const scaleIn = keyframes`
    from {
        transform: translate(-50%, -50%) scale(0.9);
        opacity: 0;
    }
    to {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: ${({ theme }) => theme.colors.bgPopup};
    z-index: 99;
    animation: ${fadeIn} 0.3s ease forwards;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContactsPopup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadows.popup};
    padding: 32px;
    z-index: 100;
    max-width: 569px;
    width: 100%;
    animation: ${scaleIn} 0.3s ease forwards;
    
    @media screen and (max-width: 600px) {
        width: 95%;
    }
`;

export const Form = styled.form`
    
    textarea {
        resize: none;
        height: 120px;
    }
`;

export const Field = styled.input`
  padding: 8px;
    width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

export const S = {
    Overlay,
    ContactsPopup,
    Form,
    Field,
}