import {Card, List} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MiniCardTechnic from "../MiniCardTechnic";
import MiniCardTechnicSkeleton from "../MiniCardTechnic/MiniCardTechnicSceleton";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import getProperty from '../global/getProperty'

const useStyles = makeStyles((theme) => ({
    roomItem: {
        marginTop: "20px",
        padding: "7px"
    },
    roomNumber: {}
}));

const ListTechnics = ({technicsByCategory, toogleLoadingInfoFotType, categories}) => {
    const classes = useStyles();
    let [condition, setCondition] = useState('')
    // const checkCondition = (el) => {
    //     let  cond = Object.keys(categories).map(key => {
    //         if (categories[key].length === 0) {
    //             return null
    //         } else {
    //             let a = categories[key].map(prop => {
    //                     return `(${el}.${key} === '${prop}')`
    //                 }
    //             )
    //             return a.join(' || ')
    //         }
    //     }).filter(n => n).join(' || ')
    //     return cond
    // }
    const checkCondition = (arr) => {
        return arr.some(el => el.year === '2005')
    }

    const filteredTechnics = technicsByCategory.map(obj => {
        if (checkCondition(obj.properties)) {
            return <div style={{border: "1px solid"}}>
                {obj.room}
                <div>
                    {
                        obj.properties.map(el => {
                            return <div>{el.year} {el.name}</div>
                        })
                    }
                </div>
            </div>
        }
        // return <div style={{border: "1px solid"}}>
        //     {obj.room}
        //     <div>
        //         {
        //             obj.properties.map(el => {
        //                 if (checkCondition(el)) {
        //                     return <div>da</div>
        //                 } else {
        //                     return null
        //                 }
        {/*            })*/
        }
        {/*        }*/
        }
        {/*    </div>*/
        }
        {/*</div>*/
        }
    })
    {/*const filteredTechnics = technicsByCategory.map(el => {*/
    }
    //     el.properties.map(el => {
    //         renderCondition(el)
    //     })
    //     if (true) {
    //         return <Card key={el.room} className={classes.roomItem}>
    //             <Typography variant={"h5"} className={`${classes.roomNumber}`}>
    {/*                {!(Number.parseInt(el.room)) ? el.room : `${el.room} кабинет`}*/
    }
    {/*            </Typography>*/
    }
    //             <List dense>
    //                 {el.properties.map((el1, i) => {
    //                     return !toogleLoadingInfoFotType
    //                         ? <MiniCardTechnic key={i} el={el1}/>
    //                         : <MiniCardTechnicSkeleton key={i}/>
    //                 })}
    //             </List>
    //         </Card>
    //     } else {
    //         return null
    //     }
    // })

    return (
        <>
            {filteredTechnics}
        </>
    )
}

export default ListTechnics

// <Card key={el.room} className={classes.roomItem}>
//     <Typography variant={"h5"} className={`${classes.roomNumber}`}>
// {!(Number.parseInt(el.room)) ? el.room : `${el.room} кабинет`}
//
// </Typography>*/
//
// <List dense>
//     {el.properties.map((el1, i) => {
//         return !toogleLoadingInfoFotType
//             ? <MiniCardTechnic key={i} el={el1}/>
//             : <MiniCardTechnicSkeleton key={i}/>
//     })}
// </List>
// </Card>