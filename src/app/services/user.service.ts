import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: 'Moussa',
      lastName: 'Diouf',
      email: 'monssa1@yahoo.fr',
      drinkPreference: 'bissap',
     hobbies: [
      'coder',
      'manger',
      'lire'
    ]
    }
  ];
  userSubject = new Subject();
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
