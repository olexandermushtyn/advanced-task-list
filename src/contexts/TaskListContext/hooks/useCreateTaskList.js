import { firestoreService } from '../../../services/firebase'

const useCreateTaskList = dispatch => {
  const createTaskList = taskList => {
    const payload = taskList
    const { createDocument } = firestoreService
    createDocument('taskLists', taskList.id, taskList)

    dispatch({
      type: 'createTaskList',
      payload,
    })
  }
  return createTaskList
}

export default useCreateTaskList
