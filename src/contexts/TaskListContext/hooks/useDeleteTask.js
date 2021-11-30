const useDeleteTask = (state, dispatch) => {
  const deleteTask = (taskList, task) => {
    const collection = task.done ? 'done' : 'notDone'
    const taskListIndex = state.indexOf(taskList)
    const storeCopy = [...state]
    console.log('Deleted task', task)
    const newTaskList = storeCopy[taskListIndex].tasks[collection].filter(item => item.id !== task.id)
    storeCopy[taskListIndex].tasks[collection] = [...newTaskList]
    console.log('Store copy', storeCopy)
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return deleteTask
}

export default useDeleteTask
