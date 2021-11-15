import { Button } from 'antd'
import React from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const TaskEditBlock = ({ show, item, parent }) => {
  return show ? (
    <div style={{ marginLeft: '5px' }}>
      <div>
        <Button
          type="text"
          shape="circle"
          icon={<EditOutlined />}
          size={'small'}
        />
        <Button
          type="text"
          shape="circle"
          icon={<DeleteOutlined />}
          size={'small'}
        />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default TaskEditBlock
