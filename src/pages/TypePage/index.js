import {connect} from "react-redux";
import TypePage from "./TypePage";
import {addUser, getActiveType, updateTechnic} from "../../redux/Tech-reducer";


const mapStateToProps = (state) => {
    return {
        activeType: state.techs.activeType,
        technicsByCategory: [
            {
                "room": "26",
                "properties": [
                    {
                        "id": "70",
                        "type": "Сканер",
                        "name": "СКАНЕР HP ScanJet G2710",
                        "invent": "136131511",
                        "year": "2009",
                        "korpus": "9",
                        "room": "26",
                        "fyo": "Турченко И.А.",
                        "matfyo": "Николаенко Инна Васильевна",
                        "print": "FALSE"
                    }
                ]
            },
            {
                "room": "108",
                "properties": [
                    {
                        "id": "140",
                        "type": "Сканер",
                        "name": "HP Scanjet G3010",
                        "invent": "7103524",
                        "year": "2008",
                        "korpus": "1",
                        "room": "108",
                        "fyo": "Севостьянова К.С.",
                        "matfyo": "Клевжиц Александр Юрьевич",
                        "print": "FALSE"
                    }
                ]
            },
            {
                "room": "123",
                "properties": [
                    {
                        "id": "166",
                        "type": "Сканер",
                        "name": "HP Scanjet G3010",
                        "invent": "7103524",
                        "year": "2008-01-01",
                        "korpus": "1",
                        "room": "123",
                        "fyo": "Глазко",
                        "matfyo": "Шаркевич Татьяна Сергеевна",
                        "print": "FALSE"
                    }
                ]
            }
        ],
        yearsOfProduction: state.techs.yearsOfProduction,
        users: state.techs.users,
        matfyos: state.techs.matfyos,
        korpuses: state.techs.korpuses,
        subdivisions: state.techs.subdivisions,
        toogleLoadingInfoFotType: state.techs.toogleLoadingInfoFotType,
    }
}
const mapToDispatch = {
    getActiveType,
    updateTechnic,
    addUser
}

export default connect(mapStateToProps, mapToDispatch)(TypePage)
