import { useState, useContext } from 'react'; // Import necessary hooks
import { AuthContext } from '../../context/AuthProvider'; // Import AuthContext to manage user data

// CreateTask component allows admins to create and assign tasks to employees
const CreateTask = () => {
    // Access user data and state updater from AuthContext
    const [userData, setUserData] = useContext(AuthContext);

    // State variables to manage form inputs
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    // State to hold the newly created task temporarily
    const [newTask, setNewTask] = useState({});

    // Form submission handler
    const submitHandler = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Create a new task object
        setNewTask({
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        });

        // Update user data by assigning the new task to the selected employee
        const data = userData;

        data.forEach((elem) => {
            // Check if the employee's name matches the one entered in the form
            if (assignTo === elem.firstName) {
                elem.tasks.push(newTask); // Add the new task to the employee's tasks
                elem.taskCount.newTask += 1; // Increment the count of new tasks
            }
        });

        setUserData(data); // Update the global user data
        console.log(data); // Log the updated user data for debugging

        // Reset form inputs
        setTaskTitle('');
        setCategory('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
    };

    return (
        <div className='p-5 bg-[#2B3B4D] mt-7 rounded'>
            <form
                onSubmit={submitHandler} // Attach the form submission handler
                className='flex flex-wrap w-full items-start justify-between'
            >
                {/* Left column: Task details */}
                <div className='w-1/2'>
                    {/* Input for task title */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-[#0095D0]'
                            type="text"
                            placeholder='Write Task Title'
                        />
                    </div>
                    {/* Input for task date */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-[#0095D0]'
                            type="date"
                        />
                    </div>
                    {/* Input for assigning the task */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-[#0095D0]'
                            type='text'
                            placeholder='Employee Name'
                        />
                    </div>
                    {/* Input for task category */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-[#0095D0]'
                            type='text'
                            placeholder='Design, Dev, Testing, Etc.'
                        />
                    </div>
                </div>

                {/* Right column: Task description */}
                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[2px] border-[#0095D0]'
                        cols="30"
                        rows="10"
                        placeholder='Write all about the Task Description'
                    />
                    {/* Submit button */}
                    <button
                        className='bg-[#0095D0] py-3 hover:bg-[#0095D0] px-5 rounded text-sm mt-4 w-full'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
