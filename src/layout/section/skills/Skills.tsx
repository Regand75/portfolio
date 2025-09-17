import React, {FC} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import skillsGroupImage from "../../../assets/images/group.png"
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";

const skillsItems = [
    {title: 'Databases', list: 'MongoDB Postman Swagger REST API RxJS'},
    {title: 'Tools', list: 'WebStorm Git GitHub NPM PNPM Yarn'},
    {title: 'Other', list: 'HTML CSS SASS Webpack'},
    {title: 'Languages', list: 'JavaScript TypeScript'},
    {title: 'Frameworks', list: 'Angular React'},
]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle title={'skills'} width={'250px'} left={'133px'} mb={'12px'}/>
                <FlexWrapper justify={'space-between'} gap={'59px'}>
                    <GroupImage src={skillsGroupImage} alt="group"/>
                    <Wrapper>
                        <FlexWrapper direction={'column'} wrap={'wrap-reverse'} gap={'16px'}>
                            {skillsItems.map((skill, index) => (
                                <React.Fragment key={index}>
                                    <Skill title={skill.title} list={skill.list}/>
                                </React.Fragment>
                            ))}
                        </FlexWrapper>
                    </Wrapper>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding-top: 130px;
    min-height: calc(100vh - 215px);
`;

const GroupImage = styled.img`
    width: 350px;
    height: 284px;
    object-fit: contain;
`;

const Wrapper = styled(FlexWrapper)`
    margin-top: 31px;
    height: 280px;
`;
