import React, {useEffect} from "react";

import {Link, withRouter} from "react-router-dom";
import {
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import Technics from "../../components/Technics";

const TechicsPage = ({getTypes, technics, types}) => {
    useEffect(() => {
        getTypes()
    }, [])
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs>
                    <List dense>
                        {types.map(el => {
                            return <ListItem to={{search: `?type=${el}`}} component={Link} key={el} button>
                                <ListItemText primary={`${el}`}/>
                            </ListItem>
                        })}
                    </List>
                </Grid>
                {!technics ? <Grid item xs={9}>Выбери тип слева</Grid>
                    : <Technics />}
            </Grid>

        </Container>
    )
}

export default withRouter(TechicsPage)