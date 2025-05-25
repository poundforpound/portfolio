import React from 'react';
import {Menu} from "../menu/Menu.tsx";
import {S} from "../HeaderMenu_Styles.ts"



export const MobileMenu: React.FC<{items: Array<string>}> = (props:{items:Array<string>}) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu items={props.items}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




