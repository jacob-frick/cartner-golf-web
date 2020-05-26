import React, { useState } from 'react'
import OuterNavbar from './../../components/OuterNavbar'
import SearchBar from './../../components/SearchBar'
import Grid from '@material-ui/core/Grid'
import FriendsDisplay from '../../components/FriendsDisplay'
import RecReqDisplay from '../../components/RecReqDisplay'
import SentReqDisplay from '../../components/SentReqDisplay'
import Protected from './../../components/Protected'
import FriendsContext from '../../utils/FriendsContext'


const Friends = () => {
    const [friendState, setFriendState] = useState({
        friends: [],
        hasFriends: '',
        status: '',
        sentRequests: [],
        hasRequests: '',
        statusSent: ''
    })
    friendState.updateFriends = (hasFriends, friends) => {
        setFriendState({ ...friendState, hasFriends: hasFriends, friends: friends })
    }

    friendState.updateStatus = value => setFriendState({ ...friendState, status: value })

    friendState.updateSentRequests = (hasRequests, requests) => setFriendState({ ...friendState, hasRequests: hasRequests, sentRequests: requests })

    friendState.udpateStatusSent = value => setFriendState({ ...friendState, statusSent: value })

    return (
        <Protected>
            <OuterNavbar head="Friends">
                <FriendsContext.Provider value={friendState}>
                    <SearchBar />
                    <Grid container spacing={1}>
                        <Grid
                            item md={6} xs={12}
                            className='nameFix'>
                            <h1>Friends List</h1>
                            <FriendsDisplay />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Grid item xs={12}>
                                <h1>Pending Request</h1>
                                <RecReqDisplay />
                            </Grid>
                            <Grid item xs={12}>
                                <h1>Sent Requests</h1>
                                <SentReqDisplay />
                            </Grid>
                        </Grid>
                    </Grid>
                </FriendsContext.Provider>
            </OuterNavbar>
        </Protected>
    )

}
export default Friends