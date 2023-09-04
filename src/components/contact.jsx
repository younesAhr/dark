import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaSnapchat } from 'react-icons/fa';
import './../styles/App.css'
export default function Contact(){
    return(
        <>
            <section className="contact">
                <h1 className='contact-ttl'>contact us</h1>
                <div className="contact-details">
                    <div className="phone">
                        <h1>call us</h1>
                        <h1> 0697 13 37 15</h1>
                    </div>
                    <div className="socail-media">
                        <h1>follow us</h1>
                        <div className="icons-cont">
                            <a href=""><FaInstagramSquare color='white' size={'1.7em'}/></a>
                            <a href=""><FaFacebook color='white' size={'1.7em'}/></a>
                            <a href=""><FaSnapchat color='white' size={'1.7em'}/></a>
                        </div>
                    </div>
                </div>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25569.22542728421!2d3.0415312851656275!3d36.76689260339025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2f877796ffd%3A0x62ac3794efff79ca!2sEl%20Djazair!5e0!3m2!1sen!2sdz!4v1693406643515!5m2!1sen!2sdz" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <p className='copy-right'>© Copyright zeta-Agency and contributors.by Bourada Amine & Ahour Younes</p>
            </section>
        </>
    )
}