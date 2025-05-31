import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {skillsInfo} from "../../../assets/data/data.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from './Skills_Styles.ts';
import {Fade} from "react-awesome-reveal";

export const Skills: React.FC = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.2} >
                        {skillsInfo.map((skill, i) => (
                            <Skill key={`${i}_${skill.img}`} img={skill.img} title={skill.title}
                                   description={skill.description}/>
                        ))}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};









