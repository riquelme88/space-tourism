import { Request, Response } from "express";
import {Active} from '../helpers/ActiveMenu';


export const home = (req : Request,res : Response) =>{
    
    res.render('pages/home', {
        menu : Active('home'),
    })
}

export const destination = (req : Request, res : Response) =>{
    
    res.render('pages/destination', {
        menu : Active('destination'),
    })

}

export const crew = (req : Request, res: Response) =>{
    res.render('pages/crew', {
        menu : Active('crew') 
    })
}

export const technology = (req: Request, res : Response) =>{
    res.render('pages/technology', {
        menu : Active('technology') 
    })
}