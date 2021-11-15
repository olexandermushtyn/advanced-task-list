import { Input, Button } from 'antd'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import nextId from 'react-id-generator'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import { useTaskActions } from '../hooks'

const TaskSimpleForm = ({ visible, taskList }) => {
  const [taskData, setTaskData] = useState({
    id: nextId(),
    name: '',
    done: false,
  })
  const [inputValue, setInputValue] = useState('')

  const { updateTaskList } = useStore()

  const { onChangeInput, onSubmitButtonClick } = useTaskActions(
    taskData,
    setTaskData,
    taskList,
    updateTaskList,
    setInputValue
  )

  return visible ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <div style={{ marginRight: '5px' }}>
        <Input
          value={inputValue}
          onChange={onChangeInput}
          placeholder="Enter task name"
        />
      </div>
      <div>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size={'small'}
          onClick={onSubmitButtonClick}
        />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default TaskSimpleForm
