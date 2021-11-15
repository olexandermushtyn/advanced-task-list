import { Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'
import nextId from 'react-id-generator'
import { useTaskListFormActions } from '../hooks'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const AddTaskInput = ({ visible }) => {
  const { createTaskList } = useStore()
  const [inputValue, setInputValue] = useState('')

  const [taskListData, setTaskListData] = useState({
    id: nextId(),
    name: '',
    tasks: [],
  })

  const { onInputChange, onApplyButtonClick } = useTaskListFormActions(
    taskListData,
    setTaskListData,
    createTaskList,
    setInputValue
  )

  return visible ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={{ width: '100%' }}>
        <Input value={inputValue} onChange={onInputChange} placeholder="Enter tasks list name" />
      </div>
      <div style={{ marginLeft: '5px' }}>
        <Button type="primary" shape="circle" icon={<PlusOutlined />} size={'small'} onClick={onApplyButtonClick} />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default AddTaskInput
