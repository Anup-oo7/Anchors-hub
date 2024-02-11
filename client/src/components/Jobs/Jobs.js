import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useParams } from "react-router-dom";
function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [coins, setCoins] = useState('');
  const { _id } = useParams();
  useEffect(() => {
    fetchJobs();
    fetchProfile()
  }, []);


  const fetchProfile = async () => {
    
    try {
      const response = await fetch(`http://localhost:8000/getProfile/${_id}`);
      const data = await response.json();
      console.log(data);
      const totalCoins = data.profile.totalCoins; 
      setCoins(totalCoins)
      console.log(coins)
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };


  const fetchJobs = async () => {
    try {
      const response = await fetch('https://www.arbeitnow.com/api/job-board-api');
      const data = await response.json();
      setJobs(data.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleApplied = async (jobIndex) => {
   
    if (coins >= 50) {
    
      const updatedCoins = coins - 50;
      setCoins(updatedCoins);
  
      try {
        
        const response = await fetch(`http://localhost:8000/updateCoins/${_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ coins: updatedCoins })
        });
        const data = await response.json();
        console.log(data); 
      } catch (error) {
        console.error('Error updating coins:', error);
      }
  
     
      const updatedJobs = [...jobs];
    
      updatedJobs[jobIndex].applied = true;
     
      setJobs(updatedJobs);
    } else {
      
      alert('Not enough coins!');
    }
  };
  

  return (
    <div className="container">
      <Header />
      <h2>Jobs</h2>
      <p style={{marginTop:'5em'}}>Total coins:{coins}</p>
      <div className="row">
        {jobs.map((job, index) => (
          <div key={job.slug} className="col-md-4 mb-4">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">Company: {job.company_name}</p>
                <p className="card-text">Location: {job.location}</p>
                {job.applied ? 'Applied successfully' : ''}
                <button onClick={() => handleApplied(index)}>Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
