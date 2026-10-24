import React from 'react';

// Props: title, subtitle
function Header({ title, subtitle }) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

export default Header;
