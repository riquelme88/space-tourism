type Planets = '' | ':moon' | ':mars' | ':europa' | ':titan'

export const planet = (ActivePlanet : Planets) =>{
    let returnObject = {
        ':moon' : false,
        ':mars' : false,
        ':europa': false,
        ':titan' : false,
    }

    if(ActivePlanet != ''){
        returnObject[ActivePlanet] = true
    }


    return returnObject
}