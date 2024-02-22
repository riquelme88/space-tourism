import { Request, Response } from "express";
import { dataCrew } from "../models/CrewModel";
import {crewActives} from '../helpers/ActiveCrew'
import { background } from "../helpers/ActiveMenu";


export const crews = (req: Request, res : Response) =>{
    let param = req.params.crews
    
    const crewFun = () =>{
        if(param == ':Douglas'){
            return dataCrew.crew[0]
        }else if(param == ':Mark'){
            return dataCrew.crew[1]
        }else if(param == ':Victor'){
            return dataCrew.crew[2]
        }else if(param == ':Anousheh'){
            return dataCrew.crew[3]
        }
    }

    const crewActive = () =>{
        if(param == ':Douglas'){
            return crewActives(':Douglas')
        }else if(param == ':Mark'){
            return crewActives(':Mark')
        }else if(param == ':Victor'){
            return crewActives(':Victor')
        }else if(param == ':Anousheh'){
            return crewActives(':Anousheh')
        }
    }

    

    res.render('pages/crew',{
        allCrews : crewFun(),
        active : crewActive(),
        background : background('/crew:')
    })
}