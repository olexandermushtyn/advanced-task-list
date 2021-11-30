import { FolderOpenFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import { useNavigate } from 'react-router-dom'

const DefaultListAllItem = () => {
  const { store } = useStore()
  const navigate = useNavigate()

  const getTaskCount = () => {
    let count = 0
    store.map(item => (count += item.tasks.notDone.length + item.tasks.done.length))
    return count
  }

  return (
    <div>
      <div onClick={() => navigate('/all')} style={{ cursor: 'pointer' }} className="default-list">
        <div className="default-list-item">
          <Button
            style={{ backgroundColor: '#4A4A4A', border: 'none', color: '#ffffff', cursor: 'default' }}
            type="default"
            shape="circle"
            icon={<FolderOpenFilled />}
          />
          <p className="default-list-item-title">All</p>
        </div>
        <p className="default-list-item-number">{getTaskCount()}</p>
      </div>
    </div>
  )
}

export default DefaultListAllItem
