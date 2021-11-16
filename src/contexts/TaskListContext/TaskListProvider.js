import { useReducer } from 'react'
import { TaskListContext } from '.'
import reducer from './reducer'

import {
  useCreateTaskList,
  useCreateTask,
  useUpdateTask,
  useDeleteTask,
  useDeleteTaskList,
  useUpdateTaskList,
} from './hooks'

const TaskListProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])

  const createTaskList = useCreateTaskList(dispatch)
  const createTask = useCreateTask(store, dispatch)
  const updateTask = useUpdateTask(store, dispatch)
  const deleteTask = useDeleteTask(store, dispatch)
  const deleteTaskList = useDeleteTaskList(store, dispatch)
  const updateTaskList = useUpdateTaskList(store, dispatch)

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
      }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListProvider
