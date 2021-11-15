import { Checkbox } from 'antd'
import { useState } from 'react'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import TaskEditBlock from './TaskEditBlock'

const TaskSimpleView = ({ item, parent }) => {
  const { updateTask } = useStore()
  const [checked, setChecked] = useState(item.done)
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontSize: '18px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ marginRight: '5px' }}>
          <Checkbox
            checked={checked}
            onChange={() => {
              setChecked(!checked)
              const newTask = { ...item }
              newTask.done = !checked
              updateTask(parent, item, newTask)
            }}
          />
        </div>
        <p style={item.done ? { textDecoration: 'line-through' } : {}}>
          {item.name}
        </p>
        <TaskEditBlock show={hovered} item={item} parent={parent} />
      </div>
    </div>
  )
}

export default TaskSimpleView
