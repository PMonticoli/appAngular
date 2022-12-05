import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/models/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  @Input() id : string;
  perfil : Perfil;
  actividades : string [];

  private suscripcion = new Subscription();

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.cargarPerfil();
  }

  cargarPerfil(){
    this.suscripcion.add(
      this.usuarioService.obtenerPerfilActividad(this.id).subscribe({
        next:(perfil : Perfil)=> {
          this.perfil = perfil;
          this.actividades = perfil.actividades;
        },
        error: ()=>{
          alert('Error con las actividades');
        }
      })
    )
  }

}
