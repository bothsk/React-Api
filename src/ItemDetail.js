import axios from 'axios'
import {useEffect,useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Container, Grid} from '@material-ui/core'
import Error from './Error'

const useStyles = makeStyles({
    grid:{
        marginTop:'2%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    root: {
        height:'100%',
        width:'100%',
        display: 'flex',
        flexDirection:'column',
    },
    media: {
        paddingTop: '56.25%',
    },
    content: {
        flex:1
    }
  });

const ItemDetail = ({match})=>{



    const classes = useStyles();
    const id = match.params.id
    const [item,setItem] = useState({})
    const [cart,setCart] = useState(0)
    
    useEffect(()=>{
        fetchItem()
    },[])// eslint-disable-line react-hooks/exhaustive-deps

  
    const fetchItem = async ()=>{
        const itemData = await axios.get(`http://localhost:4000/api/shop/${id}`)
        const item = itemData.data.item
        setItem(item)
    }
    

    return (
        item ?  
        <Container maxWidth="lg">
            <Grid className={classes.grid} container spacing={0}>
                <Grid item xs={12} sm={10} md={6} xl={8}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://i.picsum.photos/id/553/600/400.jpg?hmac=_hORVHdFVbrqIV3TtcZYlECU2JsPNavheQnHk3J35VM"
                        title="xx"
                    />
                    <CardContent>
                        <Typography className={classes.content} gutterBottom variant="h5" component="h2" >
                        {item.name}
                        </Typography>
                        <Typography className={classes.content} variant="body2" color="textSecondary" component="p" >
                        {item.des}
                        </Typography>
                        <Typography className={classes.content} variant="caption" color="textSecondary" component="p" >
                        ฿{item.price}
                        </Typography>
                        <Typography className={classes.content} variant="caption" color="textSecondary" component="p" >
                        {item.qty} pcs
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" onClick={()=>setCart(cart+1)}>
                        <AddShoppingCartIcon/> Add to Cart
                    </Button>
                    <Button size="small" color="primary" >
                        <AddShoppingCartIcon/> {cart}
                    </Button>
                    </CardActions>
                </Card>

                </Grid>
            </Grid>
            </Container>
        : <Error />
    )
}

export default ItemDetail







