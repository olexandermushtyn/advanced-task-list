import { firestoreService } from '../../../services/firebase'

const useAdvancedViewActions = () => {
  const { generateId } = firestoreService

  const onFreeSpaceClick = (currentSelectedTask, setCurrentSelectedTask, deleteTask, createTask, taskList) => {
    const taskData = {
      id: generateId('taskLists'),
      name: '',
      done: false,
    }

    if (currentSelectedTask && currentSelectedTask.name.replace(/\s+/g, '') !== '') setCurrentSelectedTask(undefined)
    else {
      if (currentSelectedTask?.name.replace(/\s+/g, '') === '') {
        deleteTask(taskList, currentSelectedTask)
        setCurrentSelectedTask(undefined)
      } else {
        createTask(taskList, taskData)
      }
    }
  }

  return { onFreeSpaceClick }
}

export default useAdvancedViewActions
