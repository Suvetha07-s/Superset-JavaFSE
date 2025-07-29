import React, { useState } from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [total, setTotal] = useState('');
  const [average, setAverage] = useState(null);

  const handleCalculate = () => {
    const maxMarks = 500;
    if (total) {
      const avg = ((parseFloat(total) / maxMarks) * 100).toFixed(2);
      setAverage(avg);
    }
  };

  return (
    <div className="container">
      <h2>Student Score Calculator</h2>

      <label className="label">Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label className="label">School:</label>
      <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />

      <label className="label">Total Marks (out of 500):</label>
      <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} />

      <button onClick={handleCalculate}>Calculate Percentage</button>

      {average && (
        <div className="result">
          <p>{name} from {school} scored <strong>{average}%</strong></p>
        </div>
      )}
    </div>
  );
}

export default CalculateScore;
