import {Router} from 'express';
import Joi from 'joi';
import {validateRequest} from '../../middlewares/joi-validaiton';

const router: Router = Router({});

router.get('', (req, res) => {
  res.send('Hello there');
});

router.get('/:userId',
  validateRequest({
    params: Joi.object({
      userId: Joi.number().required()
    }),
    query: Joi.object({
      email: Joi.string().email()
    })
  }),
  (req, res) => {
    res.send(`User with Id: ${req.params.userId}, skip: ${req.query.email}`);
});

router.put('/',
  validateRequest({
    body: Joi.object({
      userName: Joi.string().min(4).max(15),
      email: Joi.string().email()
    })
  }),
  (req, res) => {
    console.log(req.body);

    res.send(req.body);
});

router.post(':userId', (req, res) => {

});

router.delete(':userId', (req, res) => {

});

export default router;
