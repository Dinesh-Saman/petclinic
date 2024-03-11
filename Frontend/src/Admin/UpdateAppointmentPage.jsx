import React from 'react';
import AdminLayout from './AdminLayout';
import UpdateAppointmentForm from './UpdateAppointmentForm';


const UpdateAppointmentPage = () => {
  return (
    <AdminLayout>
      <h2>Update Appointment</h2>
      <UpdateAppointmentForm />
    </AdminLayout>
  );
};


export { UpdateAppointmentPage };
