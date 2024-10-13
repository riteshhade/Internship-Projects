import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const cancelAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="App">
      <h1>Teacher Student Appointment Booking</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList appointments={appointments} cancelAppointment={cancelAppointment}/>
    </div>
  );
}
export default App;