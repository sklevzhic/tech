import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import ProfileInfo from "../../components/Profile";
import Portfolio from "../../components/Portfolio";
import {makeStyles} from "@material-ui/styles";
import {useState} from "react";
import {useSelector} from "react-redux";
import formatDate from "../../components/global/formatDate";

const useStyles = makeStyles((theme) => ({
    div: {
        height: "200px",
        background: "red",
        width: "200px"
    },
    divheight: {
        height: "800px"
    }
}))


const ProfilePage = ({db}) => {
    const [teacher, setTeacher] = useState('')
    let aa = Array.from(new Set(db.map(el => {
        return el.id
    })))

    const names = [
        {full: "Вступительные испытания", small: "ВИ"},
        {full: "Лекции", small: "ЛК"},
        {full: "Обзорные лекции", small: "ОбзЛ"},
        {full: "Видео лекции", small: "ВЛ"},
        {full: "Практические занятия", small: "ПЗ"},
        {full: "Семинарские занятия", small: "СЗ"},
        {full: "Лабораторные занятия", small: "ЛЗ"},
        {full: "Круглый стол", small: "КС ТД"},
        {full: "Деловая игра", small: "ДИ"},
        {full: "Тренинг", small: "Т"},
        {full: "Конференции", small: "К"},
        {full: "Зачет", small: "З"},
        {full: "диф зачёт", small: "Дзач"},
        {full: "Собеседование", small: "С"},
        {full: "Экзамен", small: "Э"},
        {full: "Контрольная работа", small: "КР"},
        {full: "Реферат", small: "Р"},
        {full: "Научное руководство курсовой работой", small: "НРКР"},
        {full: "Отзыв на курсовую работу", small: "ОКР"},
        {full: "Защита курсовой работы", small: "ЗКР"},
        {full: "Научное руководство дипломной работой", small: "НРДР"},
        {full: "Рецензия на дипломную работу", small: "РДР"},
        {full: "Общее руководство стажировкой", small: "ОРС"},
        {full: "Проверка отчетов по стажировке", small: "ПОС"},
        {full: "Защита отчетов по стажировке", small: "ЗОС"},
        {full: "День заочника", small: "ДЗ"},
        {full: "ГЭК", small: "ГЭК"},

        {full: "Консультации", small: "Кон"}
    ]

    const getName = (id) => db.find(x => x.id === id)["таблица"]
    const handleChange = (e) => {
        setTeacher(e.currentTarget.value)
    }

    let activeTeacher = db.filter(el => {
        if (el.id === teacher) {
            return el
        }
    })
    let season16 = []
    let season712 = []
    let other = []

        activeTeacher.forEach(el => {
        let regex16 = /^[1-6]\/[0-9]{1,2}\/21/g
        let regex712 = /^[7890-2]{1,2}\/[0-9]{1,2}\/21/g
        if (regex16.test(el["Дата проведения занятия"])) {
            season16.push(el)
        } else if (regex712.test(el["Дата проведения занятия"])) {
            season712.push(el)
        } else if (el["Перенос часов"] === '2021') {
            other.push(el)
        }
    })
    //
    let tempResult = []

    const groupElements = (property, arr) => {
        return arr.reduce((previousValue, currentValue) => {
            let objType = previousValue.find(
                (element) => element[property] === currentValue[property]
            );
            if (!objType) {
                previousValue.push({
                    [property]: currentValue[property],
                    properties: [currentValue]
                });
            } else {
                objType.properties.push(currentValue);
            }
            return previousValue;
        }, []).sort((a, b) => a[property] - b[property])
    }

    let groupThemes16 = groupElements("Дисциплина(ы) учебного плана", season16)
    let groupThemesandGroups = groupThemes.map(el => {
        return {
            theme: el["Дисциплина(ы) учебного плана"],
            arr: groupElements("№ группы", el.properties)
        }
    })


    const summHours = (arr) => {
        let result = []
        arr.forEach(el => {
            names.forEach(el1 => {
                if ( (el[el1.full]) && el1.full !== 'Дата проведения занятия' && el1.full !== 'Дисциплина(ы) учебного плана' && el1.full !== '№ группы')  {
                    result.push({
                        group: el["№ группы"],
                        typeL: el1.full,
                        count: el[el1.full],
                        date: el["Дата проведения занятия"]
                    })
                }
            })
        })
        return result.reduce((a,c) => (a[c.typeL] = (a[c.typeL] || 0) + +c.count, a), {});
    }



    groupThemesandGroups.forEach(el => {
        el.arr.forEach(el1 => {
            tempResult.push({
                theme: el.theme,
                group: el1["№ группы"],
                date: el.arr[0].properties[0]["Дата проведения занятия"],
                arr: summHours(el1.properties)
            })
        })
    })

    const getValue = (el, arr) => {
        let result = null
        Object.keys(arr).forEach(value => {
            if (value === el) {
                result = arr[value]
            }
        })

        return result


    }
    return (
        <>
            <select name="select" value={teacher} onChange={handleChange}>
                {
                    aa.map(el => {
                        return <option value={el}>{getName(el)}</option>
                    })
                }
            </select>

            <div>
            </div>


                <table className={"table"}>
                    <thead>
                        <tr>
                            <th>theme</th>
                            <th>group</th>
                            <th>date</th>

                            {
                                names.map(el => {
                                    return <th>{el.small}</th>
                                })
                            }
                            <th>summ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tempResult.map(theme => {
                                return <tr key={theme.theme}>
                                    <th>{theme.theme}</th>
                                    <th>{theme.group}</th>
                                    <th>{theme.date}</th>
                                    {
                                        names.map(el => {
                                            return <th>{getValue(el.full, theme.arr)}</th>
                                        })
                                    }
                                    <th>date</th>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            {/*<ProfileInfo/>*/}
            {/*<Portfolio/>*/}
        </>
    )
}

export default ProfilePage

