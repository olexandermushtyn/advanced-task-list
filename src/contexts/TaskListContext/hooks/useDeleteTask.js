const useDeleteTask = (state, dispatch) => {
  const deleteTask = (taskList, task) => {
    const taskListIndex = state.indexOf(taskList)
    const storeCopy = [...state]
    const newTaskList = storeCopy[taskListIndex].tasks.filter(item => item.id !== task.id)

    storeCopy[taskListIndex].tasks = [...newTaskList]
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return deleteTask
}

export default useDeleteTask
