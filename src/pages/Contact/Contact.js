import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './Contact.css'


const Contact = () => {
    return ( 
        <>
        <Navbar/>
        <div className="contact">
            <div className="tittle"><h1>Contact</h1></div>
            <form>
                <div>
                    <label>Enter Your Name</label>
                    <input type='text' placeholder="Name" />
                </div>
                <div>
                    <label>Enter Your Email</label>
                    <input type='text' placeholder="Email" />
                </div>
                <div>
                    <label>Subject</label>
                    <input type='text' placeholder="Subject" />
                </div>
                <div>
                    <label>Enter Your Name</label>
                    <textarea>Message</textarea>
                </div>
                <button className="con-button">Send</button>
            </form>
        </div>
        
        <Footer/>
        </>
        
     );
}
 
export default Contact;