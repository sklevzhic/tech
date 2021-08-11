const changeConsts = (val) => {
    if (val === 'user') {
        val = 'fyo'
    } else if (val === 'build') {
        val = 'korpus'
    } else if (val === 'faculty') {
        val = 'faculty'
    }
    return val
}

export default changeConsts