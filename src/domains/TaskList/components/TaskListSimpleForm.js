import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import nextId from 'react-id-generator'
import { firestoreService } from '../../../services/firebase'

const TaskListSimpleForm = () => {
  const { createTaskList } = useStore()
  const { generateId } = firestoreService

  return (
    <div style={{ color: '#c8c2c5', display: 'flex', alignItems: 'center' }}>
      <Button
        style={{ color: '#c8c2c5' }}
        type="text"
        shape="circle"
        icon={<PlusCircleOutlined />}
        size="large"
        onClick={async () => {
          await createTaskList({ id: generateId('taskLists'), name: '', tasks: { done: [], notDone: [] } })
        }}
      />
      <p style={{ margin: '0px 5px' }}>New list</p>
    </div>
  )
}

export default TaskListSimpleForm
