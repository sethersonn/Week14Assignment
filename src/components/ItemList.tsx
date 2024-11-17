import React from 'react';
import { Task } from '../types';
import ItemCard from './ItemCard';

interface ItemListProps {
    //tasks is an array of task objects passed from App.
    //Used to render the list of tasks.
    tasks: Task[];
}

// FC/FunctionComponent used for type checking
const ItemList: React.FC<ItemListProps> = ({ tasks }) => {
    return (
        //inside .map() func, each task is passed as a prop
        //to the ItemCard component
        <div className="item-list">
            {tasks.map((task) => (
                <ItemCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ItemList;
