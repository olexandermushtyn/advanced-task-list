import { Radio } from 'antd'
import { useState } from 'react'
import { TaskSimpleViewBody } from '.'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import { useSimpleViewActions } from '../hooks'

const TaskSimpleView = ({ item, parent, setCurrentSelectedTask, currentSelectedTask }) => {
  const { updateTask } = useStore()
  const [checked, setChecked] = useState(item.done)
  const [editedText, setEditedText] = useState(item.name)

  const { onCheckedChange } = useSimpleViewActions(
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
          <div>
            <Radio checked={checked} onClick={onCheckedChange} />
          </div>
        </div>
        <TaskSimpleViewBody
          currentSelectedTask={currentSelectedTask}
          setCurrentSelectedTask={setCurrentSelectedTask}
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
