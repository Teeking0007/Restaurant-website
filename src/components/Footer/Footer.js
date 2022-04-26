import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaSnapchat} from 'react-icons/fa'



const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='logo'>
                Pizza <span>Palace</span>
            </div>
            <div className='social-icons'>
                <div>
                    <FaFacebook />
                </div>
                <div>
                    <FaInstagram/>
                </div>
                <div>
                <FaTwitter/>
                </div>
                <div>
                <FaSnapchat/>
                </div>
            
            </div>
        </div>
     );
}
 
export default Footer;