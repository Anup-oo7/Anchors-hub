import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import './profile.css'
import { useParams } from "react-router-dom";

function Profile() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [resume, setResume] = useState('');
  const [educationType, setEducationType] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [educationStartDate, setEducationStartDate] = useState('');
  const [educationEndDate, setEducationEndDate] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [soloOrGroup, setSoloOrGroup] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [experienceType, setExperienceType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [role, setRole] = useState('');
  const [experienceStartDate, setExperienceStartDate] = useState('');
  const [experienceEndDate, setExperienceEndDate] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  
  const { _id } = useParams();
  const totalCoins = () => {
    let total = 0;
    total += name ? 2 : 0;
    total += mobile ? 10 : 0;
    total += profilePic ? 5 : 0;
    total += linkedinLink ? 3 : 0;
    total += githubLink ? 5 : 0;
    total += resume ? 20 : 0;
    total += educationType ? 5 : 0;
    total += schoolName ? 5 : 0;
    total += educationStartDate ? 2 : 0;
    total += educationEndDate ? 2 : 0;
    total += projectName ? 5 : 0;
    total += projectDescription ? 6 : 0;
    total += soloOrGroup ? 4 : 0;
    total += projectLink ? 10 : 0;
    total += experienceType ? 5 : 0;
    total += companyName ? 10 : 0;
    total += companyWebsite ? 10 : 0;
    total += role ? 8 : 0;
    total += experienceStartDate ? 2 : 0;
    total += experienceEndDate ? 2 : 0;
    total += coverLetter ? 20 : 0;
    return total;
  };

  const handleprofileUpload = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      setProfilePic(file); 
    }
  };
  
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file); 
    }
  };

  const handleSave = async () => {
    
    const userData = {
      name,
      mobile,
      profilePic,
      linkedinLink,
      githubLink,
      resume,
      educationType,
      schoolName,
      educationStartDate,
      educationEndDate,
      projectName,
      projectDescription,
      soloOrGroup,
      projectLink,
      experienceType,
      companyName,
      companyWebsite,
      role,
      experienceStartDate,
      experienceEndDate,
      coverLetter,
      totalCoins: totalCoins() 
    };

    try {
      const response = await fetch(`http://localhost:8000/saveProfile/${_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      console.log(data); 
     alert('profile saved successfully')
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  
// useEffect(()=>{
//     fetchProfile()
// })
//   const fetchProfile = async () => {
    
//     try {
//       const response = await fetch(`http://localhost:8000/getProfile/${_id}`);
//       const data = await response.json();
//       console.log(data);
//       const totalCoins = data.profile.totalCoins; 
//       setCoins(totalCoins)
     
//     } catch (error) {
//       console.error('Error getting data:', error);
//     }
//   };


  return (
    <div className='mainconatainer'>
        <Header />
     
      <p style={{marginTop:'5em'}}>Total Coins Earned: {totalCoins()}</p>
     <h3>Personal Details</h3>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />

      <label>Mobile:</label>
      <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <br />

      <label>Profile Picture:</label>
      <input type="file"  onChange={handleprofileUpload} />
      <br />

      <label>LinkedIn Link:</label>
      <input type="text" value={linkedinLink} onChange={(e) => setLinkedinLink(e.target.value)} />
      <br />

      <label>GitHub Link:</label>
      <input type="text" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
      <br />

      <label>Resume:</label>
      <input type="file"  onChange={handleResumeUpload} />
      <br />

      <h3>Education Details</h3>
      <label>Type (School/College):</label>
      <input type="text" value={educationType} onChange={(e) => setEducationType(e.target.value)} />
      <br />

      <label>School / College Name:</label>
      <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
      <br />

      <label>Start Date:</label>
      <input type="text" value={educationStartDate} onChange={(e) => setEducationStartDate(e.target.value)} />
      <br />

      <label>End Date:</label>
      <input type="text" value={educationEndDate} onChange={(e) => setEducationEndDate(e.target.value)} />
      <br />

      <h3>Project Details</h3>
      <label>Project Name:</label>
      <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
      <br />

      <label>Project Description:</label>
      <input type="text" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
      <br />

      <label>Solo Project / Group Project:</label>
      <input type="text" value={soloOrGroup} onChange={(e) => setSoloOrGroup(e.target.value)} />
      <br />

      <label>Project Link:</label>
      <input type="text" value={projectLink} onChange={(e) => setProjectLink(e.target.value)} />
      <br />

      <h3>Past Experience Details</h3>
      <label>Type (Internship / Job):</label>
      <input type="text" value={experienceType} onChange={(e) => setExperienceType(e.target.value)} />
      <br />

      <label>Company Name:</label>
      <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      <br />

      <label>Company Website Link:</label>
      <input type="text" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} />
      <br />

      <label>Role:</label>
      <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
      <br />

      <label>Start Date:</label>
      <input type="text" value={experienceStartDate} onChange={(e) => setExperienceStartDate(e.target.value)} />
      <br />

      <label>End Date:</label>
      <input type="text" value={experienceEndDate} onChange={(e) => setExperienceEndDate(e.target.value)} />
      <br />

      <label>Cover Letter:</label>
      <input type="text" value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Profile;
