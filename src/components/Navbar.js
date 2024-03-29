import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../components/Logo'
import {Link} from 'react-scroll'
import {useMediaQuery} from 'react-responsive'
import {deviceSize} from '../components/Responsive'
import {slide as Menu} from 'react-burger-menu'
import menuStyles from '../components/menuStyles'


const Container = styled.div`
    width: 90%;
    ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
    `}
`

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg:w-auto
    flex
    lg:ml-20
    justify-center
    items-center
`; 

const NavItem = tw.li`
    lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    text-white
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
    box-content
    mb-2
    lg:mb-0
`

export function Navbar() {

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile })

    const navItems = <NavItems>
        <NavItem>
            <Link to="Home">Home</Link>
        </NavItem>
         <NavItem>
            <Link to="Explore">Explore</Link>
        </NavItem>
         <NavItem>
            <Link to="Destinations">Destinations</Link>
        </NavItem>
    </NavItems>

    return <Container>
        <Logo />
        {isMobile && <Menu right styles={menuStyles}>
            {navItems}
        </Menu>}
        {!isMobile && navItems}
    </Container>
}
