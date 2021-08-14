const groupArray = (array) => {
    return array.reduce((acc, element) => {
        const [key, heightValue] = Object.entries(element)[0];
        (acc[key] || (acc[key] = [])).push(heightValue[0]);
        return acc;
    }, {});
}

export default groupArray
