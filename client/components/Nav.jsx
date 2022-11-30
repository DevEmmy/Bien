import React from 'react'
import { Logo, NavContainer, Register } from './Style'
import Link from "next/link"

const Nav = () => {
  return (
    <NavContainer>
        <Logo>
            <Link href="/">
                Bien
            </Link>           
        </Logo>

        <ul className="nav-items">
            {/* <li>Home</li> */}
            <li>
                <Link href="/contact-us">
                    Contact Us
                </Link>
                </li>
            <li>
                <Link href="/contact-us">
            Terms & Condition
                </Link>
            </li>
            
            <Register>
                Register
            </Register>
        </ul>
    </NavContainer>
  )
}

export default Nav