const groupArray = (array) => {
    let res = array.reduce((acc, element) => {
        const [key, heightValue] = Object.entries(element)[0];
        (acc[key] || (acc[key] = [])).push(heightValue);
        return acc;
    }, {});

    return res
}

export default groupArray
