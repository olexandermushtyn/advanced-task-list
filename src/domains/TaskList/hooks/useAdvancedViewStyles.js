const useAdvancedViewStyles = () => {
  const wrapper = {
    display: 'flex 1',
    padding: '0px 10px',
  }
  const header = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',
  }

  const editBlock = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: '5px',
  }

  const editBlockButtons = { display: 'flex', alignItems: 'center' }

  return { wrapper, header, editBlock, editBlockButtons }
}

export default useAdvancedViewStyles
