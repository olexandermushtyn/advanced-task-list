import { firestoreService } from '../../../services/firebase'

const useFetchDocuments = dispatch => {
  const fetchDocuments = async () => {
    const { queryDocuments } = firestoreService
    const payload = await queryDocuments('taskLists')
    console.log(payload)
    dispatch({
      type: 'updateTaskList',
      payload,
    })
  }

  return fetchDocuments
}

export default useFetchDocuments
