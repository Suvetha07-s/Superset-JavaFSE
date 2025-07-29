// src/App.js
import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>My Academy Dashboard</h1>
      <CohortDetails name="React Basics" trainer="CTS" status="ongoing" />
      <CohortDetails name="Java" trainer="Suvetha" status="completed" />
    </div>
  );
}

export default App;
