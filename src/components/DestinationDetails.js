import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import {Close} from "@material-ui/icons";
import VagamonEb from "../image/vagamon-eb.jpg";
import VagamonHouse from "../image/vagamon-house.jpg";
import VagamonMistyHill from "../image/vagamon-misty-hill.jpg";
import VagamonPlains from "../image/vagamon-plains.jpg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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

    const images = [VagamonEb, VagamonHouse, VagamonMistyHill, VagamonPlains];

    return (
        <CSSTransition
            in={props.showDetailsPage}
            timeout={300}
            classNames="destination-modal"
            unmountOnExit
        >
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
                                വാഗമൺ
                            </div>
                            <div style={{fontSize: "30px", fontWeight: "bold", color: "#3c3738"}}>
                                Vagamon
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div className={classes.title}>
                                Visited Season
                            </div>
                            <p className={classes.info}>
                                Monsoon
                            </p>
                        </Grid>
                        <Grid item xs={2}>
                            <div className={classes.title}>
                                Vacation Period
                            </div>
                            <p className={classes.info}>
                                2 Days
                            </p>
                        </Grid>
                        <Grid item xs={2}>
                            <div className={classes.title}>
                                From
                            </div>
                            <p className={classes.info}>
                                Sep 7, 2019
                            </p>
                        </Grid>
                        <Grid item xs={2}>
                            <div className={classes.title}>
                                To
                            </div>
                            <p className={classes.info}>
                                Sep 9, 2019
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
                                        The Scotland of Asia
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
                                        19° C Cold
                                    </p>
                                </Grid>
                            </Grid>
                            <a href={"https://en.wikipedia.org/wiki/Vagamon"} target={"_blank"} style={{ textDecoration: "none"}}>
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
                        {images.map(image =>
                            (<Grid item xs={2}>
                                <Card style={{maxWidth: "220px"}}>
                                    <CardMedia
                                        style={{height: "200px"}}
                                        image={image}
                                    />
                                </Card>
                            </Grid>))}
                    </Grid>
                </div>
            </div>
        </CSSTransition>
    );
};

export default withStyles(styles)(DestinationDetails);
