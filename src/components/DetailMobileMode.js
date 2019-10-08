import React from 'react';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
    title: {
        color: "#848484",
        fontSize: "14px",
        fontFamily: "sans-serif",
        textAlign: "center"
    },
    info: {
        textAlign: "center",
        fontSize: "23px",
        color: "#3c3738",
        fontWeight: "bolder"
    }
});


const DetailMobileMode = (props) => {

    const {classes} = props;
    const destinationDetails = props.destination;

    return (
        <div className={"mobile-mode"}>
            <div style={{height: "130px", position: "relative", top: "40px"}}>
                <div style={{marginBottom: "20px", textAlign: "center"}}>
                    <div style={{
                        paddingLeft: "3px",
                        fontWeight: "bold",
                        color: "#585858"
                    }}>
                        {destinationDetails.destionationInfo.localName}
                    </div>
                    <div style={{fontSize: "30px", fontWeight: "bold", color: "#3c3738"}}>
                        {destinationDetails.destionationInfo.destinationName}
                    </div>
                </div>
            </div>
            <Grid container style={{marginLeft: "20px"}}>
                <Grid item xs={5}>
                    <div style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "#1f1f1f"
                    }}>
                        Nickname
                    </div>
                    <p style={{
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        color: "#777676"
                    }}>
                        {destinationDetails.locationInfo.nickName}
                    </p>
                </Grid>
                <Grid item xs={7}>
                    <p style={{
                        float: "right",
                        paddingRight: "48px",
                        paddingTop: "22px",
                        fontSize: "14px",
                        color: "#777676"
                    }}>
                        {destinationDetails.locationInfo.temperature}
                    </p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <div className={classes.title}>
                        From
                    </div>
                    <p className={classes.info}>
                        {destinationDetails.destionationInfo.from}
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.title}>
                        To
                    </div>
                    <p className={classes.info}>
                        {destinationDetails.destionationInfo.to}
                    </p>
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                justify="center">
                {destinationDetails.images.map((image, i) =>
                    (i < 2) ? (<Grid>
                        <Card style={{marginBottom: "20px"}}>
                            <CardMedia
                                style={{height: "200px"}}
                                image={image}
                            />
                        </Card>
                    </Grid>) : "")}
            </Grid>
        </div>
    )
};

export default withStyles(styles)(DetailMobileMode);
