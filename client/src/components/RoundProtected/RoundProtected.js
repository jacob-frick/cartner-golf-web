import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Authorization from './../../utils/Authorization'
const RoundProtected = (props) => {
  const [authStatus, setAuth] = React.useState('NONE')

  useEffect(() => {
    if (authStatus === 'NONE') {
      Authorization.authRound(props.rid)
        .then(res => {
          if (res.status === 200) {
            setAuth('AUTH')
          } else {
            setAuth('NO_AUTH')
          }
        })
    }
  }, [authStatus])
  if (authStatus === 'NO_AUTH') {
    return (<Redirect to='/' />)
  } else if (authStatus === 'AUTH') {
    return (
      <>
        {props.children}
      </>
    )
  } else {
    return(<div></div>)
  }
}
export default RoundProtected