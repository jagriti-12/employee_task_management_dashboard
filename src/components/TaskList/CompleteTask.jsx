import 'react';

// CompleteTask component displays task details and a button to mark it as completed
const CompleteTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            {/* Task category and date display */}
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3> {/* Display task category */}
                <h4 className='text-sm'>{data.taskDate}</h4> {/* Display task due date */}
            </div>

            {/* Task title */}
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>

            {/* Task description */}
            <p className='text-sm mt-2'>
                {data.taskDescription} {/* Brief description of the task */}
            </p>

            {/* Button for marking the task as completed */}
            <div className='mt-2'>
                <button className='w-full bg-green-900 py-1 px-2 text-sm rounded-md'>
                    Completed {/* Button label indicating task completion */}
                </button>
            </div>
        </div>
    );
}

export default CompleteTask;
