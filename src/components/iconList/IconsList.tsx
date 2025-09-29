import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const IconsList:React.FC = ({className}: {className?: string}) => {
    return (
        <SocialIconsList className={className}>
            <IconItem>
                <a href="https://github.com/Regand75?tab=repositories" target="_blank"
                          rel="noopener noreferrer">
                    <FooterIcon iconId={'github'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                </a>
            </IconItem>
            <IconItem>
                <a href="https://t.me/regandess" target="_blank" rel="noopener noreferrer">
                    <FooterIcon iconId={'telegram'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                </a>
            </IconItem>
            <IconItem>
                <a href="mailto:urazovs_k@email.ru">
                    <FooterIcon iconId={'email'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                </a>
            </IconItem>
        </SocialIconsList>
    );
};

const SocialIconsList = styled.ul`

`;

const IconItem = styled.li`
    cursor: pointer;
`;

const FooterIcon = styled(Icon)`
    color: ${({theme}) => theme.colors.secondary};

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;


