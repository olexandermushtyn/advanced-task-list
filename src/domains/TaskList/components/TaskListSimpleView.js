import { UnorderedListOutlined } from '@ant-design/icons'

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid white',
  padding: '5px',
  color: 'white',
  margin: '10px 0px',
  cursor: 'pointer',
  borderRadius: '5px',
}

const TaskListSimpleView = ({ item, setCurrentItem }) => {
  return (
    <div style={styles} onClick={() => setCurrentItem(item)}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <UnorderedListOutlined style={{ color: 'white' }} />
        <div style={{ color: 'white', marginLeft: '5px' }}>{item.name}</div>
      </div>
      <div style={{ color: '#9C9C9C', marginLeft: '15px' }}>{item.tasks?.length}</div>
    </div>
  )
}

export default TaskListSimpleView
