import { Col } from 'antd'
import { TaskList, TaskListAdvancedView } from '.'
import { useCurrentList } from '../hooks'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskListLayout = () => {
  const { currentList, setCurrentList } = useCurrentList()
  const { store } = useStore()

  return (
    <div style={{ height: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <Col
          cw={12}
          span={4}
          style={{ backgroundColor: 'grey', width: '100%' }}>
          <TaskList taskLists={store} setCurrentList={setCurrentList} />
        </Col>
        <Col cw={12} span={20} style={{ backgroundColor: '#D4D4D4' }}>
          <TaskListAdvancedView taskList={currentList} />
        </Col>
      </div>
    </div>
  )
}

export default TaskListLayout
