
import React, { useState, useEffect } from 'react';
export default function FormatDate(date){

    function ShowDate(date){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the current time every second
        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);

  }, []);
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",    
    "Thursday",
    "Friday",
    "Saturday"
                ];

let currentDay = days[date.getDay()];
let currentHour = date.getHours();
let currentMinutes = date.getMinutes();

return (
    <div className="date">
        {currentDay} {currentHour}:{currentMinutes}
    </div>
);
    }

let now = new Date();
return <div className="date">{ShowDate(now)}</div>;
}

function formatDay(timestamp){
    let date = new Date (timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed","Thur","Fri","Sat"]

    return (
       <div> ${days[day]}</div>
    );
      }

    