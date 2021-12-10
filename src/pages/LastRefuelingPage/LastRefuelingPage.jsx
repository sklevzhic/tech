import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import ControlledAccordions from "../../components/Accordion";
import {Container} from "@material-ui/core";

const LastRefuelingPage = ({allRefills, getAllRefills}) => {

    useEffect(() => {
        getAllRefills()
    }, [])


    return (
        <>
            <Container>
                <Paper>
                    {allRefills ? <>
                        <div>
                            <ControlledAccordions array={allRefills}/>
                        </div>
                    </> : <Button component={Link} to={"/printers"}>Заполнить</Button>}
                </Paper>
            </Container>
</>
    )
}
export default LastRefuelingPage