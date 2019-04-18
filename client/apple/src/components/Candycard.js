import React from "react";
import PropTypes from 'prop-types'; //yarn add prop-types
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; //yarn add @material-ui/core
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    title: {

    },
    media: {
        height: 10,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        paddingLeft: 150,
    },
});



class Candycard extends React.Component {
    render(){
        const { classes } = this.props;

        return (

            <Card className={classes.card}>
                <CardHeader className={classes.title}
                    title="Candy Name"
                />

                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
                />

                <CardActions className={classes.actions} >
                    <Button href="https://www.google.com" size="small" color="primary">
                        Buy
                    </Button>
                </CardActions>

            </Card>
        );
    }
}

Candycard.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Candycard);
