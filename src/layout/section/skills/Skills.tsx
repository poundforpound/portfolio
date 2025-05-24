import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {skillsInfo} from "../../../assets/data/data.tsx";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {

    return (
        <StyledSkill>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    {skillsInfo.map((skill, i) => (
                        <Skill key={`${i}_${skill.img}`} img={skill.img} title={skill.title}
                               description={skill.description}/>
                    ))}
                </FlexWrapper>
            </Container>
        </StyledSkill>
    );
};

const StyledSkill = styled.section`
   
`







