import React from 'react'
import DatePicker from './DatePicker';
import {FcReading} from 'react-icons/fc';
const AppContent = () => {
    return (
        <div className='app-content'>
            <div className="calendar">
                <h3>Please Choose a Date</h3>
                <DatePicker/>
                <span className="devider"></span>
                <div className="suggestions">
                <h3>Suggustions</h3>
                <div className="suggest">

                <FcReading size={125}/>
                <button>Generate </button>
                </div>
                </div>
            </div>
            <div className="appoints-list">
                <h3>
                    List Of Appointments
                </h3>
            </div>
        </div>
    )
}

export default AppContent
