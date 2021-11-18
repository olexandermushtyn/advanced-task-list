import { FolderOpenFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const DefaultListAllItem = () => {
  const { store } = useStore()

  const getTaskCount = () => {
    let count = 0
    store.map(item => (count += item.tasks.notDone.length))
    return count
  }

  return (
    <div>
      <div style={{ cursor: 'pointer' }} className="default-list">
        <div className="default-list-item">
          <Button
            style={{ backgroundColor: '#5c6269', border: 'none', color: '#ffffff', cursor: 'default' }}
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
