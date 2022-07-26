import React, { useState, useEffect } from 'react';
import './App.css';
import { FaAngleDoubleRight } from 'react-icons/fa';


const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if(loading){
    return <section className='section loading'>
      <h1>Loading...</h1>
    </section>
  }
  const {company, dates, duties, title} = jobs[value];

  return <section className='section'>
    <div className='title'>
      <h2>expierence</h2>
    </div>
  </section>
}

export default App
