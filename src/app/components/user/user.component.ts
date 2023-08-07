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
  constructor(public authService:FirebaseService,public router:Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })

  }

  ngOnInit() {
  }

  updateUserProfile() {
    const userData = this.authService.userData; // Obtenemos los datos del usuario actualmente logueado
    const dataToUpdate = {
      name: userData.name,
      semester: userData.semester,
      career: userData.career,
      college: userData.college
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

  // async onSubmit() {
  //   const response = await this.userService.postUser(this.form.value);
  //   console.log(response);
  // }

}
