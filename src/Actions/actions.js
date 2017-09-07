export const ADD_TODO = 'ADD_TODO';
export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED';
export const MARK_AS_INCOMPLETED = 'MARK_AS_INCOMPLETED';

export function addTask(task, id) {
  return {
    type: ADD_TODO,
    text: task,
    id
  }
}

export function markAsCompleted(task) {
  return {
    type: MARK_AS_COMPLETED,
    id: task.id,
    task
  }
}

export function markAsIncompleted(task) {
  return {
    type: MARK_AS_INCOMPLETED,
    id: task.id,
    task
  }
}
