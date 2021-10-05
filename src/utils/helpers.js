export const colCleaner = (ary) => {
    let cleanCols = new Set()
    ary.forEach(item => {
        cleanCols.add(item)
    })
    return Array.from(cleanCols)
}


export const favDataCleaner = (ary) => {
    const newAry = []
    ary.map(item => {
        const newObj = {}
        for (let prop in item) {
            newObj[prop] = item[prop].S
        }
        newAry.push(newObj)
    })
    return newAry
}