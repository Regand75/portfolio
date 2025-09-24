import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {Icon} from "../../../components/common/Icon.tsx";
import {AboutMe} from "./About-me.tsx";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";

export const AboutMeComponent = () => {
    return (
        <StyledAboutMe>
            <BeforeContentFromBlock iconId={'blockForBefore78-155'} width={'78px'} height={'155px'} viewBox={'0 0 78 155'} fill={'none'}/>
            <Container>
                <FixedBlockIcon />
                <SectionTitle title={'about-me'} width={'340px'} $mb='23px' $symbol='#'/>
                <AboutMe  showButton={true}/>
            </Container>
            <AfterContentFromDots iconId={'dotsForAfter80-103'} width={'80px'} height={'103px'} viewBox={'0 0 80 103'}/>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 160px;
    min-height: calc(100vh - 215px);
`;

const BeforeContentFromBlock = styled(Icon)`
    position: absolute;
    top: 257px;
    left: 0;
    
    @media screen and (max-width: 1210px) {
        display: none;
}
`;

const AfterContentFromDots = styled(Icon)`
    position: absolute;
    top: 400px;
    right: 0;
    
    @media screen and (max-width: 1210px) {
        display: none;
}
`;
