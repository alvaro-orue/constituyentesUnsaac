import { Component } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userData: any;
  isDataLoaded = false; // Bandera para verificar si los datos del usuario están disponibles
  constructor(public authService: FirebaseService) {}
  ngOnInit() {
    // Llamamos a la función getUserData del servicio para obtener los datos del usuario actualmente logueado
    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
      this.isDataLoaded = true; // Marcar los datos como cargados una vez que se obtienen
    });
  }
  updatedUser: any = {};

}
