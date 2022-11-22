import React from 'react';
//mui
import { Container, makeStyles, Typography, CardActions, Box, CardContent, CardMedia } from '@material-ui/core';
import Button from '@mui/material/Button';
import jumbo from '../assets/images/jumbo.jpg';
import jumbo2 from '../assets/images/jumbo2.jpg';
import { Grid } from '@mui/material';
import Copyright from '../components/Elements/Copyright';

//routes
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#3c81ba',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        padding: '0, 10px',
        marginBottom: 300,
        marginTop: 36,
    },
    title: {
        fontSize: '4rem',
        textAlign: 'center',
        color: 'white',
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
        },
    },
    text: {
        fontSize: '1.6rem',
        textAlign: 'center',
        color: '#f5f5f5',
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },
    },
    hero: {
        width: '50%',
        marginTop: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            width: '75%',
        },
    },
    img: {
        aspectRatio: 5 / 5,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    card: {
        backgroundColor: '#25706f',
        display: 'flex',
        flexDirection: 'column',
    },
    cardButtons: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e3d5d5',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    cardTitle: {
        color: '#ebede6',
        fontSize: '2.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
        },
    },
    cardText: {
        fontSize: '1.3rem',
        textAlign: 'center',
        color: 'black',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },
    },
    button: {
        backgroundColor: '#4a3518',
        padding: '15px',
        fontSize: '1rem',
    },
    buttonTitle: {
        color: 'white'
    }
}));

const picRandomizer = () => {
    if (Math.random() > 0.5) {
        return jumbo;
    } else {
        return jumbo2;
    }
}

function Homepage() {
    const classes = useStyles();
    return (

        <Container className={classes.container}>
            <Typography className={classes.title}>
            Depressika
            </Typography>
            <Grid spacing={10} container sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={4}>
                    <CardContent className={classes.card}>
                        <Typography className={classes.text} variant='body1'>
                            {/* Use Mental Health Check to check-in with yourself and how you're feeling. */}
                            In this modern developing society due to increasing competition, people are facing mental health issues like Anxiety disorders, Depression, Bipolar Disorder, and other mood disorders
                        </Typography>
                        <Typography className={classes.text} variant='body1'>
                            {/* Mental Health Check uses questions from mental illness screenings, but with Yes/No questions. */}
                            Due to these harmful effects, it is important to talk about it openly and need to get it cured. Early detection of depression by collecting opinions will become helpful. 
                        </Typography>
                        <Typography className={classes.text} variant='body1'>
                            {/* Instead of screening for a diagnosis, Mental Health Check uses those questions to help the user identify their feelings. */}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box >
                        <CardMedia className={classes.img}
                            component="img"
                            height="300"
                            image={picRandomizer()}
                            alt="therapy session"
                        />
                        <CardContent className={classes.card}>
                            <Typography className={classes.cardTitle} gutterBottom variant="h5" component="div">
                                Take the Mental Health Check
                            </Typography>
                            <Typography className={classes.cardText}>
                                Select from our question categories and begin taking your customized mental health check quiz!
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardButtons}>
                            {/* change buttons to reactroutes */}
                            <Button sx={{ backgroundColor: '#0a0909', borderColor: 'white', border: 1, fontSize: 30 }}>
                                <Link to='/quizselect' style={{ textDecoration: 'none' }} >
                                    <span className={classes.buttonTitle} >
                                        Go To quiz
                                    </span>
                                </Link>
                            </Button>
                            <Button sx={{ backgroundColor: '#0a0909', borderColor: 'white', border: 1, fontSize: 30 }}>
                                <Link to='/signup' style={{ textDecoration: 'none' }}>
                                    <span className={classes.buttonTitle}>
                                        Create An Account
                                    </span>
                                </Link>
                            </Button>
                        </CardActions>
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <Copyright sx={{ color: 'white', marginTop: '50px', fontSize: '20px' }} />
            </Box>
        </Container>

    )
}

export default Homepage;
