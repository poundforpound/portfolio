import React from 'react';
import {Menu} from "../menu/Menu.tsx";
import {S} from  "../HeaderMenu_Styles.ts"



export const DesktopMenu: React.FC<{ items: Array<string> }> = (props: { items: Array<string> }) => {
    return (
        <S.DesktopMenu>
            <Menu items={props.items}/>
        </S.DesktopMenu>
    );
};

