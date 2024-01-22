//tipos para definir atributos de la data y la info que pueden contener
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great'|'good'|'ok'|'poor'

//interface con la estructura de la data(json)
export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}
// primera forma de excluir un info de la estructura de data anterior
// export type DiaryEntryWithOutSensitiveInfo = pick <DiaryEntry,'id'|'date'|'weather'|'visibility'>

// segunda forma de excluir un info de la estructura de data anterior
export type DiaryEntryWithOutSensitiveInfo = omit<DiaryEntry, 'comment'>

//tipo para la creacion de una entrada nueva, omite el id debido a que este se define desde el archivo de servicios
export type newDiaryEntry = omit<DiaryEntry, 'id'>