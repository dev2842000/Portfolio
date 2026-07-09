import React, {useState, useRef} from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import {contactInfo} from "../../portfolio";

const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const CONFIGURED = !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const formRef  = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!CONFIGURED) {
      alert("EmailJS is not configured yet. See Contact.js for setup instructions.");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="reveal">
          <p className="slabel">Get In Touch</p>
          <h2 className="stitle">Contact Me</h2>
          <p className="contact-tag">{contactInfo.subtitle}</p>
          <div className="contact-grid">
            <div className="c-item">
              <div className="c-icon"><i className="fas fa-phone" /></div>
              <div className="c-label">Phone</div>
              <div className="c-val"><a href={`tel:${contactInfo.number}`}>{contactInfo.number}</a></div>
            </div>
            <div className="c-item">
              <div className="c-icon"><i className="fas fa-envelope" /></div>
              <div className="c-label">Email</div>
              <div className="c-val"><a href={`mailto:${contactInfo.email_address}`}>{contactInfo.email_address}</a></div>
            </div>
            <div className="c-item">
              <div className="c-icon"><i className="fab fa-linkedin-in" /></div>
              <div className="c-label">LinkedIn</div>
              <div className="c-val">
                <a href="https://www.linkedin.com/in/sde-dev-kumar/" target="_blank" rel="noopener noreferrer">
                  sde-dev-kumar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap reveal">
          {status === "success" ? (
            <div className="form-success">
              <i className="fas fa-circle-check" />
              <div className="form-success-title">Message sent!</div>
              <div className="form-success-sub">Thanks — I'll get back to you soon.</div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",flex:1}}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-name">Name</label>
                  <input className="form-input" id="cf-name" name="from_name" type="text" placeholder="Dev Kumar" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-email">Email</label>
                  <input className="form-input" id="cf-email" name="from_email" type="email" placeholder="dev@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-subject">Subject</label>
                <input className="form-input" id="cf-subject" name="subject" type="text" placeholder="Let's work together" required />
              </div>
              <div className="form-group" style={{flex:1,display:"flex",flexDirection:"column"}}>
                <label className="form-label" htmlFor="cf-msg">Message</label>
                <textarea className="form-input" id="cf-msg" name="message" placeholder="Tell me about the opportunity..." required style={{flex:1,minHeight:"80px"}} />
              </div>
              {status === "error" && (
                <p style={{color:"#f87171",fontSize:"12px",marginBottom:"10px"}}>
                  Something went wrong. Try emailing directly at {contactInfo.email_address}
                </p>
              )}
              <button
                type="submit"
                className="btn-p"
                disabled={status === "sending"}
                style={{width:"100%",justifyContent:"center",cursor:"pointer",opacity:status==="sending"?0.7:1}}
              >
                {status === "sending" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
