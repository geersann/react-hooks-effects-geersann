import {useState, useEffect} from 'react';
import './App.css';

export default function App() {
  const [value, setValue] = useState (() => {
    return localStorage.getItem('appData') || '';
  })

  useEffect(() => {
    localStorage.setItem('appData', value)
  }, [value]);
  return (
    <div>
      React Marathon, appData: <input value={value}
      onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}