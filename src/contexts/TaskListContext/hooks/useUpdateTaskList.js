const useUpdateTaskList = (store, dispatch) => {
  const updateTaskList = (taskList, task) => {
    const index = store.indexOf(taskList)
    const storeCopy = [...store]
    storeCopy[index].tasks = [...store[index].tasks, task]
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return updateTaskList
}

export default useUpdateTaskList
