import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Icon} from "../../../components/common/Icon.tsx";

type ContactsBlockShowPropsType = {
    showBlock?: boolean,
}

export const ContactsBlock = (props: ContactsBlockShowPropsType) => {
    return (
        <StyledContactsBlock>
            <FlexWrapper $justify='space-between' $gap='11px'>
                <MeDescription>
                    <p>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me
                    </p>
                </MeDescription>
                {props.showBlock && (
                    <SupportBlock>
                        <SupportTitle>Support me here</SupportTitle>
                        <span>4149500120690030</span>
                    </SupportBlock>
                )}
                <MessageBlock>
                    <MessageTitle>Message me here</MessageTitle>
                    <FlexWrapper direction={'column'} $justify='space-between' $gap='8px'>
                        <MessageWrapper $align='center' $gap='8px'>
                            <Icon iconId={'discord'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                            <span>Urazov#3294</span>
                        </MessageWrapper>
                        <MessageWrapper $align='center' $gap='8px'>
                            <Icon iconId={'email'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                            <span>urazovs_k@mail.ru</span>
                        </MessageWrapper>
                    </FlexWrapper>
                </MessageBlock>
            </FlexWrapper>
        </StyledContactsBlock>
    );
};

const StyledContactsBlock = styled.article`

`;

const MeDescription = styled.div`
    max-width: 515px;
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    line-height: 26px;
    color: ${({theme}) => theme.colors.secondary};
`;

const SupportBlock = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 16px;
    margin-left: auto;
    height: fit-content;
`;

const SupportTitle = styled.h3`
    margin-bottom: 8px;
    font-family: 'Fira Code', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: ${({theme}) => theme.colors.primary};
`;

const MessageBlock = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 16px;
    height: fit-content;
`;

const MessageTitle = styled.h3`
    margin-bottom: 16px;
    font-family: 'Fira Code', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: ${({theme}) => theme.colors.primary};
`;

const MessageWrapper = styled(FlexWrapper)`
    cursor: pointer;
    
    span {
        transition: filter 0.3s ease, fill 0.3s ease;

        &:hover {
            filter: drop-shadow(0 0 6px ${(props) => props.theme.colors.secondary});
        }
    }
`;