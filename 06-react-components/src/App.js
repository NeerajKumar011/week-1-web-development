import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Form from './components/Form';
import './App.css';

const sampleCards = [
  { id: 1, title: 'React Basics', description: 'Learn the fundamentals of React including JSX, components, and props.' },
  { id: 2, title: 'State & Hooks', description: 'Understand useState and useEffect to manage component state and side effects.' },
  { id: 3, title: 'Component Reuse', description: 'Build reusable components that accept props and render dynamic content.' },
];

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState(sampleCards);

  function handleAddCard() {
    const newId = cards.length + 1;
    setCards([
      ...cards,
      {
        id: newId,
        title: `Card ${newId}`,
        description: 'This card was dynamically added using React state.',
      },
    ]);
  }

  return (
    <div className="app">
      <Header title="React Components Practice" subtitle="Week 1 – Project 6" />

      <main className="main-content">

        {/* Button + State demo */}
        <section className="section">
          <h2>Button Component + State</h2>
          <p className="section-desc">Click the button to update the counter. This demonstrates state management with useState.</p>
          <div className="counter-demo">
            <span className="count-display">{count}</span>
            <div className="btn-row">
              <Button label="Increment" onClick={() => setCount(count + 1)} variant="primary" />
              <Button label="Decrement" onClick={() => setCount(count - 1)} variant="secondary" />
              <Button label="Reset" onClick={() => setCount(0)} variant="danger" />
            </div>
          </div>
        </section>

        {/* Card component demo */}
        <section className="section">
          <h2>Card Component + Dynamic Rendering</h2>
          <p className="section-desc">Cards are rendered dynamically from an array. Click "Add Card" to push a new one using state.</p>
          <div className="cards-grid">
            {cards.map((card) => (
              <Card key={card.id} title={card.title} description={card.description} />
            ))}
          </div>
          <Button label="+ Add Card" onClick={handleAddCard} variant="primary" />
        </section>

        {/* Form component demo */}
        <section className="section">
          <h2>Form Component</h2>
          <p className="section-desc">A reusable Form component that manages its own internal state.</p>
          <Form />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
