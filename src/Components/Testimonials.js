import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'Sean was fantastic to work with! My website looks amazing and the process was smooth from start to finish.'
  },
  {
    name: 'John Smith',
    feedback: 'Professional, creative, and always on time. Highly recommended for any web project.'
  },
  {
    name: 'Emily Chen',
    feedback: "Sean took my ideas and turned them into a beautiful, functional site. I couldn't be happier!"
  }
];

function Testimonials() {
  return (
    <section className="testimonials" aria-label="Client testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="testimonial">
            <p>"{t.feedback}"</p>
            <footer>- {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonials; 