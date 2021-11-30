import { FlagOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskAdditionalBlock = ({ item, parent }) => {
  const { updateTask } = useStore()
  const [flag, setFlag] = useState(item?.flag || false)

  const getFlagColor = () => (flag ? '#f2a23c' : '#a49fa2')
  const setItemFlag = () => {
    const newItem = { ...item }
    newItem.flag = !flag
    updateTask(parent, item, newItem)
    setFlag(!flag)
  }

  return (
    <div
      style={{
        marginBottom: '4px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
      }}>
      <div
        onClick={setItemFlag}
        style={{
          backgroundColor: '#362c32',
          padding: '0px 6px',
          color: getFlagColor(),
          borderRadius: '10px',
          cursor: 'pointer',
        }}>
        <FlagOutlined />
      </div>
    </div>
  )
}

export default TaskAdditionalBlock
