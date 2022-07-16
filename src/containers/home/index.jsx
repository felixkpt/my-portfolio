import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import './styles.scss'
import About from '../about'

const Home = () => {
  const navigate = useNavigate()

  const navigateToContact = () => {
    navigate('/contact')
  }

  return (
    <main id="home" className="home">
      <div className='home__title'>
        <div className="home__text">
          <div className="home__text-wrapper">
            <h1>
              Hello, I'm Felix Kiptoo Biwott
            </h1>
          </div>
          <div className="home__details">
            <div className="home__details__tagline">
              -- dedicated to exellence in every project that I undertake,
            </div>
          </div>
        </div>
        <div className="home__avatar">
          <div className="clip-path-mirrage"></div>
          <div className="home__avatar-wrapper">
            <img src="/images/felix6.png" alt="Felix Avatar" />
          </div>
        </div>
      </div>

      <About />

      <div className="home__details">
        <div className="home__details__tagline last">
          I Have an excellent reputation for solving problems and improving client satisfaction by carefully paying attension to their feedback.
        </div>
        <div className="contact-me-wrapper">
          <Animate play={true} duration={1.5} delay={1} start={{ transform: 'translateY(550px)' }} end={{ transform: 'translateY(0px)' }}>
            <div className='home__contact-me' onClick={navigateToContact}>
              <button>Hire Me</button>
            </div>
          </Animate>
        </div>

      </div>

    </main>
  )
}

export default Home