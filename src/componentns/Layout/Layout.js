import { TaskListProvider } from '../../contexts/TaskListContext'
import { TaskListLayout } from '../../domains/TaskList/components'

const ApplicationLayout = () => {
  return (
    <TaskListProvider>
      <TaskListLayout />
    </TaskListProvider>
  )
}

export default ApplicationLayout
