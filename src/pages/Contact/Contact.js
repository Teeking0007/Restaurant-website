import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './Contact.css'


const Contact = () => {
    return ( 
        <>
        <Navbar/>
        <div className="contact">
            <div className="tittle"><h1>Contact</h1></div>
            <div className="con-text">
                
                <div className="left-side">
                    <h2>Pizza Palace</h2>
                    <p>No. 49 jajaja street, Ikoyi Lagos State</p>
                    <p>Tel.: +23470000000000</p>
                    <p>Email: info@pizzapalace.com</p>
                </div>
                <div className="right-side">
                    <h4>Opening Time</h4>
                    <ul>
                        <li>Monday: 6:00am - 8:00pm</li>
                        <li>Tuesday: 6:00am - 8:00pm</li>
                        <li>Wednesday: 6:00am - 8:00pm</li>
                        <li>Thursday: 6:00am - 8:00pm</li>
                        <li>Friday: 6:00am - 8:00pm</li>
                        <li>Saturday: 6:00am - 8:00pm</li>
                    </ul>
                </div>
            </div>
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
                    <textarea defaultChecked >Message</textarea>
                </div>
                <button className="con-button">Send</button>
            </form>
        </div>
        
        <Footer/>
        </>
        
     );
}
 
export default Contact;