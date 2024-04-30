import { Request, Response } from "express";
import { Active, background } from '../helpers/ActiveMenu';
import { dataPlanet } from "../models/DestinationModel";
import { dataCrew } from "../models/CrewModel";
import { dataTechnology } from "../models/TechnologyModel";


export const home = (req: Request, res: Response) => {
    res.render('pages/home', {
        menu: Active('home'),
        background: background('/:')
    })



}

export const destination = (req: Request, res: Response) => {

    const defaultPlanet = () => {
        if (req.params) {
            return dataPlanet[0]
        }
    }

    res.render('pages/destination', {
        menu: Active('destination'),
        defaultPlanet: dataPlanet[0],
        background: background('/destination:')
    })



}
export const crew = (req: Request, res: Response) => {

    const defaultCrew = () => {
        if (req.params) {
            return dataCrew.crew[0]
        }
    }
    res.render('pages/crew', {
        menu: Active('crew'),
        crewDefault: defaultCrew(),
        background: background('/crew:')
    })



}

export const technology = (req: Request, res: Response) => {

    const defaultTechnology = () => {
        if (req.params) {
            return dataTechnology[0]
        }
    }

    res.render('pages/technology', {
        menu: Active('technology'),
        technologyDefault: defaultTechnology(),
        background: background('/technology:')
    })


}