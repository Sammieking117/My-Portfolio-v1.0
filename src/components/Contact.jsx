import { Link } from "react-router-dom";

const Contact = () => {
    return ( 
        <div className="contact">
            <h2>Let's Talk</h2>
                <p>Have a project idea or just want to say hi?
                I'd love to connect with you.</p>
                <div className="contact-icons">
                    <a
                        href="mailto:samsoninnocent117@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icons/email.png" alt="email" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/samson-innocent-82a20a34a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icons/linkedin.png" alt="Linkedin" />
                    </a>
                    <a 
                        href="https://github.com/Sammieking117"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icons/github.png" alt="Github" />
                    </a>
                    <a 
                        href="https://wa.me/2349154470267" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icons/whatsapp.png" alt="Whatsapp" />
                    </a>
                </div>
        </div>
     );
}
 
export default Contact;