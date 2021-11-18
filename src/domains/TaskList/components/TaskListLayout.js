import { Col } from 'antd'
import { TaskList, TaskListAdvancedView } from '.'
import { DefaultLists } from '../../DefaultList/components'
import { useCurrentList } from '../hooks'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskListLayout = () => {
  const { currentList, setCurrentList } = useCurrentList()
  const { store } = useStore()

  return (
    <div style={{ height: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <Col cw={12} span={6} style={{ backgroundColor: '#4D4549', width: '100%', padding: '20px' }}>
          <DefaultLists />
          <TaskList taskLists={store} setCurrentList={setCurrentList} />
        </Col>
        <Col cw={12} span={18} style={{ backgroundColor: '#2F222A', paddingTop: '10px' }}>
          <TaskListAdvancedView taskList={currentList} />
        </Col>
      </div>
    </div>
  )
}

export default TaskListLayout
