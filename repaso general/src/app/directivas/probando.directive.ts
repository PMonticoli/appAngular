import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProbando]'
})
export class ProbandoDirective {
  private readonly colores =[
    'red',
    'borwn',
    'yellow',
    'blue'
  ]

  constructor(private elemento: ElementRef) { }
 
  @HostListener('click')
  onClick() {
      this.elemento.nativeElement.style.background = 'red';
  }
  // @HostListener('click')
  // onClick(){
  //   let colorIndex = Math.round(Math.random() *
  //   (this.colores.length) -1)
  //   this.elemento.nativeElement.style.color = this.colores[colorIndex];
  // }


}
