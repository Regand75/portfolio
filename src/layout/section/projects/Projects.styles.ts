import styled from "styled-components";
import {Button} from "../../../components/Button.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Link} from "react-router-dom";
import {buttonViewAll, gridLayout} from "../../../styles/Mixins.ts";

// styles project
const Project = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    width: 100%;
    height: fit-content;
    transition: ${({theme}) => theme.animations.transition};
    
    &:hover {
        transform: scale(1.03);
    }
    
    @media screen and (max-width: 426px) {
        max-width: none;
        width: 100%;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    height: auto;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }

    &:hover {
        ${Button} {
            opacity: 1;
        }

        &::before {
           opacity: 1;
        }
    }

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    @media screen and (max-width: 426px) {
        ${Button} {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 17 / 10;
`;

const MeSkills = styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.secondary};
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 8px;
    font-family: 'Fira Code', sans-serif;
    line-height: 21px;
    color: ${({theme}) => theme.colors.secondary};
`;

const Wrapper = styled.div`
    padding: 16px`;

const Title = styled.div`
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
`;

const Description = styled.div`
    font-family: 'Fira Code', sans-serif;
    line-height: 21px;
    color: ${({theme}) => theme.colors.secondary};
`;

// styles projects
const Projects = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 84px;
    min-height: calc(100vh - 215px);
`;

const TitleFlexWrapper = styled(FlexWrapper)`
    @media screen and (max-width: 375px) {
        flex-wrap: wrap;
        padding-bottom: 30px;
    }
`;

const AfterContentFromBlock = styled(Icon)`
    position: absolute;
    top: 384px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const LinkWrapper = styled(Link)`

    button {
        ${buttonViewAll}
    }
`;

const ProjectsWrapper = styled.div`
    ${gridLayout};
`;

// styles projectsAll
const ProjectsAll = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 157px;
    min-height: calc(100vh - 215px);
`;

const BeforeContentFromDotsTop = styled(Icon)`
    position: absolute;
    top: 405px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const BeforeContentFromBlock = styled(Icon)`
    position: absolute;
    top: 1260px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const BeforeContentFromDotsBottom = styled(Icon)`
    position: absolute;
    top: 1640px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const DescriptionAll = styled.p`
    padding-bottom: 68px;
`;

const ForAllWrapper = styled.div`
    padding-top: 48px;
    padding-bottom: 81px;
    ${gridLayout};
`;

const ForSmallWrapper = styled.div`
    padding-top: 48px;
    padding-bottom: 30px;
    ${gridLayout};
    
    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }

    @media screen and (max-width: 426px) {
        justify-content: center;
    }
`;

const AfterContentFromBlockAll = styled(Icon)`
    position: absolute;
    top: 260px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const AfterContentFromDots = styled(Icon)`
    position: absolute;
    top: 1430px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

export const S = {
    Project,
    ImageWrapper,
    Image,
    MeSkills,
    Wrapper,
    Title,
    DescriptionAll,
    Projects,
    TitleFlexWrapper,
    AfterContentFromBlock,
    LinkWrapper,
    ProjectsWrapper,
    ProjectsAll,
    BeforeContentFromDotsTop,
    BeforeContentFromBlock,
    BeforeContentFromDotsBottom,
    Description,
    ForAllWrapper,
    ForSmallWrapper,
    AfterContentFromBlockAll,
    AfterContentFromDots,
}