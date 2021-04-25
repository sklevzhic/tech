import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Container,
    Divider,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";
import s from './ProfilePage.module.css'

const ProfilePage = () => {
    return (
        <Container
            className={s.bg}
        >
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Avatar
                        style={{ height: '400px', width: '100%' }}
                        src={"https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/600x380"}
                        variant="square"
                        sizes={500}
                    />
                     {/*<Paper className={s.paper}>xs</Paper>*/}
                </Grid>
                <Grid item xs>

                    <Paper className={s.paper}>
                        <Typography
                            variant="h5"
                            component="h3"
                            noWrap="true"
                        >Alexander Klevzhits </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            gutterBottom
                            noWrap="true"
                        >Установить статус </Typography>
                        <Divider />
                        <Accordion>
                            <AccordionSummary
                                // expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography >Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProfilePage

