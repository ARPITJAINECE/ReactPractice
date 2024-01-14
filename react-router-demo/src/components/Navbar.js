import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    const auth = useAuth()

    return (
        <nav className='primary-nav'>
            {/* below two are for the normal link tags, but if we want the aactive links then,
            we have to use the NavLink tag */}
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link> */}

            {/* NavLink tag for active links */}
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
            {
                !auth.user && (
                    <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
                )
            }
        </nav>
    )
}
