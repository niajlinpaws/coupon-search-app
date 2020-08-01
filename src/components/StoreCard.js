/* Importing Package Dependencies */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* Building Style for 
  card & coupon detail link 
*/
const useStyles = makeStyles({
  card: {
    position: "relative",
    padding: "16px",
    border: "1px solid rgba(0, 0, 0, 0.117647)",
    margin: "16px",
    textAlign: "center",
    minWidth: 200,
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.117647)"
  },
  actions: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center"
  }
});

/* StoreCard displays details like:
  - name
  - view coupons link
*/
export function StoreCard(props) {
  const classes = useStyles();
  const { name, getCoupons } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={() => getCoupons(name)} size="small" color="primary">
          View Coupons
        </Button>
      </CardActions>
    </Card>
  );
}