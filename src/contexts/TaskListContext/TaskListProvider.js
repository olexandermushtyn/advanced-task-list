import { useReducer } from 'react'
import { TaskListContext } from '.'
import reducer from './reducer'

import { useCreateTaskList, useUpdateTaskList, useUpdateTask } from './hooks'

const TaskListProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])

  const createTaskList = useCreateTaskList(dispatch)
  const updateTaskList = useUpdateTaskList(store, dispatch)
  const updateTask = useUpdateTask(store, dispatch)

  return (
    <TaskListContext.Provider
      value={{ store, createTaskList, updateTaskList, updateTask }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListProvider
