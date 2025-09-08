import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss'],
standalone: true
})
export class LoginComponent {
email = '';
password = '';
loading = false;
error = '';


constructor(private auth: AuthService, private router: Router) {}


submit() {
this.loading = true;
this.error = '';
this.auth.login(this.email, this.password).subscribe({
next: () => {
this.loading = false;
this.router.navigateByUrl('/tickets');
},
error: (err) => {
this.loading = false;
this.error = err?.error?.message || 'Erro ao autenticar';
}
});
}
}