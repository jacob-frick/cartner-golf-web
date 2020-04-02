import React, {useState, useEffect} from 'react'
import OuterNavbar from './../../components/OuterNavbar'
import SearchBar from './../../components/SearchBar'
import Grid from '@material-ui/core/Grid'
import FriendsDisplay from '../../components/FriendsDisplay'
import RecReqDisplay from '../../components/RecReqDisplay'
import SentReqDisplay from '../../components/SentReqDisplay'
import { Redirect } from 'react-router-dom'
import Authorization from './../../utils/Authorization'
import FriendsContext from '../../utils/FriendsContext'
const Friends = () => {
    const [authStatus, setAuth] = useState('NONE')

    const [friendState, setFriendState] = useState({
        friends: [],
        hasRequested: '',
        status: ''
    })
    friendState.updateFriends = (hasRequested, friends) => setFriendState({...friendState, hasRequested: hasRequested, friends: friends})
    friendState.updateStatus = value => setFriendState({...friendState, status: value})
    
    if (authStatus === 'NONE') {
        Authorization.auth()
            .then(res => {
                if (res.status === 200) {
                    setAuth('AUTH')
                } else {
                    setAuth('NO_AUTH')
                }
            })
    }

    if (authStatus === 'AUTH') {
        return (
            <OuterNavbar>
                <FriendsContext.Provider value = {friendState}>
                <SearchBar />
                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
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
        )
    } else if (authStatus === 'NO_AUTH') {
        return (<Redirect to='/' />)
    } else {
        return (<p></p>)
    }

}
export default Friends