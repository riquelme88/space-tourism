type CrewType = '' | ':Douglas' | ':Mark'| ':Victor' | ':Anousheh'


export const crewActives = (ActiveCrew : CrewType)=>{
    let returnObject = {
        ':Douglas' : false,
        ':Mark' : false,
        ':Victor' : false,
        ':Anousheh' : false,
    }

    if(ActiveCrew != ''){
         returnObject[ActiveCrew] = true
    }

    return returnObject
}