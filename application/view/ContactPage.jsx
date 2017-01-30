import React from 'react';
import Navigation from '../component/Navigation';
import Title from '../component/Title';

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <Title heading="Contact Me" />
                <div className="my-5">
                    <p>GitHub: <a href="https://github.com/arne3000" target="_blank">github.com/arne3000</a></p>
                    <p>Phone: 07411 171047</p>
                    <p>Email: ubelhor3000@gmail.com</p>
                    <p>CV: <a href="/cv.pdf" download="arne-ubelhor-cv.pdf">download</a></p>
                </div>
                <form action="//formspree.io/ubelhor3000@gmail.com" method="POST">  
                    <input type="hidden" name="_subject" value="New email from website"/>
                    <input type="text" name="name" id="name" placeholder="Name" required=""/>
                    <input type="email" name="_replyto" id="email" placeholder="Email" required=""/>
                    <textarea name="message" id="message" placeholder="Leave a message" rows="4" required=""></textarea>
                    <button type="submit">Send</button>
                </form>
                
            </div>
        );
    }
}
//<Navigation />
module.exports = ContactPage;
