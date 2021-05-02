import { AppBar,Toolbar,Typography,Box } from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles} from '@material-ui/styles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    topright:{
       flexGrow:1
    },
    test:{
        padding:10,
    },
    box:{
       marginBottom:'20%'
    }
})




const Header =  ()=>{
    const classes = useStyles()


    return (
        <AppBar position="relative" className={classes.test}  >
        <Toolbar>
            <Typography className={classes.topright} >
                 <Link style={{textDecoration:'none',color:"white"}} to='/'> 
                This is a React & Nodejs Project
                </Link>
            </Typography>
        <Box >
            <Typography className={classes.box}>
            
            <Link style={{textDecoration:'none',color:"white"}} to='/login'> 
                Login
            </Link>    
            </Typography>
            <ShoppingCartIcon/>
        </Box>
            
        </Toolbar>
      </AppBar>
    )
}

export default Header