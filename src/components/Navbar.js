import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../components/Logo'
import {Link} from 'react-scroll'

const Container = styled.div`
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
    lg:h-full
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
    hover:text-gray-300
    box-content
    mb-2
    lg:mb-0
`

export function Navbar() {

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
    </Container>
}
