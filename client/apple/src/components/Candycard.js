import React from "react";
import PropTypes from 'prop-types'; //yarn add prop-types
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; //yarn add @material-ui/core
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 10,
        paddingTop: '56.25%', // 16:9
    },
});

class Candycard extends React.Component {
    render(){
        const { classes } = this.props;

        return (

            <Card className={classes.card}>
                <CardHeader
                    title="Candy Name"
                />

                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
                />

            </Card>
        );
    }
}

Candycard.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Candycard);
