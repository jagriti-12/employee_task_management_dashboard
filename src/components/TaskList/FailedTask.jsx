import 'react';

// FailedTask component displays task details and a button to mark it as failed
const FailedTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            {/* Task category and date display */}
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3> {/* Display task category */}
                <h4 className='text-sm'>22 Dec 2024</h4> {/* Hardcoded task date (Consider using `data.taskDate` instead) */}
            </div>

            {/* Task title */}
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>

            {/* Task description */}
            <p className='text-sm mt-2'>
                {data.taskDescription} {/* Display task description */}
            </p>

            {/* Button for marking the task as failed */}
            <div className='mt-2'>
                <button className='w-full bg-red-900 py-1 px-2 text-sm rounded-md'>
                    Failed {/* Button label indicating task failure */}
                </button>
            </div>
        </div>
    );
}

export default FailedTask;
