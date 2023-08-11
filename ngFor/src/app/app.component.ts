import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFor';
  user =['Gaurav','avi','vishal','vaibhav']
  user_details=[
    {name:'gaurav',id:48,address:"kolgaon",email:"g@gmail.com"},
    {name:'avi',id:37,address:"sangamnar",email:"a@gmail.com"},
    {name:'vishal',id:10,address:"nagar",email:"s@gmail.com"},
    {name:'vaibhav',id:483,address:"pune",email:"v@gmail.com"},
  ]

  // ngSwitch example :
  title1='ngSwitch'
  color='greensd';

  // ngif example;
  show=false;
  title3='ngIf'

  // handle event using btn:
  clicked: boolean = false;

  handleClick() {
    this.clicked = true;
}

}
