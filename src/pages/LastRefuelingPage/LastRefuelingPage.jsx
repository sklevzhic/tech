import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import ControlledAccordions from "../../components/Accordion";

const LastRefuelingPage = ({allRefills, getAllRefills}) => {

    useEffect(() => {
        getAllRefills()
    }, [])


    return (
        <>
            <Paper>


                {allRefills ? <>
                    <div>

                        <ControlledAccordions array={allRefills}/>
                    </div>
                </> : <Button component={Link} to={"/printers"}>Заполнить</Button>}
            </Paper>

            {
                allRefills.map(el => {
                    return <p>{el.name}, {el.user}, {el.technicId}, {el.createDate}, {el.countRefill}, {el.receiverDate}</p>
                })
            }</>
    )
}
export default LastRefuelingPage