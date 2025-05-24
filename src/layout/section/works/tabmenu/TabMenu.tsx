import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";


type menuProps = {
    items: Array<string>
}

export const TabMenu = (props: menuProps) => {
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
    margin-bottom: 40px;
    ul {
        display: flex;
        justify-content: center;
        gap: 20px
    }
`
const ListItem = styled.li`

`

