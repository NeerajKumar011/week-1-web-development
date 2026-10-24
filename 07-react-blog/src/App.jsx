import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import PostCard from './components/PostCard';
import posts from './data/posts.json';
import './App.css';

const ALL_CATEGORIES = ['All', 'React', 'CSS', 'JavaScript', 'HTML'];

function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter posts by search and category
  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="app">
      <Header />

      <main className="main">

        {/* Controls */}
        <div className="controls">
          <input
            type="text"
            className="search-input"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="category-filters">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="result-count">
          {filtered.length} post{filtered.length !== 1 ? 's' : ''} found
        </p>

        {/* Post cards */}
        {filtered.length > 0 ? (
          <div className="posts-grid">
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="no-results">No posts match your search.</p>
        )}

      </main>

      <footer className="site-footer">
        <p>React Blog &mdash; Week 1 Project 7 &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
