import {Grid} from "@material-ui/core";
import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
const Technics = ({technics =['1','2'], getTechnicForTypes}, match) => {
    useEffect(() => {
        getTechnicForTypes()
    }, [technics])
    console.log(match)
    return (
        <>
            <Grid item xs={9}>
                {technics.map(el => {
                    return <h2>el</h2>
                })}
            </Grid>
        </>
    )
}
export default withRouter(Technics)
