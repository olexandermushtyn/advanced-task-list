import { Col } from 'antd'
import { TaskList, TaskListAdvancedView } from '.'
import { DefaultListAll, DefaultLists } from '../../DefaultList/components'
import { useCurrentList } from '../hooks'
import { useStore } from '../../../contexts/TaskListContext/hooks'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { SearchInput } from '../../../componentns/Search'
import { SearchOutlined } from '@ant-design/icons'

const TaskListLayout = () => {
  const { currentList, setCurrentList } = useCurrentList()
  const { store, fetchDocuments } = useStore()

  useEffect(() => {
    fetchDocuments()
  }, [])

  return (
    <div style={{ height: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <Col cw={12} span={6} style={{ backgroundColor: '#4D4549', width: '100%', padding: '20px' }}>
          <SearchInput prefix={<SearchOutlined />} />
          <DefaultLists />
          <TaskList taskLists={store} currentList={currentList} setCurrentList={setCurrentList} />
        </Col>
        <Col cw={12} span={18} style={{ backgroundColor: '#2F222A', height: '100%' }}>
          <Routes>
            <Route exact path="/" element={<TaskListAdvancedView taskList={currentList} />} />
            <Route exact path="/all" element={<DefaultListAll />} />
          </Routes>
        </Col>
      </div>
    </div>
  )
}

export default TaskListLayout
