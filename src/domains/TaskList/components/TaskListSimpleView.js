import { UnorderedListOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'
import { useSimpleViewActions, useSimpleViewStyles } from '../hooks'
import { useState, useEffect, useRef } from 'react'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const TaskListInput = styled(Input)`
  background-color: #4d4549;
  outline: none;
  border-color: #4d4549;
  color: white;
  --antd-wave-shadow-color: #4d4549;
  &:active {
    border-color: #4d4549;
    outline-color: #4d4549;
  }
  &:hover {
    border-color: #4d4549;
    outline-color: #4d4549;
    box-shadow: none;
  }
  &:focus {
    border-color: #4d4549;
    outline-color: #4d4549;
  }
  &:blur {
    border-color: #4d4549;
    outline-color: #4d4549;
  }
`

const TaskListSimpleView = ({ item, setCurrentItem, currentList }) => {
  const navigate = useNavigate()
  const { updateTaskList } = useStore()
  const { wrapperStyles, titleStyles } = useSimpleViewStyles()
  const [editedText, setEditedText] = useState(item.name)
  const { onConfirmButtonClick } = useSimpleViewActions(editedText, item, updateTaskList, setCurrentItem)

  const getTasks = () => item.tasks.done.length + item.tasks.notDone.length

  const inputRef = useRef()
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <div
      onClick={
        item.name !== ''
          ? () => {
              setCurrentItem(item)
              navigate('/')
            }
          : null
      }
      className="task-list"
      style={wrapperStyles}>
      <div style={{ ...titleStyles, width: '100%' }}>
        <Button type="primary" shape="circle" icon={<UnorderedListOutlined />} />
        {item.name !== '' ? (
          <div style={{ marginLeft: '10px' }}>{item.name}</div>
        ) : (
          <div style={{ marginLeft: '10px', width: '100%' }}>
            <TaskListInput
              ref={inputRef}
              style={{ backgroundColor: '#4D4549' }}
              placeholder="Enter task list name"
              onChange={e => setEditedText(e.currentTarget.value)}
              onKeyUp={onConfirmButtonClick}
            />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: '#9C9C9C', marginLeft: '15px' }}>{getTasks()}</div>
      </div>
    </div>
  )
}

export default TaskListSimpleView
