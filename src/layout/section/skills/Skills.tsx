import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {skillsInfo} from "../../../assets/data/data.tsx";
import {Container} from "../../../components/Container.ts";
import { S } from './Skills_Styles.ts';

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    {skillsInfo.map((skill, i) => (
                        <Skill key={`${i}_${skill.img}`} img={skill.img} title={skill.title}
                               description={skill.description}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};









