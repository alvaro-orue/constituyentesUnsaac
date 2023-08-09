import {Component} from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  users: any[] = [];
  isDataLoaded = false; // Band
  constructor(public authService: FirebaseService) {
    this.authService.getAllUsers().subscribe(users => {
      this.users = users;
      this.isDataLoaded = true; // Marcar los datos como cargados una vez que se obtienen

    });
  }

  ngOnInit(): void {
  }

  updateUserRole(user: any) {
    this.authService.updateUserRole(user.uid, user.role)
      .then(() => {
          // alert('Rol de usuario actualizado correctamente');
          console.log('Rol de usuario actualizado correctamente');
        })
      .catch((error) => {
          // alert('Error al actualizar el rol de usuario');
          console.log('Error al actualizar el rol de usuario')
        })
  }
}
