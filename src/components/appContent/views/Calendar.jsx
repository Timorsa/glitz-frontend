import React from 'react'
import DatePicker from './DatePicker';
import {FcReading} from 'react-icons/fc';

const Calendar = () => {
    return (
        <div className="calendar-content">
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
                <div className="apponitment-item">
                    <div className="header">
                        <div className="avatar">
                            <img src="https://www.dafont.com/forum/attach/orig/7/6/766871.jpg" />
                        </div>
                        <div className="business-name">Tattoo Saloon</div>

                    </div>
                    <div className="body">
                        <div className="procedure">Sketch and Plan new Tattoo</div>
                        <div className="time">17:00 - 18:30 </div>
                    </div>
                </div>
                <div className="apponitment-item">
                    <div className="header">
                        <div className="avatar">
                            <img src="https://www.dafont.com/forum/attach/orig/7/6/766871.jpg" />
                        </div>
                        <div className="business-name">Tattoo Saloon</div>

                    </div>
                    <div className="body">
                        <div className="procedure">Sketch and Plan new Tattoo</div>
                        <div className="time">17:00 - 18:30 </div>
                    </div>
                </div>
                <div className="apponitment-item">
                    <div className="header">
                        <div className="avatar">
                            <img src="https://www.dafont.com/forum/attach/orig/7/6/766871.jpg" />
                        </div>
                        <div className="business-name">Tattoo Saloon</div>

                    </div>
                    <div className="body">
                        <div className="procedure">Sketch and Plan new Tattoo</div>
                        <div className="time">17:00 - 18:30 </div>
                    </div>
                </div>
                <div className="apponitment-item">
                    <div className="header">
                        <div className="avatar">
                            <img src="https://www.dafont.com/forum/attach/orig/7/6/766871.jpg" />
                        </div>
                        <div className="business-name">Tattoo Saloon</div>

                    </div>
                    <div className="body">
                        <div className="procedure">Sketch and Plan new Tattoo</div>
                        <div className="time">17:00 - 18:30 </div>
                    </div>
                </div>
            </div>
            </div>
            
    )
}

export default Calendar
