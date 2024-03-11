import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateAppointmentForm = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({
    ownerName: '',
    petName: '',
    appointmentDate: '',
    appointmentTime: '',
    doctor: '',
    service: '',
    location: '',
    note: ''
  });

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(`/api/appointments/${id}`);
        setAppointment(response.data);
      } catch (error) {
        console.error('Error fetching appointment:', error);
      }
    };
    fetchAppointment();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/appointments/${id}`, appointment);
      // Optionally, redirect the user to another page or show a success message
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <div>
      <h2>Update Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Owner Name:
          <input type="text" name="ownerName" value={appointment.ownerName} onChange={handleChange} />
        </label>
        <label>
          Pet Name:
          <input type="text" name="petName" value={appointment.petName} onChange={handleChange} />
        </label>
        <label>
          Appointment Date:
          <input type="date" name="appointmentDate" value={appointment.appointmentDate} onChange={handleChange} />
        </label>
        <label>
          Appointment Time:
          <input type="time" name="appointmentTime" value={appointment.appointmentTime} onChange={handleChange} />
        </label>
        <label>
          Doctor:
          <input type="text" name="doctor" value={appointment.doctor} onChange={handleChange} />
        </label>
        <label>
          Service:
          <input type="text" name="service" value={appointment.service} onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={appointment.location} onChange={handleChange} />
        </label>
        <label>
          Note:
          <textarea name="note" value={appointment.note} onChange={handleChange} />
        </label>
        <button type="submit">Update Appointment</button>
      </form>
    </div>
  );
};

export default UpdateAppointmentForm;
