import React, { useState, useEffect } from 'react'
import Login from './../Login'
import Dashboard from './../Dashboard'
import CreateAccount from './../CreateAccount'
import Authorization from './../../utils/Authorization'
import HomeContext from './../../utils/HomeContext'

const Home = () => {
  const [page, setPage] = useState({ current: 'NONE', isNewAcc: false })
  const [isAuth, setAuth] = useState(false)
  page.setPageLogin = () => setPage({ current: 'LOGIN' })
  page.setPageDashboard = (isNewAcc) => {
    let newAcc = false
    if(isNewAcc) {
      newAcc = isNewAcc
    }
    setPage({ current: 'DASHBOARD', isNewAcc: newAcc })
  }
  page.setPageCreateAccount = () => setPage({ current: 'CREATE_ACCOUNT' })

  useEffect( () => {
    if (page.current === 'NONE' && !isAuth) {
      Authorization.auth()
        .then(res => {
          if (res.status === 200) {
            setAuth(true)
            page.setPageDashboard()
          } else {
            page.setPageLogin()
          }
        })
    }
  }, [])

  if (page.current === 'LOGIN') {
    return (<HomeContext.Provider value={page}><Login /></HomeContext.Provider>)
  } else if (page.current === 'DASHBOARD') {
    return (<HomeContext.Provider value={page}><Dashboard></Dashboard></HomeContext.Provider>)
  } else if (page.current === 'CREATE_ACCOUNT') {
    return (<HomeContext.Provider value={page}><CreateAccount /></HomeContext.Provider>)
  } else {
    return (<p></p>)
  }
}
export default Home