import { useState } from 'react';
import { testData } from './data';
import TopBar from './components/TopBar';
import ItemList from './components/ItemList';
import { Task } from './types';

//App component
const App = () => {
  //state hook for managing list of tasks
  //`tasks` state holds array of task objects
  //`setTasks` is function used to update state
  const [tasks, setTasks] = useState<Task[]>(testData); //initialize tasks with testData

  //state hook managing input field value/new task text
  //`newTask` state holds current value of input
  //`setNewTask` is function used to update
  const [newTask, setNewTask] = useState(''); //initialize `newTask as empty string

  //function called when "Add" button is clicked
  const addTask = () => {
    //only add new task if `newTask` input field is not empty
    if (newTask) {
      //create new task object
      const newTaskObj = {
        //new ID
        id: tasks.length + 1,
        //task's description is input value
        task: newTask,
        //task not completed
        completed: false,
      };
      //update tasks state by adding new task object to array
      setTasks([...tasks, newTaskObj]);
      //clear input field
      setNewTask('');
    }
  };

  return (
    <div>
      {/* TopBar Component */}
      <TopBar
        //Passing the current value of the input field
        newTask={newTask}
        //Passing the function to update the input field value
        setNewTask={setNewTask}
        //Passing the function to add a new task
        addTask={addTask} />

      {/* ItemList Component */}
      <ItemList
        //Passing the list of tasks to ItemList
        tasks={tasks} />
    </div>
  );
};

export default App;
