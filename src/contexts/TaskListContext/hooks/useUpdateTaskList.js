import { firestoreService } from '../../../services/firebase'

const useUpdateTaskList = (store, dispatch) => {
  const updateTaskList = (taskList, updatedTaskList) => {
    const storeCopy = [...store]
    const indexOfUpdatedElement = storeCopy.indexOf(taskList)
    const { updateDocument } = firestoreService
    updateDocument('taskLists', updatedTaskList.id, updatedTaskList)

    storeCopy[indexOfUpdatedElement] = updatedTaskList
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return updateTaskList
}

export default useUpdateTaskList
