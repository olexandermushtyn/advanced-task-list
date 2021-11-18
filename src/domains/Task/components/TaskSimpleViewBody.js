import { Input } from 'antd'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskSimpleViewBody = ({ item, editedText, setEditedText, parent }) => {
  const { updateTask } = useStore()

  const onConfirmButtonClick = event => {
    if (event.keyCode === 13) {
      const name = editedText
      const newItem = { ...item, name }
      updateTask(parent, item, newItem)
    }
  }

  return (
    <div style={{ color: '#dfddde', borderBottom: '1px solid #42393f', width: '100%' }}>
      {item.name !== '' ? (
        <div>{item.name}</div>
      ) : (
        <Input
          style={{ maxWidth: '30%', marginBottom: '10px' }}
          value={editedText}
          onChange={e => setEditedText(e.currentTarget.value)}
          onKeyUp={onConfirmButtonClick}
        />
      )}
    </div>
  )
}

export default TaskSimpleViewBody
