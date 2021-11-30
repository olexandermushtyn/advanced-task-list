import { PlusOutlined } from '@ant-design/icons'
import nextId from 'react-id-generator'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import { firestoreService } from '../../../services/firebase'

const TaskSimpleForm = ({ taskList }) => {
  const { generateId } = firestoreService

  const taskData = {
    id: generateId('taskLists'),
    name: '',
    done: false,
  }

  const { createTask } = useStore()

  return (
    <div>
      <PlusOutlined style={{ marginRight: '5px', color: '#969094', fontSize: '18px' }} onClick={() => createTask(taskList, taskData)} />
    </div>
  )
}

export default TaskSimpleForm
