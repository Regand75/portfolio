import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import {Icon} from "../../../components/common/icon/Icon.tsx";
import {AboutMePropsType} from "./About-me.tsx";

//About-me
const AboutMeFlexWrapper = styled(FlexWrapper)`
    @media screen and (max-width: 845px) {
        flex-wrap: wrap;
    }
`;

const Wrapper = styled.div`
    max-width: 610px;
`;

const Description = styled.div`
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    line-height: 25px;
    color: ${({theme}) => theme.colors.secondary};

    p {
        margin-bottom: 27px;
    }

    p:last-child {
        margin-bottom: 4px;
    }
`;

const ImageWrapper = styled.div<AboutMePropsType>`
    position: relative;
    margin-top: ${props => props.$mt || '-65px'};

    @media screen and (max-width: 845px) {
        margin-top: 0;
        margin-inline: auto;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 47px;
        width: 80%;
        height: 1px;
        background-color: ${({theme}) => theme.colors.tertiary};
    }
`;

const BeforeIcon = styled(Icon)`
    position: absolute;
    top: 60px;
    left: 5px;
    z-index: 2;
`;

const Image = styled.img`
    width: 100%;
`;

const AfterIcon = styled(Icon)`
    position: absolute;
    bottom: 175px;
    right: 7px;
    z-index: 2;
`;

//About-me-component
const AboutMe = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 160px;
    min-height: calc(100vh - 215px);
`;

const BeforeContentFromBlock = styled(Icon)`
    position: absolute;
    top: 248px;
    left: 0;
    
    @media screen and (max-width: 1210px) {
        display: none;
}
`;

const AfterContentFromDots = styled(Icon)`
    position: absolute;
    top: 415px;
    right: 0;
    
    @media screen and (max-width: 1210px) {
        display: none;
}
`;

//About-me-full
const AboutMeFull = styled.section`
    position: relative;
    padding-top: 114px;
    min-height: calc(100vh - 215px);
`;

const BeforeContentFromDotsTop = styled(Icon)`
    position: absolute;
    top: 403px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const BeforeContentFromBlockFull = styled(Icon)`
    position: absolute;
    top: 1200px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const AboutMeWrapper = styled.div`
    padding-bottom: 112px;
`;

const DescriptionFull = styled.p`
    padding-bottom: 112px;

    @media screen and (max-width: 845px) {
        padding-bottom: 30px;
    }
`;

const SkillsWrapper = styled.div`
    padding-bottom: 83px;
`;

const SkillsFlexWrapper = styled(FlexWrapper)`
    @media screen and (max-width: 768px) {
        justify-content: space-around;
    }
`;

const FactsWrapper = styled.div`
    padding-bottom: 114px;
`;

const WrapperFull = styled(FlexWrapper)`
    max-width: 610px;
`;

const GroupImage = styled.img`
    width: 178px;
    height: 169px;
    margin-right: 85px;
    object-fit: contain;

    @media screen and (max-width: 637px) {
        margin-right: 0;
    }
    
    @media screen and (max-width: 580px) {
        display: none;
    }
`;

const AfterContentFromBlock = styled(Icon)`
    position: absolute;
    top: 260px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const AfterContentFromDots1 = styled(Icon)`
    position: absolute;
    top: 767px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const AfterContentFromDots2 = styled(Icon)`
    position: absolute;
    top: 1370px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

//Me-fact
const MyFact = styled.div`
    padding: 8px;
    border: 1px solid ${({theme}) => theme.colors.secondary};

    @media screen and (max-width: 425px) {
        width: 100%;
    }
`;
export const S = {
    AboutMeFlexWrapper,
    Wrapper,
    Description,
    ImageWrapper,
    BeforeIcon,
    Image,
    AfterIcon,
    AboutMe,
    BeforeContentFromBlock,
    AfterContentFromDots,
    AboutMeFull,
    BeforeContentFromDotsTop,
    BeforeContentFromBlockFull,
    AboutMeWrapper,
    DescriptionFull,
    SkillsWrapper,
    SkillsFlexWrapper,
    FactsWrapper,
    WrapperFull,
    GroupImage,
    AfterContentFromBlock,
    AfterContentFromDots1,
    AfterContentFromDots2,
    MyFact,
}