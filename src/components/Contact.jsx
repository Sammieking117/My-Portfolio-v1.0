import { Link } from "react-router-dom";

const Contact = () => {
    return ( 
        <div className="contact">
            <h2>Let's Talk</h2>
                <p>Have a project idea or just want to say hi?
                I'd love to connect with you.</p>
                <div className="contact-icons">
                    <Link href="mailto:samsoninnocent117@gmail.com"><img src="/icons/email.png" alt="email" /></Link>
                    <Link href="https://www.linkedin.com/in/samson-innocent-82a20a34a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img src="/icons/linkedin.png" alt="Linkedin" /></Link>
                    <Link href="javascript:void(0)"><img src="/icons/github.png" alt="Github" /></Link>
                    <Link href="https://wa.me/2349154470267" target="_blank"><img src="/icons/whatsapp.png" alt="Whatsapp" /></Link>
                </div>
        </div>
     );
}
 
export default Contact;