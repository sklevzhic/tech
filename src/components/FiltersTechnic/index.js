import FiltersTechnics from './FiltersTechnic'
import {connect} from "react-redux";
import {getStatistic} from "../../redux/Tech-reducer";

let mapStateToProps = (state) => {
    return {
        technics: state.techs.technics,
        statistics: state.techs.statistics,
        paramsTechnics: state.techs.paramsTechnics
    }
}
export default connect(mapStateToProps, {getStatistic})(FiltersTechnics)