import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: relative;
    top: -420px;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    margin: 0px;
`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 786px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    alight-items: center;
    list-style: none;
    text-alight: center;

    @media scereen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border.bottom: 3px solid #01bf71;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #10d909;
        color: #010606;
    }
`