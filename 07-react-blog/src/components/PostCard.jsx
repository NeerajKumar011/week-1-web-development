import React from 'react';

// Props: post { id, title, category, date, author, excerpt }
function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="post-card-top">
        <span className="post-category">{post.category}</span>
        <span className="post-date">{post.date}</span>
      </div>
      <h2>{post.title}</h2>
      <p className="post-excerpt">{post.excerpt}</p>
      <p className="post-author">By {post.author}</p>
      <button className="read-more">Read more &rarr;</button>
    </div>
  );
}

export default PostCard;
