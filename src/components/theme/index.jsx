import React, { useContext } from 'react'
import { ThemeContext } from '../../context'
import './styles.scss'

function ThemeSwitcher() {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' })
  }
  const isDarkMode = theme.state.darkMode
  return (
    <div className='t-wrapper'>
      <div className='t' title="Toggle theme" onClick={handleClick}>
        <div className="t-icon sun"></div>
        <div className="t-icon moon"></div>
        <div className="t-button" style={ isDarkMode ? {right:0} : {left:0} }></div>
      </div>
    </div>
  )
}

export default ThemeSwitcher