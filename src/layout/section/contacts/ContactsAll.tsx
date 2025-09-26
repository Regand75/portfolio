import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {ContactsBlock} from "./ContactsBlock.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Icon} from "../../../components/common/Icon.tsx";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";
import {hoverEffect} from "../../../styles/Mixins.ts";

export const ContactsAll = () => {
    return (
        <StyledContactsAll>
            <BeforeContentFromDotsTop iconId={'dotsForBefore78-49'} width={'78px'} height={'49px'}
                                      viewBox={'0 0 78 49'}/>
            <Container>
                <FixedBlockIcon />
                <ContactsWrapper>
                    <SectionTitle title={'contacts'} $mb='14px' $symbol='/'/>
                    <Description>Who am i?</Description>
                    <ContactsBlock showBlock={true}/>
                </ContactsWrapper>
                <AllMediaWrapper>
                    <SectionTitle title={'all-media'} $mb='21px' $symbol='#'/>
                    <FlexWrapper $align='center' $gap='22px'>
                        <MediaWrapper $align='center' $gap='5px'>
                            <Icon iconId={'twitter'} width='32px' height='32px' viewBox='0 0 32 32'/>
                            <span>@Urazov</span>
                        </MediaWrapper>
                        <MediaWrapper $align='center' $gap='5px'>
                            <Icon iconId={'twitter'} width='32px' height='32px' viewBox='0 0 32 32'/>
                            <span>@Urazov</span>
                        </MediaWrapper>
                    </FlexWrapper>

                </AllMediaWrapper>
            </Container>
            <AfterContentFromBlock iconId={'blockForAfter68-155'} width={'68px'} height={'155px'} viewBox={'0 0 68 155'}
                                   fill={'none'}/>
        </StyledContactsAll>
    );
};

const StyledContactsAll = styled.section`
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

