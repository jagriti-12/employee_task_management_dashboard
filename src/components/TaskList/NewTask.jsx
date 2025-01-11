import 'react';

// NewTask component displays task details and provides an option to accept the task
const NewTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            {/* Task category and date display */}
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3> {/* Display task category */}
                <h4 className='text-sm'>{data.taskDate}</h4> {/* Display task due date */}
            </div>

            {/* Task title */}
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>

            {/* Task description */}
            <p className='text-sm mt-2'>
                {data.taskDescription} {/* Display task description */}
            </p>

            {/* Button for accepting the task */}
            <div className='mt-4'>
                <button className='bg-blue-800 py-1 px-2 text-sm rounded-md'>
                    Accept Task {/* Button label to accept the task */}
                </button>
            </div>
        </div>
    );
}

export default NewTask;
