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
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

class Candycard extends React.Component {
    render(){
        const { classes } = this.props;

        return (

            <Card className={classes.card}>
                <CardHeader
                    title="Candy"
                />
                <CardMedia
                    className={classes.media}
                    image="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwig4aPxwdrhAhU1On0KHdwbCa8QjRx6BAgBEAU&url=https%3A%2F%2Funsplash.com%2Fsearch%2Fphotos%2Fcats&psig=AOvVaw0a3tSEhBNtuZn9_POOVD9L&ust=1555706879088953"
                />
            </Card>
        );
    }
}

Candycard.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Candycard);
