import {Avatar, Card, Container, Grid, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Link, useParams} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {useEffect} from "react";
import images from "../../components/global/images";

const layout = ["Системный блок", "Компьютер (комплект)", "Монитор", "Моноблок", "Ноутбук", "Принтер", "МФУ","Сканер","Ксерокс",
    "Акустическая система","Планшет","Веб-камера", "Мышь",  "Клавиатура", "Проектор", "Фотоаппарат", "Документ-камера", "Перфобиндер"]

const RoomPage = ({getTechnicsByRoom, technicsByRoom}) => {
    let {room} = useParams();

    useEffect(() => {
        getTechnicsByRoom(room)
    }, [])
    return <Container>
        <Grid container>
            <Grid item xs={12}>
                <Typography>Перечень техники кабинета {room}</Typography>

            </Grid>
            <Grid item xs={12} style={{display: "flex",justifyContent: "space-around", flexWrap: "wrap"}}>

                {technicsByRoom.map(obj => {
                    return <Card style={{maxWidth: "300px", minWidth: "300px", marginTop: "15px"}}>
                        {obj.user}
                        <List>
                            {
                                layout.map(el => {
                                   return  obj.properties.map(technic => {
                                        if (el === technic.type) {
                                            return <ListItem component={Link} to={`/technics/${technic.id}`}>
                                                <ListItemIcon>
                                                    <Avatar src={images[technic.name]}></Avatar>
                                                </ListItemIcon>
                                                <ListItemText primary={technic.name} />
                                            </ListItem>
                                        }
                                    })
                                })
                            }
                        </List>

                    </Card>
                })}

            </Grid>
        </Grid>
    </Container>
}

export default RoomPage