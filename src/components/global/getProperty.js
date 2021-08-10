const getProperty = (obj) => {
    let str = JSON.stringify(obj)
    let param = str.slice(2, (str.indexOf(':')- 1))

    return param
}

export default getProperty