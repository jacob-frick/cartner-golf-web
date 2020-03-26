import React from 'react'

export default function Dashboard() {
    const getIdQuery = () => {
        let search = window.location.search
        let params = new URLSearchParams(search)
        let id = params.get('id')
        return id
      }
    return (
        <h1>Dashboard: {getIdQuery()}</h1>
    )
}
