type MenuOptions = '' | 'home' | 'destination' | 'crew' | 'technology'
type BackgroundType = '' | '/:' | '/destination:' | '/crew:' | '/technology:'

export const Active = (ActiveMenu : MenuOptions) => {
    let returnObject ={
        home : false,
        destination : false,
        crew : false, 
        technology : false
    };

    if(ActiveMenu != ''){
        returnObject[ActiveMenu] = true;
    }

    return returnObject
}

export const background = (activeBackground : BackgroundType) =>{
    let returnObject = {
        '/:' : false,
        '/destination:' : false,
        '/crew:' : false,
        '/technology:' : false
    }

    if(activeBackground != ''){
        returnObject[activeBackground] = true
    }

    return returnObject
}