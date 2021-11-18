const useUpdateTask = (store, dispatch) => {
  const updateTask = (taskList, task, newTask) => {
    const collection = task.done ? 'done' : 'notDone'
    const taskListIndex = store.indexOf(taskList)
    const taskIndex = taskList.tasks[collection].indexOf(task)
    const storeCopy = [...store]
    storeCopy[taskListIndex].tasks[collection][taskIndex] = newTask
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return updateTask
}

export default useUpdateTask
