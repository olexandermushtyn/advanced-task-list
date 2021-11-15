import { List } from '../../../componentns/'
import { TaskSimpleForm, TaskSimpleView } from '../../Task/components'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'

const TaskListAdvancedView = ({ taskList, setTaskList }) => {
  const [visible, setVisible] = useState(false)
  return taskList ? (
    <div
      style={{
        display: 'flex 1',
        paddingLeft: '10px',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid black',
        }}>
        <h1 style={{ marginBottom: '0px' }}>{taskList.name}</h1>
        <h1 style={{ color: 'grey', marginBottom: '0px' }}>
          {taskList.tasks.length}
        </h1>
      </div>
      <List
        collection={taskList.tasks}
        parent={taskList}
        Item={TaskSimpleView}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          paddingRight: '5px',
        }}>
        <hr />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PlusOutlined
            style={{ marginRight: '5px' }}
            onClick={() => setVisible(!visible)}
          />
          <TaskSimpleForm
            taskList={taskList}
            setTaskList={setTaskList}
            visible={visible}
          />
        </div>
      </div>
    </div>
  ) : (
    <h1 style={{ paddingLeft: '10px' }}>Task list not selected</h1>
  )
}

export default TaskListAdvancedView
