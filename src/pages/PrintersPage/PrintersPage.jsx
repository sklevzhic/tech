import Typography from "@material-ui/core/Typography";
import {
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {useEffect, useState} from "react";

const PrintersPage = ({getAllRefills, getCurrentRefills, currentRefills, allRefills}) => {

    const changeCategory = (obj,el) => {
        console.log(obj,'=>',el)
    }
    useEffect(() => {
        getCurrentRefills()
        getAllRefills()
    }, [])
    const [refillsCurrent, setRefillsCurrent] = useState(currentRefills)
    console.log(currentRefills)
    return (
        <Container>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>


                {currentRefills.map(obj => {
                    return <div>
                        <Typography variant={"h6"}>{obj.name}</Typography>
                        <List dense>
                            {obj.arr.map(el => {
                                return <ListItem button>
                                    <ListItemText primary={"HP P1005 - 3 заправка за 2021 год"}
                                                  secondary={"Клевжиц А.Ю."}></ListItemText>
                                    <ListItemSecondaryAction><Button onClick={() => changeCategory(obj,el)}
                                                                     variant={"contained"}>=></Button></ListItemSecondaryAction>
                                </ListItem>
                            })}
                        </List>
                    </div>
                })
                }
            </div>
            <div>
                <Typography variant={"h6"}>Заправки последние</Typography>
                <Grid>
                    <Button variant={"contained"} color={"primary"}>
                        Добавить
                    </Button>
                    <Card>
                        <CardContent>
                            <Typography variant={"h6"}>16.08.2021</Typography>
                            <div>
                                <ListItem button><ListItemText primary={"HP P1005 [2]"}
                                                               secondary={"Клевжиц А.Ю."}></ListItemText></ListItem>
                                <ListItem button><ListItemText primary={"HP P1005 [2]"}
                                                               secondary={"Клевжиц А.Ю."}></ListItemText></ListItem>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography variant={"h6"}>12.08.2021</Typography>
                            <div>
                                <ListItem button><ListItemText primary={"HP P1005 [2]"}
                                                               secondary={"Клевжиц А.Ю."}></ListItemText></ListItem>
                                <ListItem button><ListItemText primary={"HP P1005 [2]"}
                                                               secondary={"Клевжиц А.Ю."}></ListItemText></ListItem>
                                <ListItem button><ListItemText primary={"HP P1005 [2]"}
                                                               secondary={"Клевжиц А.Ю."}></ListItemText></ListItem>
                                <ListItem button><ListItemText primary={"HP P1005 [2]"}
                                                               secondary={"Клевжиц А.Ю."}></ListItemText></ListItem>

                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </Container>
    )
}

export default PrintersPage