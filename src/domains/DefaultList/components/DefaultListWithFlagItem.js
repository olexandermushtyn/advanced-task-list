import { FlagFilled } from '@ant-design/icons'
import { Button } from 'antd'

const DefaultListWithFlagItem = () => {
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
        <p className="default-list-item-number">0</p>
      </div>
    </div>
  )
}

export default DefaultListWithFlagItem
