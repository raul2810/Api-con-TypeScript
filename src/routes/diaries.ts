import express from "express"
import * as diaryServices from '../services/diaryService' 

const router = express.Router()
//metodo get que recupera todas las entradas sin el comentario
router.get('/',(_req,res) => {
    res.send(diaryServices.getEntriesWithOutSensitiveInfo())
}) 
//metodo get que recupera una entrada a partir del id sin el comentario
router.get('/:id',(req,res) => {
    const diary = diaryServices.getdiaryById(Number(req.params.id))
    return(diary != null)
    ? res.send(diary)
    : res.status(404)
})
//se define en este post como agregar entradas al diario
router.post('/',(req,res) => {
    try {
        const {date,weather,visibility,comment} = req.body
        const addedDiaryEntry = diaryServices.addDiary({
        date,
        weather,
        visibility,
        comment
        })
    res.json(addedDiaryEntry)
    } catch (e) {
        res.status(400)
    }
    
}) 

export default router