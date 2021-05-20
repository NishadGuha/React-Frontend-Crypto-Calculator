import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './navbarElements'
import { FaBars } from 'react-icons/fa'

const navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Crypto Profit Calculator</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default navbar
