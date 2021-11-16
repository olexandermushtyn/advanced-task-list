const itemStyles = { display: 'flex', flexDirection: 'column', minWidth: '100%' }

const List = ({ collection, Item, setCurrentItem, parent }) => {
  return collection?.length !== 0 ? (
    <div style={itemStyles}>
      {collection.map((item, index) => (
        <Item key={index} item={item} parent={parent} setCurrentItem={setCurrentItem} />
      ))}
    </div>
  ) : (
    <h2 style={{ color: '#BDBDBD' }}>List is empty</h2>
  )
}

export default List
