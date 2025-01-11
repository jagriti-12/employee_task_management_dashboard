import React from 'react';
import Header from '../others/Header'; // Import Header component
import TaskListNumber from '../others/TaskListNumber'; // Import TaskListNumber component
import TaskList from '../TaskList/TaskList'; // Import TaskList component

// EmployeeDashboard component acts as the main dashboard for an employee
const EmployeeDashboard = (props) => {
    return (
        <div>
            <div className='p-20 h-screen'>
                {/* Header component displays a header and receives changeUser and data props */}
                <Header changeUser={props.changeUser} data={props.data} />
                {/* TaskListNumber displays a summary or count of tasks */}
                <TaskListNumber data={props.data} />
                {/* TaskList displays the detailed list of tasks */}
                <TaskList data={props.data} />
            </div>
        </div>
    );
};

export default EmployeeDashboard;
