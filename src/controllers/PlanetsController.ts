import { Request,Response } from "express";
import  {planet} from '../helpers/ActiveDestin'
import { selectPlanet } from "../models/DestinationModel";



export const moon = (req: Request, res:Response) =>{
    let destin = planet('moon')
    res.render('pages/destination',{
       destin : planet('moon'),
    })
}

export const mars = (req: Request, res:Response) =>{
    let destin = planet('mars')

    res.render('pages/destination',{
        destin : planet('mars')
    })
}

export const europa = (req: Request, res:Response) =>{
    let destin = planet('europa')

    res.render('pages/destination',{
        destin : planet('europa')
    })
}

export const titan = (req: Request, res:Response) =>{
    let destin = planet('titan')
    if(destin){
        console.log('ola')
    }
    res.render('pages/destination',{
        destin: planet('titan')
    })
}