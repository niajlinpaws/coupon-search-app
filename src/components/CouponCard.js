/* Importing Package Dependencies */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* Building Style for 
   card, media, coupon, deal link 
*/
const useStyles = makeStyles({
    card: {
        position: "relative",
        padding: "16px",
        border: "1px solid rgba(0, 0, 0, 0.117647)",
        margin: "16px",
        textAlign: "center",
        minWidth: 200,
        maxWidth: 300,
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.117647)"
    },
    media: {
        height: 140,
        objectFit: "contain" 
    },
    coupon: {
        borderStyle: "dashed",
        margin: "16px",
        padding: "12px"
    },
    validity: {
        margin: "10px"
    },
    actions: {
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
    },
    link: {
        textDecoration: "none"
    }
});

/* CouponCard displays details like:
    - image
    - description
    - coupon code
    - offer validity
    - offer link
*/
export function CouponCard(props) {
    const classes = useStyles();
    const {
        image_url,
        campaign,
        title,
        coupon_code,
        url,
        end_date
    } = props.data;

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={image_url}
                title={campaign}
            />
            <CardContent>
                <Typography className={classes.coupon} gutterBottom variant="h5" component="h2">
                    {coupon_code || "NO COUPON REQUIRED"}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {title}
                </Typography>
                <Typography className={classes.validity} gutterBottom variant="h5" component="p">
                    Offer Ends: {new Date(end_date).toString().split(" ").slice(1,3).join(" ")}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <a className={classes.link} href={url} target="_blank" rel="noopener noreferrer">
                    <Button size="small" color="primary">
                        Get This Deal
                    </Button>
                </a>
            </CardActions>
        </Card>
    );
}