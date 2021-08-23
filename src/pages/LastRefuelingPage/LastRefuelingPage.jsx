import groupElementsByDate from "../../components/global/groupElementsByDate";
import React, {useEffect} from "react";

const LastRefuelingPage = ({allRefills, getAllRefills}) => {

    useEffect(() => {
        getAllRefills()
    }, [])


    return (
        <>dsfs</>
    )
}
export default LastRefuelingPage