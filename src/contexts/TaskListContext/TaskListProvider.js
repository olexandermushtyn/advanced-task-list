import { useReducer } from 'react'
import { TaskListContext } from '.'
import reducer from './reducer'

import { useCreateTaskList, useUpdateTaskList, useUpdateTask, useDeleteTask } from './hooks'

const TaskListProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])

  const createTaskList = useCreateTaskList(dispatch)
  const updateTaskList = useUpdateTaskList(store, dispatch)
  const updateTask = useUpdateTask(store, dispatch)
  const deleteTask = useDeleteTask(store, dispatch)

  console.log(store)

  return (
    <TaskListContext.Provider
      value={{
        store,
        createTaskList,
        updateTaskList,
        updateTask,
        deleteTask,
      }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListProvider
