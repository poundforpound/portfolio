import React from 'react';
import {S} from './Slider_Styles.ts';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css';

type SlidePropsType={
    text:string
    userName:string
}

const Slide = (props:SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>
                {props.text}
            </S.Text>
            <S.Name>
                @{props.userName}
            </S.Name>
        </S.Slide>
    )
}


const items = [
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis enim et harum illo ipsam laudantium odio officiis qui quidem! Lorem ipsum dolor sitamet, consectetur adipisicing elit"} userName={"First Name"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis enim et harum illo ipsam laudantium odio officiis qui quidem! Lorem ipsum dolor sitamet, consectetur adipisicing elit"} userName={"Second Name"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis enim et harum illo ipsam laudantium odio officiis qui quidem! Lorem ipsum dolor sitamet, consectetur adipisicing elit"} userName={"Third Name"}/>,

];

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <AliceCarousel
                mouseTracking
                items={items}
                infinite/>
        </S.Slider>

    );
};



