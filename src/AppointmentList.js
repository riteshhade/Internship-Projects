import React from 'react';

const AppointmentList = ({ appointments, cancelAppointment }) =>{
    return(
        <div>
            <h2>Booked Appointments</h2>
            {
                appointments.length === 0 ? (
                    <p> No appointments booked yet.</p>
                ) : (
                    <ul>
                        {appointments.map((appointment,index) => (
                            <li key ={index}>
                                <span>{appointment.studentName} has an appointment with {appointment.tutorName} on {appointment.appointmentDate} at {appointment.appointmentTime}</span>
                                <button
                                    onClick={() => cancelAppointment(index)}
                                >
                                    Cancel
                                </button>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default AppointmentList;