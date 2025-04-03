import React from 'react';
import './ControlPanel.css';
import Modal from '../modal/Modal';
import CreatTaskForm from '../forms/CreateTaskForm';

const ControlPanel = (props) => {
  const { isOpen, setIsOpen, onNewTaskAdd, taskList } = props;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNewTaskAdd = (task) => {
    onNewTaskAdd(task);
    closeModal();
  };
  return (
    <div>
      <div className="control-panel-container">
        <div>
          <h3 className="view-title">Task</h3>
          <p className="subtitle">Your task in your space.</p>
        </div>
        {taskList.length > 0 && (
          <button onClick={openModal} className="btn btn-primary">
            Create Task
          </button>
        )}
        <Modal onClose={closeModal} isOpen={isOpen}>
          <h3>Create Task</h3>
          <CreatTaskForm addNewTask={handleNewTaskAdd} />
        </Modal>
      </div>
    </div>
  );
};

export default ControlPanel;
