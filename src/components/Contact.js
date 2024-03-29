import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_f81inr1",
                "template_lnbkryk",
                form.current,
                "Mb2vbzM7IvtcsNyP0"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <section>
            <div className="container">
                <h2 className="--text-center">Contact with Us</h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="--form-control --card --flex-center --dir-column"
                >

                    <input type="email" placeholder="Email" name="user_email" required />
                    <input type="text" placeholder="Name" name="user_name" required />
                    <textarea name="message" cols="30" rows="10"></textarea>
                    <button type="submit" className="--btn --btn-primary">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
