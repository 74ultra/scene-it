export const colCleaner = (ary) => {
    let cleanCols = new Set()
    ary.forEach(item => {
        cleanCols.add(item)
    })
    return Array.from(cleanCols)
}


export const favDataCleaner = (ary) => {
    const newAry = []
    ary.forEach(item => {
        const newObj = {}
        for (let prop in item) {
            newObj[prop] = item[prop].S
        }
        newAry.push(newObj)
    })
    return newAry
}

export const userListCleaner = (ary) => {
    const counter = {}
    for (let elem of ary) {
        if (elem.userId in counter) {
            counter[elem.userId] += 1
        } else {
            counter[elem.userId] = 1
        }
    }
    const lookup = new Set()
    const result = []
    for (let el of ary) {
        if (!(lookup.has(el.userId))) {
            lookup.add(el.userId)
            result.push({
                userId: el.userId,
                username: el.username,
                count: counter[el.userId]
            })
        }
    }
    return result
}

export const selectedFavCleaner = (ary) => {
    const res = []
    ary.forEach(obj => {
        const newObj = {}
        const refAry = Object.keys(obj)
        refAry.forEach(key => {
            newObj[key] = obj[key].S
        })
        res.push(newObj)
    })
    return res
}
