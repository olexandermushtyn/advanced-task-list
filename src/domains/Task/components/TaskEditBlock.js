import { Button, message } from 'antd'
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskEditBlock = ({ show, item, parent, isEdited, editTask, editedText }) => {
  const { deleteTask, updateTask } = useStore()

  const onConfirmButtonClick = () => {
    const name = editedText
    const newTask = { ...item, name }
    updateTask(parent, item, newTask)
    editTask(!isEdited)
  }

  return show ? (
    <div style={{ marginLeft: '5px' }}>
      <div>
        {isEdited ? (
          <Button
            type="text"
            shape="circle"
            icon={<CheckOutlined />}
            size={'small'}
            onClick={onConfirmButtonClick}
          />
        ) : (
          <Button
            type="text"
            shape="circle"
            icon={<EditOutlined />}
            size={'small'}
            onClick={() => editTask(!isEdited)}
          />
        )}
        <Button
          type="text"
          shape="circle"
          icon={<DeleteOutlined />}
          size={'small'}
          onClick={() => {
            deleteTask(parent, item)
            message.success('Task successfully deleted')
          }}
        />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default TaskEditBlock
