import { Animate } from 'react-simple-animate'
import './styles.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Circle from './circle'

const About = () => {

  const [about, setAbout] = useState(null)

  useEffect(() => {

    const getAbout = async () => {
      const data = await axios.get('resources/about.json')
      setAbout(() => data.data)
      
    }
    
    getAbout()
  
  }, [])

  return (
    <main id="about" className="about">
      <div className="about__content">
        <div className="about__content__personal-wrapper">
          <Animate play duration={2.5} delay={.6} start={{ transform: 'translateX(-900px)', opacity: "0" }}
            end={{ transform: 'translateX(0px)', opacity: "1" }}>
            <h2>{about !== null ? about.title : '...'}</h2>
            <div className="about__content__personal-wrapper__tech-stack" dangerouslySetInnerHTML={{ __html: about !== null ? about.summary : 'Fetching data...' }} />
          </Animate>

          <Animate play duration={2.0} delay={1} start={{ transform: 'translateX(500px)', opacity: "0" }} end={{ transform: 'translateX(0px)', opacity: "1" }}>
            <h2 className='personal-information'>Personal Information</h2>
            <ul>
              {
                about !== null ? about.personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                )) : 'Fetching data...'
              }
            </ul>
          </Animate>
        </div>
        {about && <Circle />}
      </div>
    </main>
  )
}

export default About