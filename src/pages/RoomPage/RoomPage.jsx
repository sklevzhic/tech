import {Avatar, Card, Container, Grid, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Link, useParams} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {useEffect, useState} from "react";
import images from "../../components/global/images";
import Test from "../../components/Test/Test";

const layout = ["Системный блок", "Компьютер (комплект)", "Монитор", "Моноблок", "Ноутбук","Телевизор",  "Проектор","Принтер", "МФУ","Сканер","Ксерокс",
    "Акустическая система","Планшет","Веб-камера", "Мышь",  "Клавиатура", "Фотоаппарат", "Документ-камера", "Перфобиндер"]

const RoomPage = ({getTechnicsByRoom, technicsByRoom}) => {
    let {room} = useParams();
    const [technics, setTechnics] = useState("")
    useEffect(() => {
        async function getTechnics() {
            let response = await getTechnicsByRoom(room)
            return response
        }
        getTechnics().then(response => setTechnics(response))
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
                                                    <Avatar variant={"square"} src={images[technic.name]}></Avatar>
                                                </ListItemIcon>
                                                <ListItemText primary={technic.name} secondary={technic.type}/>
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
        <Grid container>
            <Test initialColumns={technics} />
        </Grid>
    </Container>
}

export default RoomPage