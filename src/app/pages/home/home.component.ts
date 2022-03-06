import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  logged: any = localStorage.getItem('user_email')
  @Output() emailEmitter = new EventEmitter<any>();

  constructor(private auth: AuthService, private router: Router) {  
  }

  logout(): any {
    this.auth.logout().then(() => {
      localStorage.removeItem('user_email');
      this.router.navigate(['/login'])
    });
      
  }

  ngOnInit(): void {    
   
  }

}
