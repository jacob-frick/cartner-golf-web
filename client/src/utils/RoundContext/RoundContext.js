import { createContext } from 'react'

const HomeContext = createContext({
  memberContext: [],
  roundId: '',
  inputChange: () => {}
})

export default HomeContext