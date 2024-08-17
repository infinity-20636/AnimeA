import { useState } from 'react';
import { type FC } from 'react';
import './Calendar.scss';

export interface ICalendarProps {}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: FC<ICalendarProps> = ({}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const endDay = endOfMonth.getDate();

  const daysInMonth = [];
  for (let i = 0; i < startDay; i++) {
    daysInMonth.push("");
  }
  for (let i = 1; i <= endDay; i++) {
    daysInMonth.push(i.toString());
  }

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <section className="section">
      <div className="calenda">
        <div className="calenda__header">
          <button onClick={handlePreviousMonth} className="calenda__nav">{"<"}</button>
          <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={handleNextMonth} className="calenda__nav">{">"}</button>
        </div>
        <div className="calenda__days">
          {daysOfWeek.map(day => (
            <div key={day} className="calenda__day">{day}</div>
          ))}
        </div>
        <div className="calenda__dates">
          {daysInMonth.map((date, index) => (
            <div key={index} className={`calenda__date ${date ? '' : 'empty'}`}>
              {date}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calendar;