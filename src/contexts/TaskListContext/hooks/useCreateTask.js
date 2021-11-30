import { firestoreService } from '../../../services/firebase'

const useCreateTask = (store, dispatch) => {
  const createTask = (taskList, task) => {
    const { updateDocument } = firestoreService

    const index = store.indexOf(taskList)
    const storeCopy = [...store]
    storeCopy[index].tasks.notDone = [...store[index].tasks.notDone, task]
    updateDocument('taskLists', storeCopy[index].id, storeCopy[index])
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return createTask
}

export default useCreateTask
