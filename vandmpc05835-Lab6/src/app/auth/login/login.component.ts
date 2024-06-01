import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/@core/services/api/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthService
  ){}
    ngOnInit():void {
      this.loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
        
      });
  }
  
onSubmit():void {
  console.log(this.loginForm);
  if(this.loginForm.valid)
    this.authService.login(this.loginForm.value).pipe().subscribe({
  next: this.handleLoginSuccess.bind(this), 
  error: this.handleLoginFailed.bind(this)
})
}
protected handleLoginSuccess(res) {

}

protected handleLoginFailed() {

}
}
