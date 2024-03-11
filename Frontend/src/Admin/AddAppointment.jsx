import React, { useState } from 'react';
import './AddAppointment.css'
import axios from 'axios'; // Import Axios

const AddAppointmentForm = ({ onSubmit }) => {
    const [ownerName, setOwnerName] = useState('');
    const [petName, setPetName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [doctor, setDoctor] = useState('');
    const [service, setService] = useState('');
    const [location, setLocation] = useState('');
    const [note, setNote] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/appointments/appointments', {
          ownerName,
          petName,
          appointmentDate,
          appointmentTime,
          doctor,
          service,
          location,
          note,
        });
        onSubmit(response.data); 
      } catch (error) {
        console.error('Error adding appointment:', error);
      }
    };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ownerName">Owner Name:</label>
        <input
          type="text"
          id="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="petName">Pet Name:</label>
        <input
          type="text"
          id="petName"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
      </div>
      <div className="row">
  <div>
    <label htmlFor="appointmentDate">Appointment Date:</label>
    <input
      type="date"
      id="appointmentDate"
      value={appointmentDate}
      onChange={(e) => setAppointmentDate(e.target.value)}
      required
    />
  </div>
  <div>
    <label htmlFor="appointmentTime">Appointment Time:</label>
    <input
      type="time"
      id="appointmentTime"
      value={appointmentTime}
      onChange={(e) => setAppointmentTime(e.target.value)}
      required
    />
  </div>
</div>

      <div>
        <label htmlFor="doctor">Doctor:</label>
        <input
          type="text"
          id="doctor"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        />
      </div>
      <div className="select-container">
        <label htmlFor="service" className="select-label">Service:</label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="select-input"
          required
        >
          <option value="">Select a service</option>
          <option value="Wellness & preventive Care" className="select-option">Wellness & preventive Care</option>
          <option value="Dentistry" className="select-option">Dentistry</option>
          <option value="Diagnostics" className="select-option">Diagnostics</option>
          <option value="Surgery" className="select-option">Surgery</option>
        </select>
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <button type="submit" className='submit'>Add Appointment</button>
    </form>
  );
};

export default AddAppointmentForm;
