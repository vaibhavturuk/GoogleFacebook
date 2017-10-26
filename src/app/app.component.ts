import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'my-app',
  template: `<h1>Google & Facebook Login & Twitter</h1>{{status}}
              <hr>
              <button class="btn btn-primary fa fa-google " (click)="signIn('google')">   google</button>
              <button class="btn btn-success fa fa-facebook" (click)="signIn('facebook')"> facebook</button>
             <button class="btn btn-warning fa fa-twitter" (click)="signIn('twitter')"> twitter</button>
              <button class="btn btn-danger fa fa-sign-out" (click)="logout()">  logout</button>
              <div *ngIf="user">
                <table>
                  <tr>
                    <td>Name:</td>
                    <td>{{user.name}}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{{user.email}}</td>
                  </tr>
                  <tr>
                    <td>UID</td>
                    <td>{{user.uid}}</td>
                  </tr>
                  <tr>
                    <td>Provider</td>
                    <td>{{user.provider}}</td>
                  </tr>
                  <tr>
                    <td>Image</td>
                    <td>{{user.image}}</td>
                  </tr>
                </table>
              </div>
              `
})
export class AppComponent implements OnDestroy {
  public user;
  sub: any;
  constructor(public _auth: AuthService){ }
  
  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        console.log(data);this.user=data;}
    )
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);
        this.user=null;

      }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
