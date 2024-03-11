import React from 'react';
import './Team.css'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Doctors from '../Components/Doctors';
import Nurses from '../Components/Nurses';

const TeamPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="team-page">
      <h1 className="team-title">Highly Experienced and Qualified</h1>
      <h2 className="subtitle">Meet the Team</h2>
      <p className="team-description">
        Welcome to the compassionate and dedicated veterinary team at Pet Paws Animal Hospital, where we prioritize the health and well-being of your beloved pets. Our team is comprised of highly skilled and experienced professionals who share a deep love for animals and a commitment to providing top-notch veterinary care.
      </p>
      <div className="team-image">
        <img src="https://thumbs.dreamstime.com/b/veterinarian-team-cute-dogs-care-vet-clinic-vector-illustration-veterinary-different-breeds-149058967.jpg"></img>
      </div>
    </div>
    <Doctors/>
    <Nurses/>
    <Footer/>
    </div>


  );
}

export default TeamPage;
