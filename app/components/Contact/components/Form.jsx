'use client'
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const protocol = window.location.protocol;
    const host = window.location.host;
    
    const res = await fetch(`${protocol}//${host}/api/message`, {
      method: 'POST',
      headers: {},
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      })
    });
  
    setSuccessMsg(res.ok);
  }


  return (
    <>
      <form onSubmit={handleSubmit} role="form" className="php-email-form">
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" className="form-control" id="name" required
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Email</label>
            <input type="email" className="form-control" name="email" id="email" required
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">Subject</label>
          <input type="text" className="form-control" name="subject" id="subject" required
            value={subject} onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Message</label>
          <textarea className="form-control" name="message" rows="10" required
            value={message} onChange={e => setMessage(e.target.value)}
          />
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          { successMsg && <div className="sent-message">Your message has been sent. Thank you!</div> }
        </div>
        <div className="text-center"><button type="submit">Send Message</button></div>
      </form>
    </>
  )
}