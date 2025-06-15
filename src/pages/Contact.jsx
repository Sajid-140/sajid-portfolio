import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-description">
        Feel free to reach out to me for collaboration, opportunities, or any inquiries. I'm always open to meaningful connections.
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:sajid.ali.bhowana@gmail.com">sajid.ali.bhowana@gmail.com </a></p>
  
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com/sajid.ali.bhowana" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.instagram.com/its_sajid.bh?igsh=MXZodnZuc3d6ZmMzbA==" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.linkedin.com/in/sajid-ali-a7425b332/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sajid Ali. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;
