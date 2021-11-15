const useUpdateTask = (store, dispatch) => {
  const updateTask = (taskList, task, newTask) => {
    const taskListIndex = store.indexOf(taskList)
    const taskIndex = taskList.tasks.indexOf(task)
    const storeCopy = [...store]
    storeCopy[taskListIndex].tasks[taskIndex] = newTask
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return updateTask
}

export default useUpdateTask
