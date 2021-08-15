import {Card, CardContent, Divider, List} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MiniCardTechnic from "../MiniCardTechnic";
import MiniCardTechnicSkeleton from "../MiniCardTechnic/MiniCardTechnicSceleton";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import groupArray from "../global/groupArray";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    roomItem: {
        marginTop: "20px",
        padding: "7px"
    },
    roomNumber: {}
}));

// const schema = [
//     {
//         address: "Голубева, 26",
//         build: "9",
//         blocks: [
//             {
//                 name: "1 блок",
//                 rooms: [1, 2, 3, 8, 10],
//             }, {
//                 name: "2 блок",
//                 rooms: [11, 14, 15, 16, "Охрана"],
//             }, {
//                 name: "3 блок",
//                 rooms: [21, 22, 23, 24, 25, 26],
//             }, {
//                 name: "4 блок",
//                 rooms: [31, 34, 35, 36, "Архив"],
//             }, {
//                 name: "Гостиница",
//                 rooms: ["Администратор", "Заведующий"],
//             }, {
//                 name: "Первое образование",
//                 rooms: ["Администратор", "Заведующий", "Кабушкина", "Могилевская"],
//             }
//         ]
//     },
//     {
//         address: "Советская, 18",
//         build: "1",
//         blocks: [
//             {
//                 name: "5 этаж",
//                 rooms: [142],
//             },
//             {
//                 name: "8 этаж",
//                 rooms: [81, 82, 83, 84, 85, 88],
//             }, {
//                 name: "10 этаж",
//                 rooms: [101, 102, 103, 104, 105, 106, 107, 108, "Кладовка", "Лифтовая"],
//             }, {
//                 name: "11 этаж",
//                 rooms: [113, 118],
//             }, {
//                 name: "12 этаж",
//                 rooms: [121, 122, 123, 124, 125],
//             }, {
//                 name: "13 этаж",
//                 rooms: [132],
//             }, {
//                 name: "14 этаж",
//                 rooms: [571],
//             }
//         ]
//     }
// ]

const ListTechnics = ({technicsByCategory, toogleLoadingInfoFotType, categories}) => {
    const classes = useStyles();
    const generateCondition = (el) => {
        let groupCategories = groupArray(categories)

        return Object.keys(groupCategories).every(key => {
            return groupCategories[key].some(elArr => elArr === el[key])
        })
    }
    const checkItem = (el) => {
        return (generateCondition(el)) ? true : false
    }
    const checkObj = (obj) => {
        let a = obj.some(el => checkItem(el))
        return a
    }
    const Cardd = ({el}) => {
        return <Card key={el.room} className={classes.roomItem}>
            <Typography component={Link} to={`/room/${el.room}`} variant={"h5"} className={`${classes.roomNumber}`}>
                {!(Number.parseInt(el.room)) ? el.room : `${el.room} кабинет`}
            </Typography>

            <List dense>
                {el.properties.map((el1, i) => {
                    return !toogleLoadingInfoFotType
                        ? <MiniCardTechnic key={i} el={el1}/>
                        : <MiniCardTechnicSkeleton key={i}/>
                })}
            </List>
        </Card>
    }
    const filteredTechnics = technicsByCategory.map((obj, i) => {
        if (categories.length === 0) {
            return <Cardd key={i} el={obj}/>
        } else {
            if (checkObj(obj.properties)) {
                return <Cardd key={i} el={obj}/>
            } else {
                return null
            }
        }
    })

    return (
        <>
            {filteredTechnics}
        </>
    )
}

export default ListTechnics


// {schema.map(obj => {
//     return <Card key={obj.build} className={classes.roomItem}>
//         <CardContent>
//             <Typography variant={"h5"} className={`${classes.roomNumber}`}>
//                 {obj.address}
//             </Typography>
//             <div>
//                 {obj.blocks.map((block) => {
//                     return <Card className={classes.roomItem}>
//                         <Divider/>
//                         <Typography variant={"h6"} className={`${classes.roomNumber}`}>
//                             {block.name}</Typography>
//                         <div>
//                             {block.rooms.map(room => {
//                                 { console.log(technics) }
//                                 return <div>
//                                     <Typography component={Link} to={`/room/${room}`} variant={"h5"} className={`${classes.roomNumber}`}>
//                                         {!(Number.parseInt(room)) ? room : `${room} кабинет`}
//                                     </Typography>
//
//                                     <List dense>
//                                         {technics.map((el,i) => {
//                                             if (room == el.room) {
//                                                 return <MiniCardTechnic key={i} el={el}/>
//                                             }
//                                         })
//                                         }
//                                     </List>
//                                 </div>
{/*                            })*/}
{/*                            }*/}
//                         </div>
//                     </Card>
//
{/*                })}*/}
{/*            </div>*/}
{/*        </CardContent>*/}

//     </Card>
// })}