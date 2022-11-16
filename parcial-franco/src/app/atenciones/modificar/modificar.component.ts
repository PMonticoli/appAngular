import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Atencion } from 'src/app/models/atencion.model';
import { Especialidad } from 'src/app/models/especialidad.model';
import { Medico } from 'src/app/models/medico.model';

import { AtencionService } from 'src/app/services/atencion.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { MedicoService } from 'src/app/services/medico.service';
import { AtencionValidator } from 'src/app/validators/atencion.validator';

@Component({
    selector: 'app-modificar',
    templateUrl: './modificar.component.html',
    styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
    formulario: FormGroup;
    atencion: Atencion;
    especialidades: Especialidad[];
    medicos: Medico[];

    private subscription = new Subscription();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private especialidadService: EspecialidadService,
        private atencionService: AtencionService,
        private medicoService: MedicoService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.formulario = this.formBuilder.group({
            id: [],
            paciente: [, Validators.required],
            documento: [],
            costo: [, Validators.required],
            especialidadId: [, Validators.required],
            medicoId: [],
            fecha: [, Validators.required, AtencionValidator.existenMasDeTresConFecha(this.atencionService)],
        })
        this.subscription.add(
            this.especialidadService.obtener().subscribe({
                next: (respuesta) => (this.especialidades = respuesta),
                error: () => {
                    alert('Error al obtener las especialidades');
                },
            })
        );
        this.formulario.controls['especialidadId'].valueChanges.subscribe(x => {
            this.subscription.add(
                this.medicoService.obtenerPorEspecialidad(x).subscribe({
                    next: (resultado: Medico[]) => {
                        this.medicos = resultado;
                    },
                    error: (e) => {
                        console.error(e);
                    }
                })
            )
        })
        const id = this.activatedRoute.snapshot.params['id'];

        this.subscription.add(
            this.atencionService.obtenerPorId(id).subscribe({
                next: (respuesta) => {
                    this.atencion = respuesta as Atencion;
                    this.formulario.patchValue(this.atencion);
                },
                error: () => alert('Error al obtener la atención'),
            })
        );
    }

    guardar() {
        if (this.formulario.invalid) {
            return;
        }
        this.subscription.add(
            this.atencionService.guardar(this.formulario.value).subscribe({
                next: () => {
                    alert('Atención guardada con éxito');
                    this.router.navigate(['listado']);
                },
                error: () => {
                    alert('Ocurrió un error al guardar la atención');
                },
            })
        );
    }
    get controlFecha(): FormControl {
        return this.formulario.controls['fecha'] as FormControl;
    }
}

