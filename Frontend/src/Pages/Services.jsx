import React, { useState } from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Reviews from '../Components/Reviews'
import Footer from '../Components/Footer'
import './Services.css'

import backgroundImage from '../Images/Frame21.png'; 
import dogFoodImage from '../Images/Frame 18.png';
import catFoodImage from '../Images/Frame 18.png';
import medicineImage from '../Images/Frame 18.png';
import accessoriesImage from '../Images/Frame 18.png';
import denticity from '../Images/image49.png'
import diagnostics from '../Images/image50.png'
import surgery from '../Images/image51.png'
import NewAppointmentSection from '../Components/Appointment'
import wellnessImg from '../Images/wellness.png'
import dentistry from '../Images/dentistry.png'
import diagnosis from '../Images/diagnosis.png'
import surgeryImg from '../Images/surgery.png'

const PopupCard = ({ selectedService, onClose }) => {
  const { image, title, description } = selectedService;

  return (
    <div className="popup-card">
      <div className="popup-card-content">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times" style={{ fontSize: "24px", backgroundColor: "red", padding: "10px", color: "white", marginTop:'9px', marginRight:'5px'}}></i> {/* Cross icon */}
        </button>
        <button className="book-appointment-btn">Book Appointment</button>
      </div>
    </div>
  );
};


const Home = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openPopup = (service) => {
    switch (service) {
      case 'Wellness & preventive Care':
        setSelectedService({
          title: 'Wellness & Preventive Care',
          image: wellnessImg,
          description: 'Regular checkups and preventive care are essential for maintaining your pets health and well-being. Our comprehensive wellness program includes routine physical examinations, vaccinations, parasite prevention, and nutritional counseling tailored to your pets individual needs. Schedule a wellness exam today to keep your pet healthy and thriving'
        });
        break;
      case 'Dentistry':
        setSelectedService({
          title: 'Dentistry',
          image: dentistry, // Add the correct image path here
          description: 'Dental health is vital for your pets overall well-being. Our dentistry service provides comprehensive oral care to ensure your pet maintains healthy teeth and gums. Our skilled veterinarians perform routine dental exams, cleanings, and treatments for common dental issues such as plaque buildup, gingivitis, and tooth decay. We also offer dental X-rays to assess the health of your pets teeth below the gum line.'
        });
        break;
      case 'Diagnostics':
        setSelectedService({
          title: 'Diagnostics',
          image: diagnosis, // Add the correct image path here
          description: 'Our diagnostics service is dedicated to uncovering the root cause of your pets health concerns through advanced medical testing and analysis. Using state-of-the-art equipment and techniques, our experienced veterinary team performs a wide range of diagnostic procedures, including blood tests, urine analysis, imaging, and more.'
        });
        break;
      case 'Surgery':
        setSelectedService({
          title: 'Surgery',
          image: surgeryImg, // Add the correct image path here
          description: 'Our surgery service is dedicated to providing safe and effective surgical procedures to address a variety of medical conditions in pets. Our skilled and experienced veterinary surgeons perform a wide range of surgical interventions, including soft tissue surgeries, orthopedic procedures, and emergency surgeries. From routine spaying and neutering to complex tumor removals and fracture repairs, we prioritize the safety and well-being of your pet throughout the entire surgical process.'
        });
        break;
      default:
        setSelectedService({
          title: '',
          image: '',
          description: ''
        });
    }
    setShowPopup(true);
  };
  

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className="overlay">
            <h1>Our Services</h1>
            <p className="description">You want your pet to live the longest, healthiest life possible. So do we! At Pet Paws Animal Clinic, we are proud to offer comprehensive care for every life stage. From that first checkup to senior years, you can count on us every step of the way! For any questions about our services or if you’re ready to schedule an appointment, call us at (+94 72 080 6890).</p>
          </div>
        </div>
        <div className="card-container">
          <div className="blue-card">
            <h2>Our Comprehensive Services</h2>
            <div className="card-row">
              <div className="card" onClick={() => openPopup('Wellness & preventive Care')}>
                <img src="https://skylineveterinaryclinic.com/wp-content/uploads/2019/07/SVC-services-wellness.png" alt="Dog Food" />
                <h3>Wellness & preventive Care</h3>
                <p>Regular checkups and preventive care are essential for maintaining your pets health.</p>
                <button className='learn-more-btn'>Learn More</button>
              </div>
              <div className="card" onClick={() => openPopup('Dentistry')}>
                <img src={denticity} alt="Cat Food" />
                <h3>Dentistry</h3>
                <p>Dental health is vital for your pets overall well-being. Our dentistry service provides</p>
                <button className='learn-more-btn'>Learn More</button>
              </div>
              <div className="card" onClick={() => openPopup('Diagnostics')}>
                <img src={diagnostics} alt="Medicine" />
                <h3>Diagnostics</h3>
                <p>Our diagnostics service is dedicated to uncovering the root cause of your pets.</p>
                <button className='learn-more-btn'>Learn More</button>
              </div>
              <div className="card" onClick={() => openPopup('Surgery')}>
                <img src={surgery} alt="Accessories" />
                <h3>Surgery</h3>
                <p>Our surgery service is dedicated to providing safe and effective surgical.</p>
                <button className='learn-more-btn'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        {showPopup && <PopupCard selectedService={selectedService} onClose={closePopup} />}

        <NewAppointmentSection/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
