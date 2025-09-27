import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import {SkillStyleProps} from "./Skill.tsx";

// styles Skill
const Skills = styled.section`
    padding-top: 106px;
`;

const ImageWrapper = styled.div`
    margin-left: 30px;
    max-width: 350px;
    max-height: 284px;
    width: 100%;

    @media screen and (max-width: 974px) {
        display: none;
    }
`;

const GroupImage = styled.img`
    width: 100%;
    height: auto;
`;

const Wrapper = styled(FlexWrapper)`
    margin-top: 31px;
    height: 280px;

    @media screen and (max-width: 974px) {
        height: auto;
    }
`;

const SkillsFlexWrapper = styled(FlexWrapper)`
    @media screen and (max-width: 974px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 768px) {
        justify-content: space-around;
    }
`;

// styles Skills
const Skill = styled.div<SkillStyleProps>`
    width: ${props => props.$height || '178px'};
    height: fit-content;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    text-align: start;

    @media screen and (max-width: 425px) {
        width: 100%;
    }
`;

const Title = styled.h3`
    font-family: 'Fira Code', sans-serif;
    font-weight: 600;
    color: ${({theme}) => theme.colors.primary};
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};;
    padding: 8px;
`;

const List = styled.p`
    padding: 8px;
    line-height: 1.5;
`;

export const S = {
    Skills,
    ImageWrapper,
    GroupImage,
    Wrapper,
    SkillsFlexWrapper,
    Skill,
    Title,
    List,
}