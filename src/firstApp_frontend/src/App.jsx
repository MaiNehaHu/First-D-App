import { useState } from 'react';
import { firstApp_backend } from 'declarations/firstApp_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.target.elements.name.value) alert("Enter something")
    else {
      const name = event.target.elements.name.value;
      firstApp_backend.greet(name).then((greeting) => {
        setGreeting(greeting);
      });
      return false;
    }
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your fav programming language: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
