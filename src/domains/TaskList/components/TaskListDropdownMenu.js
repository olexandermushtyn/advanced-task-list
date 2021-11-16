import { Menu, message } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskListDropdownMenu = ({ item, setIsEdited, setCurrentItem }) => {
  const { deleteTaskList } = useStore()

  return (
    <div>
      <Menu style={{ fontSize: '12px' }}>
        <Menu.Item key="1" onClick={() => setIsEdited(true)} icon={<EditOutlined />}>
          Edit
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => {
            deleteTaskList(item)
            setCurrentItem(undefined)
            message.success('Task list successfully deleted')
          }}
          icon={<DeleteOutlined />}>
          Delete
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default TaskListDropdownMenu
