const useSimpleViewStyles = () => {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid white',
    padding: '5px',
    color: 'white',
    margin: '10px 0px',
    borderRadius: '5px',
  }

  const titleStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
  }

  return { wrapperStyles, titleStyles }
}

export default useSimpleViewStyles
