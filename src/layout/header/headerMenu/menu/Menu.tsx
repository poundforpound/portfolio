import React from 'react';
import {S} from '../HeaderMenu_Styles.ts'

export const Menu: React.FC<{items:Array<string>}> = (props:{items:Array<string>}) => {
    return (
        <ul>
            {props.items.map((value: string, i: number) =>
                <S.MenuItem key={`${i}_${value}`}>
                    <S.Link href="">
                        {value}
                        <S.Mask>
                            <span>{value}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{value}</span>
                        </S.Mask>
                    </S.Link>
                </S.MenuItem>
            )}
        </ul>
    );
};

