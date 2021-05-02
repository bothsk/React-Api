import React from 'react'
import {Container,Grid,Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'



const useStyles = makeStyles(()=>({
    grid:{
        marginTop:'2%',
        display:'flex',
        height:'50vh',
        justifyContent:'center',
        alignItems:'center',
    }
}))

function Error() {

    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <Grid container className={classes.grid}>
            <Grid item xs={12} sm={10} md={6} xl={8}>
                <Typography variant="h1" >
                404 Not Found
                </Typography>
               
            </Grid>

            </Grid>
        </Container>
        
    )
}

export default Error
