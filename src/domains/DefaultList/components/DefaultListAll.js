import { List } from '../../../componentns'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import { TaskListAdvancedView } from '../../TaskList/components'

const DefaultListAll = ({ taskList, setTaskList }) => {
  const { store } = useStore()
  return (
    <div>
      {store.map(item => (
        <TaskListAdvancedView taskList={item} />
      ))}
    </div>
  )
}

export default DefaultListAll
