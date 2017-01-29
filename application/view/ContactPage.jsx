import React from 'react';
import Navigation from '../component/Navigation';
import Title from '../component/Title';

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <Title heading="Contact Me" />
                <p>Any queries or questions, get in contact.</p>
                <p>Email: ubelhor3000@gmail.com</p>
                <form action="//formspree.io/ubelhor3000@gmail.com" method="POST">  
                    <input type="hidden" name="_subject" value="New email from website"/>
                    <input type="text" name="name" id="name" placeholder="Name" required=""/>
                    <input type="email" name="_replyto" id="email" placeholder="Email" required=""/>
                    <textarea name="message" id="message" placeholder="Leave a message" rows="4" required=""></textarea>
                    <button type="submit">Send</button>
                </form>
                <Navigation />
            </div>
        );
    }
}

module.exports = ContactPage;
