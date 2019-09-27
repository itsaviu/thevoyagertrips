import React from 'react';
import {Close} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import details from "./detailsJson";

const styles = theme => ({
    title: {
        color: "#848484",
        fontSize: "14px",
        fontFamily: "sans-serif",
        textAlign: "center"
    },
    info: {
        textAlign: "center",
        fontSize: "28px",
        color: "#3c3738",
        fontWeight: "bolder"
    }
});


const DestinationDetails = (props) => {

    const {classes} = props;
    const toggleDetailsModal = () => {
        props.toggleDetailsModal();
    };

    let destinationDetails = details.find(d => d.id === props.detailId);

    return (
        <div className={"destination-container"}>
            <div className={"destination-details-content"}>
                <div className={"modal-close"}><Close className={"close-button"}
                                                      onClick={() => toggleDetailsModal()}/></div>
                <Grid container style={{height: "130px"}}>
                    <Grid item xs={3}>
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
                    </Grid>
                    <Grid item xs={2}>
                        <div className={classes.title}>
                            Visited Season
                        </div>
                        <p className={classes.info}>
                            {destinationDetails.destionationInfo.season}
                        </p>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={classes.title}>
                            Vacation Period
                        </div>
                        <p className={classes.info}>
                            {destinationDetails.destionationInfo.period} Days
                        </p>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={classes.title}>
                            From
                        </div>
                        <p className={classes.info}>
                            {destinationDetails.destionationInfo.from}
                        </p>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={classes.title}>
                            To
                        </div>
                        <p className={classes.info}>
                            {destinationDetails.destionationInfo.to}
                        </p>
                    </Grid>

                </Grid>
                <Grid container>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item xs={4}>
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
                            <Grid item xs={8}>
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
                        <a href={destinationDetails.locationInfo.moreInfo} target={"_blank"}
                           style={{textDecoration: "none"}}>
                            <Button variant="outlined" color="secondary"
                                    style={{
                                        position: "relative",
                                        bottom: "-44px",
                                        width: "200px"
                                    }}>
                                More Info
                            </Button>
                        </a>
                    </Grid>
                    {destinationDetails.images.map(image =>
                        (<Grid item xs={2}>
                            <Card style={{maxWidth: "220px"}}>
                                <CardMedia
                                    style={{height: "200px"}}
                                    image={image}
                                />
                            </Card>
                        </Grid>))}
                </Grid>
                <div style={{borderColor: "black"}}>

                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(DestinationDetails);
