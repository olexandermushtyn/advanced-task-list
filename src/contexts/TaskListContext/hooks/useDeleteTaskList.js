const useDeleteTaskList = (store, dispatch) => {
  const deleteTaskList = list => {
    let storeCopy = [...store]
    storeCopy = storeCopy.filter(item => item.id !== list.id)
    dispatch({ type: 'updateTaskList', payload: storeCopy })
  }
  return deleteTaskList
}

export default useDeleteTaskList
