import React from 'react';
import { Task } from '../types';

interface ItemCardProps {
    //task is a single task object passed from the ItemList component
    //which renders the task's task property
    task: Task;
}

// FC/FunctionComponent used for type checking
const ItemCard: React.FC<ItemCardProps> = ({ task }) => {
    return (
        <div className="item-card">
            <p>{task.task}</p>
        </div>
    );
};

export default ItemCard;
