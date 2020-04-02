import { createContext } from 'react'

const FriendsContext = createContext({
  friends: [],
  hasRequested: '',
  status: '',
  updateFriends: () => {},
  updateStatus: () => {}
})

export default FriendsContext