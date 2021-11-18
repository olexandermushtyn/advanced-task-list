import { Radio, Input } from 'antd'
import { useState } from 'react'
import { TaskSimpleViewBody } from '.'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import { useSimpleViewActions } from '../hooks'

const TaskSimpleView = ({ item, parent }) => {
  const { updateTask } = useStore()
  const [checked, setChecked] = useState(item.done)
  const [isEdited, setIsEdited] = useState(false)
  const [editedText, setEditedText] = useState(item.name)

  const { onCheckedChange, onInputTextChange } = useSimpleViewActions(
    checked,
    setChecked,
    updateTask,
    parent,
    item,
    setEditedText
  )

  return (
    <div style={{ fontSize: '18px', margin: '10px 0px', paddingLeft: '50px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          paddingBottom: '4px',
        }}>
        <div style={{ marginRight: '5px' }}>
          <div classNa="round">
            <Radio checked={checked} onClick={onCheckedChange} />
          </div>
        </div>
        <TaskSimpleViewBody
          item={item}
          parent={parent}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      </div>
    </div>
  )
}

export default TaskSimpleView
