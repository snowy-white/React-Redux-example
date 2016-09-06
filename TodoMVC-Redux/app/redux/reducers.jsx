import { combineReducers } from 'redux';
import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, SET_FILTER_TYPE, FilterType} from './actions';
const {SHOW_ALL} = FilterType;

function filter(filterType = SHOW_ALL, action) {
    switch (action.type) {
        case SET_FILTER_TYPE:
            return action.filter;
        default:
            return filterType;
    }
}

function handleTask(tasks = [], action) {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...tasks,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case COMPLETE_TASK: /*{
            console.log(state);
            state[action.index].completed = true;
            return state;
        }*/
         return [
             ...tasks.slice(0, action.index),
             Object.assign({}, tasks[action.index], {
                 completed: true
             }),
             ...tasks.slice(action.index + 1)
         ];
        case DELETE_TASK: /*{
            state.splice(action.index, 1);
            return state;
        }*/
        return[
            ...tasks.slice(0,action.index),
            ...tasks.slice(action.index+1)
        ];
        default:
            return tasks;
    }
}

const taskHandler = combineReducers(
    {
        filter,
        handleTask
    }
);

export default taskHandler;