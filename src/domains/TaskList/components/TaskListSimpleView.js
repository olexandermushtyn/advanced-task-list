import { UnorderedListOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'
import { useSimpleViewActions, useSimpleViewStyles } from '../hooks'
import { useState } from 'react'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskListSimpleView = ({ item, setCurrentItem }) => {
  const { updateTaskList } = useStore()
  const { wrapperStyles, titleStyles } = useSimpleViewStyles()
  const [editedText, setEditedText] = useState(item.name)
  const { onConfirmButtonClick } = useSimpleViewActions(editedText, item, updateTaskList, setCurrentItem)

  const getTasks = () => item.tasks.done.length + item.tasks.notDone.length

  return (
    <div
      onClick={item.name !== '' ? () => setCurrentItem(item) : null}
      className="task-list"
      style={wrapperStyles}>
      <div style={{ ...titleStyles, width: '100%' }}>
        <Button type="primary" shape="circle" icon={<UnorderedListOutlined />} />
        {item.name !== '' ? (
          <div style={{ marginLeft: '10px' }}>{item.name}</div>
        ) : (
          <div style={{ marginLeft: '10px', width: '100%' }}>
            <Input
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
