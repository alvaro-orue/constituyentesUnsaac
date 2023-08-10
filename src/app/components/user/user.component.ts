import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form:FormGroup;
  userData: any;
  constructor(public authService:FirebaseService,public router:Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })

  }

  ngOnInit() {
    this.authService.getUserData().subscribe((data) => {
      this.userData = data;
    });
  }

  updateUserProfile() {
    // const userData = this.authService.userData; // Obtenemos los datos del usuario actualmente logueado
    const dataToUpdate = {
      name: this.userData.name,
      semester: this.userData.semester,
      career: this.userData.career,
      college: this.userData.college
    };

    // Llamamos a la función UpdateUser del servicio para actualizar los datos del usuario
    this.authService.UpdateUser(dataToUpdate)
      .then((response) => {

        console.log('Perfil actualizado exitosamente');
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {

        console.error('Error al actualizar el perfil:', error);
      });
  }

}
