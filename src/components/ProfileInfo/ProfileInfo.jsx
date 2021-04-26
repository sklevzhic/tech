import {
    Avatar, Button,
    Divider,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";

import s from "./ProfileInfo.module.css";
import IconButton from "@material-ui/core/IconButton";

const Profile = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Avatar
                    style={{height: '400px', width: '100%'}}
                    src={"https://cropas.by/wp-content/uploads/2015/05/admin.jpg"}
                    variant="circle"
                    sizes={500}

                />
            </Grid>
            <Grid item xs>
                <div className={s.inline}>
                    <Typography
                        variant="h5"
                        component="h3"
                        noWrap="true"
                    >Alexander Klevzhits </Typography>
                    <Button variant="outlined">Редактировать профиль</Button>
                </div>

                <Typography
                    variant="body2"
                    component="p"
                    gutterBottom
                    noWrap="true"
                >
                    Установить статус
                </Typography>
                <div className={`${s.inline} ${s.center}  ${s.margin10}`} >
                    <Button variant="outlined" href="#text-buttons" color="primary">
                        <span>25 </span> Online
                    </Button>
                    <Button variant="outlined" href="#text-buttons" color="primary">
                        <span>25 </span> Subscribe
                    </Button>
                    <Button variant="outlined" href="#text-buttons" color="primary">
                        <span>25 </span> Subscribe
                    </Button>
                </div>


                <Typography
                    variant="h6"
                    component="p"
                    gutterBottom
                    noWrap="true"
                >About me </Typography>
                <Divider/>

                <div className={s.inline}>
                    <Typography
                        variant="h6"
                        component="p"
                        gutterBottom
                        noWrap="true"
                    >Контакты:  </Typography>
                    <IconButton
                        aria-label="delete"
                        colicolorPrimary
                    >
                        vk
                    </IconButton>
                    <IconButton aria-label="delete">
                        vk
                    </IconButton>
                    <IconButton aria-label="delete">
                        vk
                    </IconButton>
                    <IconButton aria-label="delete">
                        vk
                    </IconButton>
                    <IconButton aria-label="delete">
                        vk
                    </IconButton>
                </div>
                <Divider/>
                <Typography
                    variant="body1"
                    component="p"
                    gutterBottom
                    noWrap="true"
                >Поиск работы </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    gutterBottom
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>

            </Grid>
        </Grid>
    )
}
export default Profile