import 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider'; // Import AuthContext to access user data

// AllTask component displays the task list for all employees
const AllTask = () => {
    // Access user data and setter function from AuthContext
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div id='tasklist' className='bg-[#2B3B4D] p-5 rounded mt-5'>
            {/* Header row for the task list */}
            <div className='bg-[#0095D0] mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
                <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
            </div>
            {/* Render a list of employees and their task counts */}
            <div>
                {userData.map((elem, idx) => (
                    <div
                        key={idx} // Use unique key for each list item
                        className='border-2 border-[#0095D0] mb-2 py-2 px-4 flex justify-between rounded'
                    >
                        {/* Display employee name */}
                        <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
                        {/* Display count of new tasks */}
                        <h3 className='w-1/5 text-lg font-medium text-blue-400'>
                            {elem.taskCount.newTask}
                        </h3>
                        {/* Display count of active tasks */}
                        <h5 className='w-1/5 text-lg font-medium text-yellow-400'>
                            {elem.taskCount.active}
                        </h5>
                        {/* Display count of completed tasks */}
                        <h5 className='w-1/5 text-lg font-medium text-white'>
                            {elem.taskCount.completedTask}
                        </h5>
                        {/* Display count of failed tasks */}
                        <h5 className='w-1/5 text-lg font-medium text-red-400'>
                            {elem.taskCount.failedTask}
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;
