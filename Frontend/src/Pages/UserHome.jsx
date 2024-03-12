import React, { useState , useRef} from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Reviews from '../Components/Reviews'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../Images/Frame 18.png'; // Import your logo image
import backgroundImage from '../Images/Frame20.png'; 
import axios from 'axios'; // Make sure axios is installed and imported
import Swal from 'sweetalert2';


const PopupCard = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [nic, setNic] = useState('');
  const [password, setPassword] = useState('');
  const [petName, setPetName] = useState('');
  const [petImage, setPetImage] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('contact', contact);
      formData.append('nic', nic);
      formData.append('password', password);
      formData.append('petName', petName);
      formData.append('petImage', petImage);  
      formData.append('breed', breed);
      formData.append('gender', gender);
      formData.append('age', age);
  
      const response = await axios.post('http://localhost:3000/users/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        },
      });
      console.log('User created successfully:', response.data);
      setShowPopup(false);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your account has been created successfully!',
      });
      onClose();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeNic = (e) => {
    setNic(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePetName = (e) => {
    setPetName(e.target.value);
  };

  const handleChangePetImage = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    console.log('Selected image file:', file); // Log the selected file to the console
    setPetImage(file); // Assuming you have a state variable to store the selected image
  };
  

  const handleChangeBreed = (e) => {
    setBreed(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openLoginPopup = () => {
    setShowPopup(false);
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="popup-cards">
        <div className="popup-card-content">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <h3 className='logo-name'>Pet Paws</h3>
            <p className='logoslogan'>Family of vets, caring for pets</p>
          </div>
          <h2 className="titles">Sign Up</h2>
          <div className="form-containers">
            <div className="left-card">
              <h3>Guardian Details</h3>
              <input type="text" placeholder="Full Name" value={fullName} onChange={handleChangeFullName} />
              <input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
              <div className="contact-nic-row">
                <input type="text" placeholder="Contact" value={contact} onChange={handleChangeContact} />
                <input type="text" placeholder="NIC" value={nic} onChange={handleChangeNic} />
              </div>
              <input type="password" placeholder="Password" value={password} onChange={handleChangePassword} />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="right-card">
              <h3>Pet Details</h3>
              <div className="pet-image">
                <label htmlFor="pet-image-input">
                  <input type="file" id="pet-image-input" accept="image/*" className="circular-input" onChange={handleChangePetImage} />
                  <p className='addpetimg'>Add Pet Image</p>
                </label>
              </div>
              <input type="text" placeholder="Pet Name" value={petName} onChange={handleChangePetName} />
              <div className="breed-gender">
                <input type="text" placeholder="Breed" value={breed} onChange={handleChangeBreed} />
                <input type="text" placeholder="Gender" value={gender} onChange={handleChangeGender} />
              </div>
              <input type="text" placeholder="Age" value={age} onChange={handleChangeAge} />
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i> {/* Cross icon */}
          </button>
          <button className="submit-btn">Create Account</button>
          <h6 onClick={openLoginPopup}>Already have an account? Sign In</h6>
          {showLoginPopup && <LoginPopupCard onClose={closeLoginPopup} />}
        </div>
      </div>
    </form>
  );
};


const LoginPopupCard = ({ onClose }) => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async () => {
    // Get email and password values from input fields
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  
    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:3000/users/login', { email, password });
  
      // Display success message if login is successful
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have been successfully logged in!',
      }).then(() => {
        onClose();
        window.location.href = '../services';
        // Redirect to another page after successful login
        // Use React Router or any navigation library for redirection
        // Example: history.push('/dashboard');
      });
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
      // Display error message
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password. Please try again.',
      });
    }
  
  };

  return (
    <div className="popup-cards">
      <div className="popup-card-content">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h3 className='logo-name'>Pet Paws</h3>
          <p className='logoslogan'>Family of vets, caring for pets</p>
        </div>
        <h2 className="titlesLogin">Login</h2>
        <div className="form-containers">
          <div className="login-card">
            <input type="email" ref={emailRef} />
            <input type="password" ref={passwordRef} />
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i> 
        </button>
        <button className="submit-btn" onClick={handleLogin}>Login</button> {/* Add onClick handler */}
        <h6>Forgot Password</h6>
      </div>
    </div>
  );
};



const Home = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    closeLoginPopup();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="home-container">
       <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Pet Clinic Logo" />
        <span className="navbar-title">Pet Pows</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/team" className="nav-link">Team</a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="/petshop" className="nav-link">Petshop</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact Us</a>
        </li>
      </ul>
      <div className='navbar-buttons'>
      <nav>
        <ul>
          {!isLoggedIn && (
           
              <button className="btn" onClick={openLoginPopup}>Login</button>
        
          )}
          {!isLoggedIn && (
   
              <button className="btn btn-primary" onClick={openPopup}>Create Account</button> 
       
          )}
          {isLoggedIn && (
            <li>
              <ProfileCircle name={userName} onClick={handleLogout} />
            </li>
          )}
        </ul>
      </nav>
      {showPopup && <PopupCard onClose={closePopup} />}
      {showLoginPopup && <LoginPopupCard onClose={closeLoginPopup} onLoginSuccess={handleLoginSuccess} />}
    </div>
    </nav>
    {showPopup && <PopupCard onClose={closePopup} />}
    {showLoginPopup && <LoginPopupCard onClose={closeLoginPopup} />}
      <div className="content-container">
        <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className="overlay">
            <h1>Welcome to Pet Paws <br></br> Animal Clinic</h1>
            <p className="description">At Pet Paws Animal Clinic, we provide compassionate care for your beloved pets. Our team of experienced veterinarians and staff are dedicated to ensuring the health and well-being of your furry friends. From routine check-ups to specialized treatments, we offer a wide range of services tailored to meet your pet's individual needs. Trust us to be your partner in keeping your pets happy and healthy for years to come.</p>
            <Link to='./appointment'>
              <button className="book-appointment-btn">Book Appointment</button>            
            </Link>
          </div>
        </div>
        <div className="card-container">
          <div className="blue-card">
            <h2>Featured Pet Shop Categories</h2>
            <div className="card-row">
              <div className="card">
                <img src="https://www.thesprucepets.com/thmb/f_IXotxdvQKoJ6UqC9Xuqcf7m6I=/5464x3073/smart/filters:no_upscale()/people-food-for-puppies-2804770-hero-58d5ffa7c4784604b5088d8fcf41fed7.jpg" alt="Dog Food" />
                <p className='paragraph'>Dog Food</p>
              </div>
              <div className="card">
                <img src="https://www.carecredit.com/sites/cc/image/wet-dry-cat-food.jpg" alt="Cat Food" />
                <p className='paragraph'>Cat Food</p>
              </div>
              <div className="card">
                <img src="https://assets-global.website-files.com/5f7adfe5ed7d773f90050d9e/62831500f1fe236e2869d3c9_puppy-vaccinations-malaysia.jpg" alt="Medicine" />
                <p className='paragraph'>Medicine</p>
              </div>
              <div className="card">
                <img src="https://jcpenney.scene7.com/is/image/jcpenneyimages/dogs-e7d6c944-86c1-41fa-9c69-2bf69ece4be3?scl=1&qlt=75" alt="Accessories" />
                <p className='paragraph'>Accessories</p>
              </div>
            </div>
            <Link to="/all-categories">
              <button>View all Categories</button>
          </Link>
          </div>
        </div>
        <div className="services-container">
        <div className="services-section">
            <div className="services-content">
            <h1>Our Services</h1>
            <p>At Pet Paws Animal Clinic, we understand that your pets are cherished members of your family. That's why we're dedicated to providing compassionate and comprehensive veterinary care to ensure their health and well-being. Our experienced team offers a wide range of services tailored to meet the unique needs of each pet, including preventive care, diagnostic services, surgical procedures, dental care, and specialized treatments.</p>
            <div className="services-list">
        <div className="service">
            <span className="service-icon">&#9733;</span>
            <h3>Surgery</h3>
        </div>
        <div className="service">
            <span className="service-icon">&#9733;</span>
            <h3>Diagnostics</h3>
        </div>
        <div className="service">
            <span className="service-icon">&#9733;</span>
            <h3>Dentistry</h3>
        </div>
        <div className="service">
            <span className="service-icon">&#9733;</span>
            <h3>Wellness & Preventive Care</h3>
        </div>
        </div>
        <Link to="./services">
        <button className="view-all-services-btn">View All Services</button>
        </Link>

      </div>
        <div className="services-image">
          <img src="https://wikiclipart.com/wp-content/uploads/2017/11/Dog-paw-prints-free-vector-graphic-paw-prints-dog-print-cat-image-clip-art.png" alt="Services Image" />
        </div>
      </div>
    </div>
      <Reviews/>
      <Footer/>
      </div>
    </div>
  );
}

export default Home;
