import 'react';

// AcceptTask component displays task details and provides buttons to mark tasks as completed or failed
const AcceptTask = ({ data }) => {
    console.log(); // Currently empty console log, consider removing or adding necessary data for debugging

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            {/* Task category and date display */}
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3> {/* Task category */}
                <h4 className='text-sm '>{data.taskDate}</h4> {/* Task due date */}
            </div>

            {/* Task title */}
            <h2 className='mt-5 text-2xl font-semibold '>{data.taskTitle}</h2>

            {/* Task description */}
            <p className='text-sm mt-2 '>
                {data.taskDescription} {/* Brief description of the task */}
            </p>

            {/* Buttons for completing or failing the task */}
            <div className='flex justify-between mt-4'>
                {/* Mark as Completed Button */}
                <button className='bg-green-500 py-1 px-2 text-sm rounded-md'>
                    Mark as Completed
                </button>

                {/* Mark as Failed Button */}
                <button className='bg-red-500 py-1 px-2 text-sm rounded-md'>
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;
