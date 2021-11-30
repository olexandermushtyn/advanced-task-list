import { FlagFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const DefaultListWithFlagItem = () => {
  const { store } = useStore()

  const getFlagItemsCount = () => {
    let flagItemsCount = 0
    store.map(item =>
      Object.values(item.tasks)
        .flat()
        .map(task => (task.flag ? flagItemsCount++ : null))
    )
    return flagItemsCount
  }

  return (
    <div>
      <div style={{ cursor: 'pointer' }} className="default-list">
        <div className="default-list-item">
          <Button
            style={{ backgroundColor: '#f2a23c', border: 'none' }}
            type="primary"
            shape="circle"
            icon={<FlagFilled />}
          />
          <p className="default-list-item-title">With flag</p>
        </div>
        <p className="default-list-item-number">{getFlagItemsCount()}</p>
      </div>
    </div>
  )
}

export default DefaultListWithFlagItem
