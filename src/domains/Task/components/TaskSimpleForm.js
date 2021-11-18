import { PlusOutlined } from '@ant-design/icons'
import nextId from 'react-id-generator'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskSimpleForm = ({ taskList }) => {
  const taskData = {
    id: nextId(),
    name: '',
    done: false,
  }

  const { createTask } = useStore()

  return (
    <div>
      <PlusOutlined
        style={{ marginRight: '5px', color: '#969094', fontSize: '18px' }}
        onClick={() => createTask(taskList, taskData)}
      />
    </div>
  )
}

export default TaskSimpleForm
