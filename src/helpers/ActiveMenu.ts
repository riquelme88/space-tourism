type MenuOptions = '' | 'home' | 'destination' | 'crew' | 'technology'


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