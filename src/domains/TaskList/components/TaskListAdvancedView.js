import { List } from '../../../componentns/'
import { TaskSimpleForm, TaskSimpleView } from '../../Task/components'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Empty } from 'antd'
import { useAdvancedViewStyles } from '../hooks'

const TaskListAdvancedView = ({ taskList, setTaskList }) => {
  const [visible, setVisible] = useState(false)
  const { wrapper, header, editBlock, editBlockButtons } = useAdvancedViewStyles()
  return taskList ? (
    <div style={wrapper}>
      <div style={header}>
        <h1 style={{ marginBottom: '0px' }}>{taskList.name}</h1>
        <h1 style={{ color: 'grey', marginBottom: '0px' }}>{taskList.tasks.length}</h1>
      </div>
      <List collection={taskList.tasks} parent={taskList} Item={TaskSimpleView} />
      <div style={editBlock}>
        <hr />
        <div style={editBlockButtons}>
          <PlusOutlined style={{ marginRight: '5px' }} onClick={() => setVisible(!visible)} />
          <TaskSimpleForm taskList={taskList} setTaskList={setTaskList} visible={visible} />
        </div>
      </div>
    </div>
  ) : (
    <Empty />
  )
}

export default TaskListAdvancedView
