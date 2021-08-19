import formatDate from "./formatDate";

const groupElementsByDate = (array, property) => {
    return array.reduce((previousValue, currentValue) => {
        let objType = previousValue.find((element) => {
            let a = element["date"]
            let b = formatDate(Number.parseInt(currentValue[property]))
                if (a === b) {
                    return element
                }
            }
        );
        if (!objType) {
            const currentValueDDMMYYYY = formatDate(currentValue[property])
            previousValue.push({
                "date": currentValueDDMMYYYY,
                properties: [currentValue]
            });
        } else {
            objType.properties.push(currentValue);
        }
        return previousValue;
    }, []).sort((a, b) => a["date"] - b["date"])
}
export default groupElementsByDate