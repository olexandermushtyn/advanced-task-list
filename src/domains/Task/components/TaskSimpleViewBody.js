import { useStore } from '../../../contexts/TaskListContext/hooks'
import { useState, useRef, useEffect } from 'react'
import { TaskAdditionalBlock, TaskEditForm } from '.'
import useTitleActions from '../hooks/useTitleActions'
import { FlagOutlined } from '@ant-design/icons'

const TaskSimpleViewBody = ({ item, editedText, setEditedText, parent, setCurrentSelectedTask, currentSelectedTask }) => {
  const { updateTask } = useStore()
  const [isEdited, setIsEdited] = useState(false)
  const inputRef = useRef(null)

  const { onConfirmButtonClick, onTaskNameClick } = useTitleActions(
    editedText,
    isEdited,
    setIsEdited,
    item,
    parent,
    updateTask,
    setCurrentSelectedTask
  )

  useEffect(() => {
    if (currentSelectedTask?.id !== item.id && currentSelectedTask?.name !== '') setIsEdited(false)
  }, [currentSelectedTask, item.id])

  useEffect(() => {
    const action = setCurrentSelectedTask(item) || null
  }, [])

  useEffect(() => {
    if (item.name === '') setIsEdited(true)
  }, [item])

  return (
    <div style={{ color: '#dfddde', borderBottom: '1px solid #42393f', width: '100%' }}>
      {isEdited ? (
        <>
          <TaskEditForm
            editedText={editedText}
            setEditedText={setEditedText}
            onEnterPress={onConfirmButtonClick}
            reference={inputRef}
            item={item}
            currentSelectedTask={currentSelectedTask}
            setCurrentSelectedTask={setCurrentSelectedTask}
          />
          <TaskAdditionalBlock item={item} parent={parent} />
        </>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <div onClick={onTaskNameClick}>{item.name}</div>
          {item?.flag ? (
            <div>
              <FlagOutlined style={{ color: '#f2a23c', paddingRight: '15px' }} />
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  )
}

export default TaskSimpleViewBody
