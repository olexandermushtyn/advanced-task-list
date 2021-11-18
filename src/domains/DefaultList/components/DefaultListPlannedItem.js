import { Button } from 'antd'
import { CalendarFilled } from '@ant-design/icons'

const DefaultListPlannedItem = () => {
  return (
    <div>
      <div style={{ cursor: 'pointer' }} className="default-list">
        <div className="default-list-item">
          <Button type="primary" danger shape="circle" icon={<CalendarFilled />} />
          <p className="default-list-item-title">Planned</p>
        </div>
        <p className="default-list-item-number">0</p>
      </div>
    </div>
  )
}

export default DefaultListPlannedItem
