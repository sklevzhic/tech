import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Divider, List, Paper} from "@material-ui/core";
import Title from "../Title";
import MiniCardTechnic from "../MiniCardTechnic";
import MiniCardTechnicSkeleton from "../MiniCardTechnic/MiniCardTechnicSceleton";

const useStyles = makeStyles((theme) => ({
    "address": {
        textAlign: "center"
    },
    "paper": {
        marginBottom: "20px"
    }
}));

const ListTechnics = ({getSchemaTechnics, schema, tech, categories, setCategories}) => {
    const classes = useStyles()

    const [schemaTechnics, setSchemaTechnics] = useState('')
    const [technics, setSTechnics] = useState('')


    useEffect(() => {
        getSchemaTechnics()
    }, []) // Получение схемы кабинетов
    useEffect(() => {
        setSchemaTechnics(schema)
    }, [schema]) // Записываем в useState схему
    useEffect(() => {
        setSTechnics(tech)
    }, [tech]) // Записываем в useState выбранный тип техники
    useEffect(() => {
        if (technics) {
            const isVisible = (el) => {
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
            let bbb = technics.map(el => {
                if (isVisible(el)) {
                    return {...el, "visible": true}
                } else {
                    return {...el, "visible": false}
                }
            })
            setSTechnics(bbb)
        }
    }, [categories])


    return (
        <>
            {
                schemaTechnics && <>
                    {schemaTechnics.map(build => {
                            if (technics.some(buildElement => buildElement.build === build.build)) {
                                return <CardBuild classes={classes} build={build} technics={technics}/>
                            }
                        }
                    )}
                </>
            }
        </>
    )
}

export default ListTechnics


const CardBuild = ({classes, build, technics}) => {
    const isDisplayedBlock = (obj) => {
        let b = technics.some(element => {
            if (obj.rooms.includes(element.room)) {
                return true
            }
        })
        return b
    } // Проверка, отображаем ли пустой блок

    return <Paper className={classes.paper}>
        <Title className={classes.address} text={build.address}/>
        {
            build.blocks.map(block => {
                    if (isDisplayedBlock(block)) {
                        return <CardBlock block={block} technics={technics} build={build}/>
                    }

                }
            )
        }
        <Divider/>
    </Paper>
}
const CardBlock = ({block, technics, build}) => {
    return <>
        {
            block.rooms.map(room => {
                if (technics.some(el => el.room === room)) {
                    return <div>
                        <Typography>{block.name} {room} кабинет</Typography>
                        {
                            technics && <CardRoom technics={technics} room={room} build={build}/>
                        }
                        <Divider/>
                    </div>
                }
            })}</>
}
const CardRoom = ({technics, room, build}) => {
    return <List dense>
        {
            technics.map((element, i) => {
                if ((element.room === room) && (element.build === build.build) && (element.visible !== false)) {
                    return <MiniCardTechnic key={i} el={element}/>
                }
            })
        }
    </List>
}
