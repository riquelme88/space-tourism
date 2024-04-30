import { Request, Response } from "express";
import { planet } from '../helpers/ActiveDestin'
import { dataPlanet } from "../models/DestinationModel";
import { background } from "../helpers/ActiveMenu";



export const destinations = (req: Request, res: Response) => {
    let param = req.params.destinations

    const returnPlanet = () => {
        if (param == ':moon') {
            return dataPlanet[0]
        } else if (param == ':mars') {
            return dataPlanet[1]
        } else if (param == ':europa') {
            return dataPlanet[2]
        } else if (param == ':titan') {
            return dataPlanet[3]
        }
    }


    const activePlanet = () => {
        if (param == ':moon') {
            return planet(':moon')
        } else if (param == ':mars') {
            return planet(':mars')
        } else if (param == ':europa') {
            return planet(':europa')
        } else if (param == ':titan') {
            return planet(':titan')
        }
    }




    res.render('pages/destination', {
        planets: returnPlanet(),
        active: activePlanet(),
        background: background('/destination:')
    })
}