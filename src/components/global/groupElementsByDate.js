import formatDate from "./formatDate";

const groupElementsByDate = (array, property) => {
    if (array) {
        return array.reduce((previousValue, currentValue) => {
            let b = formatDate(currentValue[property])
            let objType = previousValue.find((element) => {
                    let a = element["date"]
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
        }, [])
    } else {
        return []
    }

}
export default groupElementsByDate