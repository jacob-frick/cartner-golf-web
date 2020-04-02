import { createContext } from 'react'

const FriendsContext = createContext({
  friends: [],
  hasFriends: '',
  status: '',
  sentRequests: [],
  hasRequests: '',
  statusSent: '',
  updateFriends: () => {},
  updateStatus: () => {},
  updateSentRequests: () => {},
  udpateStatusSent: () => {}
})

export default FriendsContext