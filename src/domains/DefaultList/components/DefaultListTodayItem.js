import { CalendarFilled } from '@ant-design/icons'
import { Button } from 'antd'

const DefaultListTodayItem = ({ name }) => {
  return (
    <div>
      <div style={{ cursor: 'pointer' }} className="default-list">
        <div className="default-list-item">
          <Button type="primary" shape="circle" icon={<CalendarFilled />} />
          <p className="default-list-item-title">Today</p>
        </div>
        <p className="default-list-item-number">0</p>
      </div>
    </div>
  )
}

export default DefaultListTodayItem
