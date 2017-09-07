import { combineReducers } from 'redux';
import { ADD_TODO, MARK_AS_COMPLETED, MARK_AS_INCOMPLETED } from '../Actions/actions';

const addingEachTask = (action) => {
  return {
    task: action.text,
    id: action.id,
    completed: false
  }
}
const markingAsCompleted = (action, state) => {
  let myTask = state;
  for (var i = 0; i < myTask.length; i++) {
    if (myTask[i].id === action.id) {
      myTask[i].completed = true;
    }
  }
  return myTask;
}
const markingAsIncompleted = (action, state) => {
  let myTask = state;
  for (var i = 0; i < myTask.length; i++) {
    if (myTask[i].id === action.id) {
      myTask[i].completed = false;
    }
  }
  return myTask;
}

function theTaskList(state = [], action) {
  let myTask = null
  switch(action.type) {
    case ADD_TODO:
      myTask = [...state, addingEachTask(action)]
      return myTask;
    case MARK_AS_COMPLETED:
      myTask = markingAsCompleted(action, state)
      return myTask;
    case MARK_AS_INCOMPLETED:
      myTask = markingAsIncompleted(action, state)
      return myTask;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  theTaskList,
})

export default todoApp;
