import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

export default function DatePicker() {
  const [date, setDate] = useState()

  return (
    <div>
      <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
    </div>
  )
}