import "./ContactForm.css";

const ContactForm = () => {
    return (
        <div className="form">
            <form id="contact-form" method="post" action="">
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Imię"
                    required
                />
                <br />
                <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                    required
                />
                <br />
                <textarea
                    name="message"
                    className="form-control"
                    placeholder="Wiadomość"
                    rows="4"
                    required
                ></textarea>
                <br />
                <input
                    type="submit"
                    className="form-control submit"
                    value="Wyślij"
                />
            </form>
        </div>
    );
}
export default ContactForm;