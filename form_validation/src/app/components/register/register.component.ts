import { Component,OnInit } from '@angular/core';
import  { FormControl,FormGroup} from '@angular/forms'
// import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  // constructor() {}
  ngOnInit(): void {

  }

  registerform = new FormGroup({
    firstname : new FormControl("Gaurav"),
    lastname : new FormControl("Lagad"),
    email: new FormControl("a@gmail.com"),
    mobile : new FormControl("8669"),
    gender : new FormControl(""),
    password : new FormControl(""),
    repeatpassword: new FormControl("")

  });
}
