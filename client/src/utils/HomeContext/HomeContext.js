import {createContext} from 'react'

const HomeContext = createContext({
  current: 'NONE',
  isNewAcc: false,
  setPageLogin: () => {},
  setPageCreateAccount: () => {},
  setPageDashboard: () => {}
})

export default HomeContext