export const ADD_TASK='ADD_TASK';
export const COMPLETE_TASK='COMPLETE_TASK';
export const DELETE_TASK='DELETE_TASK';
export const SET_FILTER_TYPE='SET_FILTER_TYPE';

export const FilterType={
    SHOW_ALL:'SHOW_ALL',
    SHOE_COMPLETE:'SHOE_COMPLETE',
    SHOW_ACTIVE:'SHOW_ACTIVE'

};

export function addTask(text){
    return{type:ADD_TASK,text};
}

export function completeTask(index){
    return{type:COMPLETE_TASK,index};
}
export function deleteTask(index){
    return{type:DELETE_TASK,index};
}
export function setFilterType(filter){
    return{type:SET_FILTER_TYPE,filter};
}