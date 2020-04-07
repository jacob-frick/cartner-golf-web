import {createContext} from 'react'

const DrawerContext = createContext({
  open: true,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
  handleDashboardOpen: () => {},
  handleDashboarClose: () => {}
})

export default DrawerContext