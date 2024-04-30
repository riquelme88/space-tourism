type typeTechnology = '' | 'Launchvehicle' | 'Spaceport' | 'Spacecapsule'



export const technologyActive = (activeTechnology: typeTechnology) => {
    let returnObject = {
        'Launchvehicle': false,
        'Spaceport': false,
        'Spacecapsule': false
    }

    if (activeTechnology != '') {
        returnObject[activeTechnology] = true
    }


    return returnObject
}