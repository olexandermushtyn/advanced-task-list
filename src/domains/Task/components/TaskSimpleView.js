import { Checkbox, Input } from 'antd'
import { useState } from 'react'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import TaskEditBlock from './TaskEditBlock'

const TaskSimpleView = ({ item, parent }) => {
  const { updateTask } = useStore()
  const [checked, setChecked] = useState(item.done)
  const [hovered, setHovered] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const [editedText, setEditedText] = useState(item.name)

  const onCheckedChange = () => {
    setChecked(!checked)
    const newTask = { ...item }
    newTask.done = !checked
    updateTask(parent, item, newTask)
  }

  const onInputTextChange = e => {
    setEditedText(e.currentTarget.value)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontSize: '18px', margin: '10px 0px', paddingLeft: '50px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          borderBottom: '1px solid grey',
        }}>
        <div style={{ marginRight: '5px' }}>
          <Checkbox checked={checked} onChange={onCheckedChange} />
        </div>
        {isEdited ? (
          <Input
            style={{ maxWidth: '500px' }}
            value={editedText}
            placeholder="Input task name"
            onChange={onInputTextChange}
          />
        ) : (
          <div style={item.done ? { textDecoration: 'line-through', marginBottom: '1px' } : {}}>{item.name}</div>
        )}

        <TaskEditBlock
          isEdited={isEdited}
          editTask={setIsEdited}
          show={hovered}
          item={item}
          parent={parent}
          editedText={editedText}
        />
      </div>
    </div>
  )
}

export default TaskSimpleView
