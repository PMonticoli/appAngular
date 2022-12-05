import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Perfil } from 'src/app/models/perfil';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css']
})
export class VistaPerfilComponent implements OnInit {
  perfil: Perfil;

  constructor(private usuarioService: UsuarioService,
              private router : Router) { }

  ngOnInit(): void {
    const id = Math.round(Math.random() * (15 - 1) + 1);

    this.usuarioService.obtenerPerfil(id).subscribe({
      next: (respuesta: Perfil) => {
        this.perfil = respuesta;
      },
      error: () => {
        alert('Error al obtener el perfil');
      }
    })
  }

  modificar(id: string){
    this.router.navigate(['modificar',id])
  }
}
