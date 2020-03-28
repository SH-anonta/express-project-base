import {User} from '../../entity/user';
import {getDbConnection} from '../../db-connection-provider';
import {UpdateResult} from 'typeorm';

export class UserService {

  getUsers(): Promise<User[]> {
    return getDbConnection()
      .then(conn => {
        const userRepo = conn.getRepository(User);

        return userRepo.find();
      });
  }

  getUser(userId: number): Promise<User | undefined> {
    return getDbConnection()
      .then(conn => {
        const userRepo = conn.getRepository(User);

        return userRepo.findOne(userId);
      });
  }

  createUser(userData: User): Promise<User> {
    return getDbConnection()
    .then(conn => {
      const userRepo = conn.getRepository(User);

      return userRepo.save(userData);
    });
  }

  updateUser(userId: number, userData: User): Promise<UpdateResult>{
    return getDbConnection()
      .then(conn => {
        const userRepo = conn.getRepository(User);

        console.log(userId)
        return userRepo.update(userId, userData);
      });
  }

  removeUser(userId: number) {
    return getDbConnection()
    .then(conn => {
      const userRepo = conn.getRepository(User);

      return this.getUser(userId).then(user => {
        if (user != null) {
          return userRepo.remove(user as User);
        }

        return Promise.reject(new Error(`User with id ${userId} not found`));
      });
    });
  }
}
