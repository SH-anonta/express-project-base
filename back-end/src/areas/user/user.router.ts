import {Router} from 'express';
import Joi from 'joi';
import {createValidator} from 'express-joi-validation';
import {UserService} from './user.service';
import {User} from '../../entity/user';

const validator = createValidator();
const userService = new UserService();

const userIdParamSchema = Joi.object({
  userId: Joi.number().required()
});

const userPayloadSchema = Joi.object({
  userName: Joi.string().min(4).max(15),
  email: Joi.string().email()
});

const router: Router = Router({});

router.get('', (req, res, next) => {
  userService
    .getUsers()
    .then((users: User[]) => {
      res.send(users);
    })
    .catch((err: any) => {
      next(err);
    });
});

router.get('/:userId',
  validator.params(userIdParamSchema),
  (req, res, next) => {
    userService.getUser(+req.params.userId)
      .then(user => {
        if (user != null) {
          res.send(user);
        }
        else {
          res.status(404).send();
        }
      })
      .catch((err: any) => {
        next(err);
      });
  }
);

router.put('/',
  validator.body(userPayloadSchema),
  (req, res, next) => {
    userService.createUser(req.body)
      .then(createdUser => {
        res.send(createdUser);
      })
      .catch(err => {
        next(err);
      });
});

router.post('/:userId',
  validator.params(userIdParamSchema),
  validator.body(userPayloadSchema),
  (req, res, next) => {
    const userId = +req.params.userId;

    userService.updateUser(userId, req.body)
      .then(updateResult => userService.getUser(userId))
      .then(user => {
        res.send(user);
      })
      .catch(err => {
        next(err);
      });
});

router.delete('/:userId',
  validator.params(userIdParamSchema),
  (req, res, next) => {
    userService.removeUser(+req.params.userId)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      next(err);
    });
});

export default router;
