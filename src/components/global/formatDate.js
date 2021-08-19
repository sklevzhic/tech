import {format} from "date-fns";

const formatDate = (value) => {
    let currentDate = new Date(value)
    return format(currentDate, 'dd.MM.yyyy')
}
export default formatDate