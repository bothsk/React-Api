import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    height:'100%',
    display: 'flex',
    flexDirection:'column'
  },
  media: {
    paddingTop: '56.25%',
  },
  removeLink:{
    textDecoration:'none',
    color:'black'
  }
});

export default function MediaCard({id,name,des}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link className={classes.removeLink} to={id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.picsum.photos/id/553/600/400.jpg?hmac=_hORVHdFVbrqIV3TtcZYlECU2JsPNavheQnHk3J35VM"
          title="xx"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
