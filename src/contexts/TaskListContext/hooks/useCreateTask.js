const useCreateTask = (store, dispatch) => {
  const createTask = (taskList, task) => {
    const index = store.indexOf(taskList)
    const storeCopy = [...store]
    storeCopy[index].tasks = [...store[index].tasks, task]
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return createTask
}

export default useCreateTask
