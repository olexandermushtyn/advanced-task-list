import { useState } from 'react'

const useCurrentList = () => {
  const [currentList, setCurrentList] = useState()
  return { currentList, setCurrentList }
}

export default useCurrentList
