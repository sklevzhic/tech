import {format} from "date-fns";

const formatDate = (value) => {
    debugger
    return format(new Date(value), 'dd.MM.yyyy')
}
export default formatDate()