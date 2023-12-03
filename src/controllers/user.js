import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
res.send('GET USER')
})

router.post('/', (req, res) => {
    res.send('POST USER')
    })
    
router.delete('/', (req, res) => {
     res.send('DELETE USER')
     })
        
export default router