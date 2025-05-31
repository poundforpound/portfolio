import React from 'react';
import {Link} from "../../../../components/Link.ts";
import {Button} from "../../../../components/Button.ts";
import { S } from '../Works_Styles.ts';

type workType = {
    img: string,
    title: string,
    description: string,
}

export const Work:React.FC<workType> = (props: workType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.img}/>
                <Button>View Project</Button>
            </S.ImageWrapper>
            <S.Info>
                <S.WorkTitle>{props.title}</S.WorkTitle>
                <S.WorkDescription>{props.description}</S.WorkDescription>
                <Link active href={"#"}>Demo</Link>
                <Link href={"#"}>Code</Link>
            </S.Info>
        </S.Work>
    );
};


