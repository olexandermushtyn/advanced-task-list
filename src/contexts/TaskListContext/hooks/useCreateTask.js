const useCreateTask = (store, dispatch) => {
  const createTask = (taskList, task) => {
    const index = store.indexOf(taskList)
    const storeCopy = [...store]
    storeCopy[index].tasks.notDone = [...store[index].tasks.notDone, task]
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return createTask
}

export default useCreateTask
