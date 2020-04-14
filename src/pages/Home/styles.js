import styled from 'styled-components';

import { Avatar } from '@material-ui/core';


export const Title = styled.h1`
    margin-top: 2%;
`

export const Links = styled.h4`
    color: grey;
    & a {
        color: grey;
    }
`

export const StyledAvatar = styled(Avatar)`
    width: 20% !important;
    height: 20% !important;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    margin: 5%;
`

export const Container = styled.div`
    padding: 5%;
`