import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })

  }

  login(form: any){
    console.log(form)
     this.loginService.login(form.controls.values).subscribe(result =>{
      if(result){
        this.onRedirect("home");
        console.log("login")
      }
    });
  }

  onRedirect(rota: string){
    this.router.navigateByUrl(rota);
  }

}
