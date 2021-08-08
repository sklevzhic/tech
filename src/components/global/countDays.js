const countDays = (a,b) => {

    let dateA = new Date(a).getTime()
    let dateB = new Date(b).getTime()
    let days = ((dateB - dateA) / (60*60*24*1000)) % 365
    return days
}

export default countDays