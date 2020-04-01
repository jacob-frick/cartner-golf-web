import React from 'react'
import OuterNavbar from './../../components/OuterNavbar'
import SearchBar from './../../components/SearchBar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const Friends = () => {

    return (
        <OuterNavbar>
            <SearchBar />
            <Container>
                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        <h1>Friends List</h1>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Container>
                            <Grid item xs={12}>
                                <h1>Pending Request</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <h1>Sent Requests</h1>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </OuterNavbar>
      )
}
export default Friends