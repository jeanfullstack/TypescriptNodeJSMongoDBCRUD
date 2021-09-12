import { Router, Request, Response } from 'express';


const router = Router(); //Router() devuelve un objeto 


router.get('/', (req: Request, res: Response) => {
    res.render('index');
});


export default router;