import React from 'react';
import './EmptyListMessage.css';

const EmptyListMessage = (props) => {
  return (
    <div className="empty-list-container">
      <div className="empty-list-message">
        <h3 className="view-title">No Task Yet</h3>
        <p className="subtitle">Get productiv. Create a Task Now.</p>
        <button
          onClick={() => props.onCreateTaskClick(true)}
          className="btn btn-primary btn-xl"
        >
          Creat Task
        </button>
      </div>
    </div>
  );
};

export default EmptyListMessage;
