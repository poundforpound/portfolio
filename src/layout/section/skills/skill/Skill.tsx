import React from 'react';
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import { S } from '../Skills_Styles.ts';


type skillPropsType = {
    img: string;
    title: string,
    description: string,
}

export const Skill:React.FC<skillPropsType> = (props: skillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper align={"center"} direction={"column"}>
                <S.IconWrapper>
                    <Icon iconId={props.img}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillDescription>{props.description}</S.SkillDescription>
            </FlexWrapper>
        </S.Skill>
    );
};

