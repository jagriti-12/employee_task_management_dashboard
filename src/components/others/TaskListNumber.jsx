import 'react';

// TaskListNumber component displays the number of tasks in different categories
const TaskListNumber = ({ data }) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            {/* New Task Block */}
            <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
                <h2 className='text-3xl font-bold text-black'>
                    {data.taskCount.newTask} {/* Displays the number of new tasks */}
                </h2>
                <h3 className='text-xl mt-0.5 font-medium text-black'>New Task</h3>
            </div>

            {/* Completed Task Block */}
            <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
                <h2 className='text-3xl font-bold text-black'>
                    {data.taskCount.completedTask} {/* Displays the number of completed tasks */}
                </h2>
                <h3 className='text-xl mt-0.5 font-medium text-black'>Completed Task</h3>
            </div>

            {/* Active (Accepted) Task Block */}
            <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
                <h2 className='text-3xl font-bold text-black'>
                    {data.taskCount.active} {/* Displays the number of active tasks */}
                </h2>
                <h3 className='text-xl mt-0.5 font-medium text-black'>Accepted Task</h3>
            </div>

            {/* Failed Task Block */}
            <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
                <h2 className='text-3xl font-bold text-black'>
                    {data.taskCount.failedTask} {/* Displays the number of failed tasks */}
                </h2>
                <h3 className='text-xl mt-0.5 font-medium text-black'>Failed Task</h3>
            </div>
        </div>
    );
};

export default TaskListNumber;
