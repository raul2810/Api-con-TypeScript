// archivo donde se escriben las validaciones de entrada de variables en el post
import { newDiaryEntry} from "./types"
import { Weather, Visibility } from "./enums"

const parseComment = (commentFromRequest: any): string =>{
    if(!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment')
    }

    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string =>{
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}

const parseWeather = (WeatherFromRequest: Weather): Weather =>{
    if(!isString(WeatherFromRequest) || !isWeather(WeatherFromRequest)){
        throw new Error('Incorrect or missing weather')
    }
    return WeatherFromRequest
}

const parseVisibility = (visibilityFromRequest: Visibility): Visibility =>{
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('Incorrect or missing visibility')
    }
    return visibilityFromRequest
}

const isVisibility = (param: any): boolean =>{
    return Object.values(Visibility).includes(param)
}

const isWeather = (param: any): boolean =>{
    return Object.values(Weather).includes(param)
}

const isString = (string: any): boolean =>{
    if(typeof string === 'string' || string instanceof String){
        return true
    }
    return false
}

const isDate = (date: string): boolean =>{
    return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }
    return newEntry
}

export default toNewDiaryEntry