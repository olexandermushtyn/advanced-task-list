import { TaskListContext } from '..'
import { useContext } from 'react'

const useStore = () => useContext(TaskListContext)

export default useStore
