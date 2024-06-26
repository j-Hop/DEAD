import { theme } from "../theme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBox = styled.header`
@media screen and (min-width:320px){
    padding: ${theme.spacing(10)} ${theme.spacing(48)};
    border: 1px solid rgba(251, 251, 251, 0.4);
}
`;

export const Navigation = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
white-space:nowrap;
@media screen and (min-width:320px){
padding:${theme.spacing(5)};
flex-wrap: wrap;
justify-content:center;
flex-direction: column;
gap:${theme.spacing(5)};
margin-bottom:${theme.spacing(5)};
}
`;

export const NavList = styled.ul`
display: flex;
gap: ${theme.spacing(20)};
`;

export const StyledLink = styled(NavLink)`
line-height:1.25;
transition:color ${theme.transition};

&:hover{
    color:${theme.colors.primary};
}

&:active{
    color: ${theme.colors.lightGreen};
}
`;

export const Logo = styled.h1`
font-size: 24px;
font-weight: 500;
line-height: 1.16;
`;

export const IconUser = styled.img`
display:inline-block;
inline-size:40px;
block-size:40px;
background-color:${theme.colors.light};
border-radius:${theme.radius.xxs};
cursor:pointer;
`;

export const BtnLogIn = styled.button`
border:1px solid ${theme.colors.light};
border-radius: ${theme.radius.xl};
transition: color ${theme.transition};
background-color:transparent;

&:hover{
    color:${theme.colors.lightGreen};
}

span{
font-weight:500;
line-height:1.25;
margin: ${theme.spacing(7)} ${theme.spacing(19.5)};
}
`;

export const BtnRegistartion = styled.div`
border-radius:${theme.radius.xl};
background-color:${theme.colors.green};
transition: color ${theme.transition}, background-color ${theme.transition},
border:none;

&:hover{
    background-color:${theme.colors.lightGreen};
}

span{
font-weight: 500;
line-height: 1.25;
margin:${theme.spacing(7)} ${theme.spacing(20)};
}
`; 

export const BtnLogOut = styled.button`
border:1px solid ${theme.colors.light};
border-radius: ${theme.radius.xl};

&:hover{
    color:${theme.colors.lightGreen};
}

span{
    font-weight:500;
    line-height:1.25;
    margin: ${theme.spacing(7)} ${theme.spacing(19.5)};
    }
`;

export const BtnBar = styled.div`
display:flex;
`;

export const SpanName = styled.span`
color: ${theme.colors.light};
-webkit-text-fill-color: transparent;
`;