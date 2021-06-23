import React from 'react';
import FetchBasic from './components/FetchBasic';
import FetchErrorHandling from './components/FetchErrorHandling';

function App() {
  return (
    <div>
      <main>
        <h2>Fetch</h2>
        <FetchBasic />
        <FetchErrorHandling />
      </main>
    </div>
  );
}

export default App;
