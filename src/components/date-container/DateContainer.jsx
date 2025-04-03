import React from 'react';
import './DateContainer.css';

function DateContainer(props) {
  return (
    <div className="due-date">
      <p>Due date</p>
      <p>{props.dueDate.toLocaleDateString()}</p>
    </div>
  );
}

export default DateContainer;
