import React from 'react'

const SearchBar = () => {
    return (
        <DrawerContext.Provider value={open}>
          <div className={classes.root}>
            <CssBaseline />
            <Appbar />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  {/* Page Info goes here */}
                  
                </Grid>
              </Container>
            </main>
          </div>
        </DrawerContext.Provider>
      )
}

export default SearchBar