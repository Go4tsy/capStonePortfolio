import React from 'react';

const articles = [
  {
    title: 'How I Built My Portfolio',
    date: '2024-05-01',
    summary: 'A behind-the-scenes look at the tools, design, and process I used to create this portfolio.'
  },
  {
    title: 'Top 5 Tips for New Developers',
    date: '2024-04-15',
    summary: 'Advice for those starting out in web development, based on my own journey.'
  },
  {
    title: 'Why Accessibility Matters',
    date: '2024-03-28',
    summary: "Making the web usable for everyone is not just good practice—it's essential."
  }
];

function Blog() {
  return (
    <section className="blog" aria-label="Blog articles">
      <h2>Blog & Articles</h2>
      <div className="blog-list">
        {articles.map((a, i) => (
          <article key={i} className="blog-article">
            <h3>{a.title}</h3>
            <time dateTime={a.date}>{a.date}</time>
            <p>{a.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog; 