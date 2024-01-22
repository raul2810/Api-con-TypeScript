import { DiaryEntry, DiaryEntryWithOutSensitiveInfo, newDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

//metodo para mostrar las entradas apartir del id
export const getdiaryById = (id: number): DiaryEntryWithOutSensitiveInfo | undefined =>{
    const entry = diaries.find(diary => diary.id === id)
    if(entry != null){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {comment, ...restOfDiary} = entry
        return restOfDiary
    }
    return entry
}
//metodo para mostrar las entradas sin los comentarios
export const getEntriesWithOutSensitiveInfo = (): DiaryEntryWithOutSensitiveInfo[] => {
    return diaries.map(({id, date, weather, visibility})=>{
        return{
            id,
            date,
            weather,
            visibility
        }
    })
}
//metodo para añadir entradas al diario
export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
    
    const newDiary = {
        id: Math.max(...diaries.map(diary =>diary.id))+1,
        ...newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
}