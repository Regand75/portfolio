import styled from "styled-components";
import {Icon} from "../../../components/common/Icon.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import {buttonViewAll, hoverEffect} from "../../../styles/Mixins.ts";
import {Link} from "react-router-dom";

//Contacts
const Contacts = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 84px;
    min-height: calc(100vh - 215px);
`;

const LinkWrapper = styled(Link)`
    
    button {
        ${buttonViewAll}
    }
`;

const TitleFlexWrapper = styled(FlexWrapper)`
    @media screen and (max-width: 375px) {
        flex-wrap: wrap;
        padding-bottom: 30px;
    }
`;

const AfterContentFromDots = styled(Icon)`
    position: absolute;
    top: 225px;
    right: 0;
    
    @media screen and (max-width: 1210px) {
        display: none;
}
`;

//ContactsBlock
const ContactsBlock = styled.article`
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

//ContactsAll
const ContactsAll = styled.section`
    position: relative;
    padding-top: 114px;
    min-height: calc(100vh - 215px);
`;

const BeforeContentFromDotsTop = styled(Icon)`
    position: absolute;
    top: 400px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const ContactsWrapper = styled.div`
    padding-bottom: 25px;
`;

const Description = styled.p`
    padding-bottom: 46px;
`;

const AllMediaWrapper = styled.div`
    padding-bottom: 84px;
`;

const MediaWrapper = styled(FlexWrapper)`
    cursor: pointer;
    
    span {
        ${hoverEffect()};
    }
`;

const AfterContentFromBlock = styled(Icon)`
    position: absolute;
    top: 255px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

export const S = {
    Contacts,
    LinkWrapper,
    TitleFlexWrapper,
    AfterContentFromDots,
    ContactsBlock,
    MeDescription,
    BlockFlexWrapper,
    SupportBlock,
    SupportTitle,
    MessageBlock,
    MessageTitle,
    MessageWrapper,
    ContactsAll,
    BeforeContentFromDotsTop,
    ContactsWrapper,
    Description,
    AllMediaWrapper,
    MediaWrapper,
    AfterContentFromBlock,
}