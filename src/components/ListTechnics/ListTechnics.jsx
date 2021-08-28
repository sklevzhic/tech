import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Divider, List, Paper} from "@material-ui/core";
import Title from "../Title";
import MiniCardTechnic from "../MiniCardTechnic";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    "address": {
        textAlign: "center"
    },
    "paper": {
        marginBottom: "20px"
    }
}));

const ListTechnics = ({getSchemaTechnics, schema, tech, categories, filters = true, handlerRefills}) => {

    const classes = useStyles()

    const [schemaTechnics, setSchemaTechnics] = useState('')
    const [technics, setTechnics] = useState([])


    useEffect(() => {
        getSchemaTechnics()
    }, []) // Получение схемы кабинетов
    useEffect(() => {
        setSchemaTechnics(schema)
    }, [schema]) // Записываем в useState схему
    useEffect(() => {
        if (tech.length !== 0) {
            const isVisibleMinicard = (el) => {
                if (filters === false) {
                    return true
                } else {
                    let result = categories.some(element => {
                        let aa = el.[Object.keys(element)]
                        let bb = element.[Object.keys(element)]
                        if (aa === bb) {
                            return true
                        } else {
                            return false
                        }
                    })
                    return result
                }

            }
            let bbb = tech.map(el => {
                if (isVisibleMinicard(el)) {
                    return {...el, "visible": true}
                } else {
                    if (categories.length === 0) {
                        return {...el, "visible": true}
                    } else {
                        return {...el, "visible": false}
                    }
                }
            })
            setTechnics(bbb)
        }
    }, [tech]) // Скрываем элементы при фильтрации

    return (


        <>
            {
                (schemaTechnics) && <>
                    {schemaTechnics.map(build => {
                            if (technics.some(buildElement => buildElement.build === build.build)) {
                                return <CardBuild key={build.build} classes={classes} build={build} technics={technics}
                                                  filters={filters} handlerRefills={handlerRefills}/>
                            } else {
                                return null
                            }
                        }
                    )}
                </>
            }
        </>
    )
}

export default ListTechnics


const CardBuild = ({classes, build, technics, handlerRefills, filters}) => {
    const isDisplayedBlock = (obj) => {
        let b = technics.some(element => {
            if (obj.rooms.includes(element.room)) {
                return true
            } else {
                return false
            }
        })
        return b
    } // Проверка, отображаем ли пустой блок

    return <Paper className={classes.paper}>
        <Title className={classes.address} text={build.address}/>
        {
            build.blocks.map((block, i) => {
                    if (isDisplayedBlock(block)) {
                        return <CardBlock key={i} block={block} technics={technics} build={build} filters={filters}  handlerRefills={handlerRefills}/>
                    } else {
                        return false
                    }

                }
            )
        }
        <Divider/>
    </Paper>
}
const CardBlock = ({block, technics, build, handlerRefills, filters}) => {
    return <>
        {
            block.rooms.map(room => {
                if (technics.some(el => ((el.room === room) && (el.visible !== false)))) {
                    return <div key={room}>
                        <Typography>{block.name} <Link to={`/room/${room}`}>{room} кабинет</Link></Typography>
                        {
                            technics && <CardRoom technics={technics} room={room} filters={filters}  build={build} handlerRefills={handlerRefills}/>
                        }
                        <Divider/>
                    </div>
                } else {
                    return false
                }
            })}</>
}
const CardRoom = ({technics, room, build, handlerRefills, filters}) => {
    return <List dense>
        {
            technics.map((element, i) => {
                if ((element.room === room) && (element.build === build.build) && (element.visible !== false)) {
                    return <MiniCardTechnic key={i} el={element} filters={filters}  handlerRefills={handlerRefills}/>
                }
            })
        }
    </List>
}
