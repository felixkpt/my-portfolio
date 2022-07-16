import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import './styles.scss'

import ThemeSwitcher from '../theme'

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]
const Nav = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return (
        <div>
            <nav className="navbar">

                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <img src="/images/logo.png" alt="Logo" />
                    </Link>
                </div>
                <ul className={`navbar__container__menu  ${toggleIcon && 'active'}`}>
                    {
                        data.map((item, index) => (
                            <li className="navbar__container__menu__item" key={index}>
                                <Link className="navbar__container__menu__item__links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                    <li className="navbar__container__menu__item top-theme-switcher">
                        <ThemeSwitcher />
                    </li>
                </ul>
                <div className="top-theme-switcher">
                    <ThemeSwitcher />
                </div>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Nav