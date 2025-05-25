import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link.ts";


type menuProps = {
    items: Array<string>
}

export const TabMenu:React.FC<menuProps> = (props: menuProps) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.items.map((value: string, i: number) =>
                    <ListItem key={`${i}_${value}`}>
                        <Link href="">{value}</Link>
                    </ListItem>
                )}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`
const ListItem = styled.li`

`

