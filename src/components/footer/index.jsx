import React from 'react'
import './styles.scss'

function index() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="section">
          <h3>Quick links</h3>
          <a href="/portfolio">Portfolio</a>
          <a href="/resume">Resume</a>
          <a href="/skills">All Skills</a>
        </div>
        <div className="section">
          <h3>Skills</h3>
          <a href="/skills#FE">Front End Development</a>
          <a href="/skills#BE">Backend End Development</a>
          <a href="/skills#SEO">SEO Optimization</a>
        </div>
        <div className="section">
          <h3>Contacts</h3>
          <a href="https://twitter.com/felixkpt" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://linkedin/in/felixkpt" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://facebook.com/felixkpt" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
      <div className="copy-right">Everlasing designers @2022 All rights reserved</div>
    </footer>
  )
}

export default index