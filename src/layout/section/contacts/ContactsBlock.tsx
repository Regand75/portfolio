import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Icon} from "../../../components/common/Icon.tsx";
import {hoverEffect} from "../../../styles/Mixins.ts";

type ContactsBlockShowPropsType = {
    showBlock?: boolean,
}

export const ContactsBlock = (props: ContactsBlockShowPropsType) => {
    return (
        <StyledContactsBlock>
            <FlexWrapper $justify='space-between' $gap='30px'>
                <MeDescription>
                    <p>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me
                    </p>
                </MeDescription>
                <BlockFlexWrapper $gap='8px'>
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
                </BlockFlexWrapper>
            </FlexWrapper>
        </StyledContactsBlock>
    );
};

const StyledContactsBlock = styled.article`
    
    ${FlexWrapper} {
        @media screen and (max-width: 425px) {
            flex-wrap: wrap;
        } 
    }
`;

const MeDescription = styled.div`
    max-width: 515px;
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    line-height: 25px;
    color: ${({theme}) => theme.colors.secondary};
    
    @media screen and (max-width: 767px) {
        flex-shrink: 1;
    }
`;

const BlockFlexWrapper = styled(FlexWrapper)`
    @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
        width: 100%;
        flex-shrink: 3;
    }
`;

const SupportBlock = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 16px;
    margin-left: auto;
    height: fit-content;
    
    @media screen and (max-width: 767px) {
        width: 100%;
    }
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
    
    @media screen and (max-width: 425px) {
        width: 100%;
    }
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
        ${hoverEffect()};
    }
`;