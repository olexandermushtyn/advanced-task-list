import { UnorderedListOutlined, DownOutlined, CheckOutlined } from '@ant-design/icons'
import { Dropdown, Input } from 'antd'
import { TaskListDropdownMenu } from '.'
import { useSimpleViewActions, useSimpleViewStyles } from '../hooks'
import { useState } from 'react'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskListSimpleView = ({ item, setCurrentItem }) => {
  const { updateTaskList } = useStore()
  const { wrapperStyles, titleStyles } = useSimpleViewStyles()
  const [isEdited, setIsEdited] = useState(false)
  const [editedText, setEditedText] = useState(item.name)
  const { onConfirmButtonClick } = useSimpleViewActions(
    editedText,
    item,
    updateTaskList,
    setIsEdited,
    setCurrentItem
  )

  return (
    <div className="task-list" style={wrapperStyles}>
      {isEdited ? (
        <>
          <Input value={editedText} onChange={e => setEditedText(e.currentTarget.value)} />
          <CheckOutlined onClick={onConfirmButtonClick} style={{ marginLeft: '5px' }} />
        </>
      ) : (
        <>
          <div style={titleStyles}>
            <UnorderedListOutlined style={{ color: 'white' }} />
            <div onClick={() => setCurrentItem(item)} style={{ marginLeft: '5px' }}>
              {item.name}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Dropdown
              overlay={
                <TaskListDropdownMenu setIsEdited={setIsEdited} item={item} setCurrentItem={setCurrentItem} />
              }
              style={{ color: 'white' }}>
              <DownOutlined />
            </Dropdown>
            <div style={{ color: '#9C9C9C', marginLeft: '15px' }}>{item.tasks?.length}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskListSimpleView
