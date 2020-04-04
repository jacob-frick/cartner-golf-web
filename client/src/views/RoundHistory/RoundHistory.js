import React from 'react'
import OuterNavbar from './../../components/OuterNavbar'
import { Redirect } from 'react-router-dom'
import Authorization from './../../utils/Authorization'
import Scorecard from '../../components/Scorecard'
const Friends = () => {
    const [authStatus, setAuth] = React.useState('NONE')


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
                <h1>Match History</h1>
                <Scorecard />
            </OuterNavbar>
        )
    } else if (authStatus === 'NO_AUTH') {
        return (<Redirect to='/' />)
    } else {
        return (<p></p>)
    }

}
export default Friends