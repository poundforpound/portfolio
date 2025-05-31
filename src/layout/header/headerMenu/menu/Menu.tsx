import React from 'react';
import {S} from '../HeaderMenu_Styles.ts'
import {menuHeader} from "../../../../assets/data/data.tsx";

export const Menu: React.FC = () => {
    return (
        <ul>
            {menuHeader.map((value: { title:string,href:string }, i: number) =>
                <S.MenuItem key={`${i}_${value}`}>
                    <S.NavLink
                        to={value.href}
                        smooth={true}
                        activeClass={"active"}
                        spy={true}
                    >
                        {value.title}
                        <S.Mask>
                            <span>{value.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{value.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            )}
        </ul>
    );
};

