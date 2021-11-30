import { TaskListProvider } from '../../contexts/TaskListContext'
import { TaskListLayout } from '../../domains/TaskList/components'
import { BrowserRouter as Router } from 'react-router-dom'

const ApplicationLayout = () => {
  return (
    <TaskListProvider>
      <Router>
        <TaskListLayout />
      </Router>
    </TaskListProvider>
  )
}

export default ApplicationLayout
