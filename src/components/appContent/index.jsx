import React from 'react'
import Inbox from './views/Inbox';
import Calendar from './views/Calendar';
const AppContent = () => {
    return (
        <div className='app-content'>
           {/* <Calendar/> */}
           <Inbox/>
        </div>
    )
}

export default AppContent
