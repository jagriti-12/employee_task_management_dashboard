import 'react';
import AcceptTask from './AcceptTask'; // Importing AcceptTask component
import NewTask from './NewTask'; // Importing NewTask component
import CompleteTask from './CompleteTask'; // Importing CompleteTask component
import FailedTask from './FailedTask'; // Importing FailedTask component

const TaskList = ({ data }) => {
    // The TaskList component renders different types of tasks based on their current status
    return (
        <div id='tasklist' className='h-[65%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
        
        {/* Iterating over each task in the data to display it accordingly */}
        {data.tasks.map((elem, idx) => {
            
            // If the task is active, render the AcceptTask component
            if (elem.active) {
                return <AcceptTask key={idx} data={elem} />;
            }

            // If the task is new, render the NewTask component
            if (elem.newTask) {
                return <NewTask key={idx} data={elem} />;
            }

            // If the task is completed, render the CompleteTask component
            if (elem.completedTask) {
                return <CompleteTask key={idx} data={elem} />;
            }

            // If the task failed, render the FailedTask component
            if (elem.failedTask) {
                return <FailedTask key={idx} data={elem} />;
            }
        })}
        </div>
    );
}

export default TaskList;
