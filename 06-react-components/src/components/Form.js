import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  }

  return (
    <form className="comp-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
      {submitted && <p className="form-success">Message sent successfully!</p>}
    </form>
  );
}

export default Form;
