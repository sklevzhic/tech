import {
    Button,
    Container, Divider,

} from "@material-ui/core";
import React, {useEffect, useState} from "react";

import StagesFueling from "../../components/StagesFueling";
import ListTechnics from "../../components/ListTechnics";
import {Link} from "react-router-dom";

const PrintersPage = ({
                          allRefills,
                          getPrintersAll,
                          printers,
                          addRefillForPrinter,
                          updateCurrentRefills
                      }) => {

    useEffect(() => {
        getPrintersAll()
    }, [])

    const [currentRefill, setCurrentRefill] = useState([])


    const getCountRefill = (id) => {
        let count = allRefills.filter(el => el.technicId === id).length
        return count
    }

    const handlerRefills = (el) => {
        debugger
        let obj = {
            "technicId": el.id,
            "name": el.name,
            "user": el.user,
            "createDate": Date.now(),
            "countRefill": getCountRefill(el.id) + 1
        }
        changeCategory(obj, 'new')
    }
    const changeCategory = (el, index) => {
        let a = currentRefill.map((obj, i) => {
            if (index === 3) {
                index = 'finish'
            }
            if (index === 'new') {
                if (i === 0) {
                    return {
                        name: obj.name,
                        arr: [...obj.arr, el]
                    }
                } else {
                    return {
                        name: obj.name,
                        arr: obj.arr
                    }
                }
            } else if (index === 'finish') {
                if (i === 3) {
                    addRefillForPrinter(el.technicId, el)
                    return {
                        name: obj.name,
                        arr: obj.arr.filter(elem => el.technicId !== elem.technicId)
                    }
                } else {
                    return {
                        name: obj.name,
                        arr: [...obj.arr]
                    }
                }
            } else {
                if (i === index) {
                    return {
                        name: obj.name,
                        arr: obj.arr.filter(elem => el.technicId !== elem.technicId)
                    }
                } else if (i === (index + 1)) {
                    return {
                        name: obj.name,
                        arr: [...obj.arr, el]
                    }
                } else {
                    return {
                        name: obj.name,
                        arr: obj.arr
                    }
                }

            }
        })
        setCurrentRefill(a)
        updateCurrentRefills(a)
    }
    return (
        <Container>
            <StagesFueling
                changeCategory={changeCategory}
                currentRefill={currentRefill}
                setCurrentRefill={setCurrentRefill}
            />
            <Button component={Link} to={"/printers/lastrefueling"} variant="contained">Последние заправки</Button>
            <ListTechnics tech={printers} filters={false} handlerRefills={handlerRefills}/>
        </Container>
    )
}

export default PrintersPage