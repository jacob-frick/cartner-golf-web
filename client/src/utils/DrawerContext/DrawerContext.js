import {createContext} from 'react'

const DrawerContext = createContext({
  open: true,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {}
})

export default DrawerContext