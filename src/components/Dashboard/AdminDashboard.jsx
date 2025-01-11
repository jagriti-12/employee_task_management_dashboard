import React from 'react';
import Header from '../others/Header'; // Import Header component
import CreateTask from '../others/CreateTask'; // Import CreateTask component
import AllTask from '../others/AllTask'; // Import AllTask component

// AdminDashboard component serves as the main dashboard for the admin
const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            {/* Header component with a prop to change the user */}
            <Header changeUser={props.changeUser} />
            {/* CreateTask component to allow task creation */}
            <CreateTask />
            {/* AllTask component to display all tasks */}
            <AllTask />
        </div>
    );
};

export default AdminDashboard;
