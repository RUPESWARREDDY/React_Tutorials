import React, { useState } from 'react'
import DatePicker from 'react-datepicker'


function DateDemo() {
    let[date,setDate]=useState(new Date())
    const isWeekend = (date) => {
        const day = date.getDay();
        return day === 0 || day === 6;  // Disable Saturday (6) and Sunday (0)
      };
  return (
    <div>
      <h1>Date format</h1>
      <DatePicker
      selected={date}
              onChange={(date)=>setDate(date)}
              minDate={date}
              dateFormat='dd/mm/yyyy'
              filterDate={(date) => !isWeekend(date)}
              todayButton='today'
              inline    
      />

    </div>
  )
}

export default DateDemo
