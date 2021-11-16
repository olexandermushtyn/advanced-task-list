import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { AddTaskInput } from '.'

const TaskListSimpleForm = ({ setTaskLists }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <div>
        <AddTaskInput visible={visible} setTaskLists={setTaskLists} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: '10px',
        }}>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          size={'medium'}
          onClick={() => setVisible(!visible)}>
          Add task list
        </Button>
      </div>
    </div>
  )
}

export default TaskListSimpleForm
