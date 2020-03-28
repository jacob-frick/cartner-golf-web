import {createContext} from 'react'

const HomeContext = createContext({
  current: 'NONE',
  setPageLogin: () => {},
  setPageCreateAccount: () => {},
  setPageDashboard: () => {}
})

export default HomeContext