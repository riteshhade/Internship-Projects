import React,  { useState } from 'react';

const AppointmentForm = ({ addAppointment }) => {
    const [studentName, setStudentName] = useState('');
    const [tutorName, setTutorName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAppointment = {
            studentName,
            tutorName,
            appointmentDate,
            appointmentTime
        };
        addAppointment(newAppointment);
        setStudentName('');
        setTutorName('');
        setAppointmentDate('');
        setAppointmentTime('');
    };
    return(
        <div>
            <h2>Book an Appointment
            <form onSubmit={handleSubmit}>
                <label>
                    Student Name:
                    <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
                </label>
                <br />
                <label>
                    Tutor Name:
                    <input type="text" value={tutorName} onChange={(e) => setTutorName(e.target.value)} />
                </label>
                <br />
                <label>
                    Appointment Date:
                    <input type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
                </label>
                <br />
                <label>
                    Appointment Time:
                    <input type="time" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} />
                </label>
                <br />
                <button type="submit">Book Appointment</button>
            </form></h2>
        </div>
    );
};
export default AppointmentForm;