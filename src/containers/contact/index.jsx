import { BsTelephone } from 'react-icons/bs'
import PageHeader from '../../components/pageHeader'
import './styles.scss'
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import InlineLoader from '../../components/loaders'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [contacts, setContacts] = useState([])

  useEffect( () => {
    const getContacts = async () => {
      const data = await axios.get('/resources/contacts.json')
      setContacts( () => data.data)
    }
    getContacts()
  }, [])

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs.sendForm('service_rvtxr19', 'template_dut6uag', formRef.current, 'poBen1OGRfXqmp7cz')
    .then((result) => {
        // console.log(result.text);
        setResp(result.text + ', Your message has been sent. Thank you!')
    }, (error) => {
        console.log(error.text);
        setResp('Oops! '+ error.text)
    });

  }

  const [resp, setResp] = useState('')
  
  return (
    <main id="contact" className="contact">
      <PageHeader pageTitle="Contact me" icon={<BsTelephone size={30} />} />
      <div className="contact__wrapper">
        <div className="contact__overlay"></div>
        <div className="contact__inner">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              {
                contacts ? 
                (
                  <>
                  <div className="c-info__item">
                <FaWhatsapp size={60} className="c-icon whatsapp" />
                {contacts.phone}
              </div>
              <div className="c-info__item">
                <FaLinkedin size={60} className="c-icon linkedin" />
                {contacts.linkedIn}
              </div>
              <div className="c-info__item">
                <FaTwitter size={60} className="c-icon twitter" />
                {contacts.twitter}
              </div>
              <div className="c-info__item">
                <FaFacebook size={60} className="c-icon facebook" />
                {contacts.facebook}
              </div>
              <div className="c-info__item">
                <FaMailBulk size={60} className="c-icon email" />
                {contacts.email}
              </div>
              </>
                ) : <InlineLoader text="Loading..." />
              }
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story?</b> Get in touch. Always available for freelancing projects.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="to_name" value="Felix" />
              <div>
                <input type="email" placeholder="Your Name" name="user_name" />
              </div>
              <div>
                <input type="text" placeholder="Your Email" name="user_email" />
              </div>
              <div>
                <input type="text" placeholder="Subject" name="user_subject" />
              </div>
              <div>
                <textarea rows="7" name="message" placeholder="Message" id="message">
                </textarea>
              </div>
              <button>Submit</button>
              <div className="response">{ resp !== '' && resp}</div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact