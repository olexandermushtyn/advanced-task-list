import { useReducer } from 'react'
import { TaskListContext } from '.'
import reducer from './reducer'

import { useCreateTaskList, useCreateTask, useUpdateTask, useDeleteTask, useDeleteTaskList, useUpdateTaskList, fetchDocuments } from './hooks'
import useFetchDocuments from './hooks/useFetchDocuments'

const TaskListProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])

  const createTaskList = useCreateTaskList(dispatch)
  const createTask = useCreateTask(store, dispatch)
  const updateTask = useUpdateTask(store, dispatch)
  const deleteTask = useDeleteTask(store, dispatch)
  const deleteTaskList = useDeleteTaskList(store, dispatch)
  const updateTaskList = useUpdateTaskList(store, dispatch)
  const fetchDocuments = useFetchDocuments(dispatch)

  console.log(store)

  return (
    <TaskListContext.Provider
      value={{
        store,
        createTaskList,
        createTask,
        updateTask,
        deleteTask,
        deleteTaskList,
        updateTaskList,
        fetchDocuments,
      }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListProvider
