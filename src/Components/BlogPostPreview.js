import React from 'react';

/**
 * BlogPostPreview component for rendering a blog post summary.
 * Props:
 *   - post: { title, excerpt, author, date, tags }
 */
function BlogPostPreview({ post }) {
  return (
    <article className="rounded-lg shadow-md bg-white p-6 mb-6 max-w-xl mx-auto hover:shadow-lg transition-shadow" aria-label={`Blog post preview: ${post.title}`}> 
      <header>
        <h3 className="text-xl font-bold text-blue-800 mb-2">{post.title}</h3>
        <div className="text-sm text-gray-500 mb-2">
          By <span className="font-semibold">{post.author}</span> &middot; <time dateTime={post.date}>{post.date}</time>
        </div>
      </header>
      <p className="text-gray-700 mb-3">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {post.tags && post.tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs" aria-label={`Tag: ${tag}`}>{tag}</span>
        ))}
      </div>
      <a href={`/blog/${post.slug || post.id}`} className="text-blue-600 hover:underline font-medium" aria-label={`Read full post: ${post.title}`}>Read More</a>
    </article>
  );
}

export default BlogPostPreview; 