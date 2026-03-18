import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface User {
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {

  isAuthenticated = signal<boolean>(false)


  getCurrentUser(): Observable<User>{
    return of(null)
  }

  // private user$ = new BehaviorSubject<User | null>({
  //   name: 'Mario Rossi',
  //   role: 'client'
  // })

  // getCurrentUser(): Observable<User | null> {
    
  //       return this.user$.asObservable()
    
    
  // }

  // logOut(){
  //   this.user$.next(null)
  // }



  
}

