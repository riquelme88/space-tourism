import { Request, Response } from "express";
import { dataTechnology } from '../models/TechnologyModel'
import { technologyActive } from "../helpers/ActiveTechnology";
import { background } from "../helpers/ActiveMenu";


export const technologyController = (req: Request, res: Response) => {
    let params = req.params.technologys

    const returnTechnology = () => {
        if (params == ':Launchvehicle') {
            return dataTechnology[0]
        } else if (params == ':Spaceport') {
            return dataTechnology[1]
        } else if (params == ':Spacecapsule') {
            return dataTechnology[2]
        }
    }

    const returnActive = () => {
        if (params == ':Launchvehicle') {
            return technologyActive('Launchvehicle')
        } else if (params == ':Spaceport') {
            return technologyActive('Spaceport')
        } else if (params == ':Spacecapsule') {
            return technologyActive('Spacecapsule')
        }
    }



    res.render('pages/technology', {
        techModel: returnTechnology(),
        active: returnActive(),
        background: background('/technology:')
    })
}