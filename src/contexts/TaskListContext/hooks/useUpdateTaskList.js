const useUpdateTaskList = (store, dispatch) => {
  const updateTaskList = (taskList, updatedTaskList) => {
    const storeCopy = [...store]
    const indexOfUpdatedElement = storeCopy.indexOf(taskList)
    storeCopy[indexOfUpdatedElement] = updatedTaskList
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return updateTaskList
}

export default useUpdateTaskList
