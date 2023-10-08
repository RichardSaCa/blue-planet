import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import  SwiperOptions from 'swiper';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {


  esti: string = "hidden";
  titulo: string = "";
  constructor() { }
  estilos={
    "visibility": this.esti,
  }

  estiloDivCauca={
    "visibility": this.esti,
  }

  ngOnInit(): void {
    this.titulo="Río Cauca";
  }

  mostrarCauca(){
    console.log("enra")
    this.titulo="Río Cauca";
    this.esti = "visible";
    this.estilos["visibility"]=this.esti;
  }

  mostrarCaucaCuriosidad(){
    this.esti = "visible";
    this.estiloDivCauca["visibility"]=this.esti;
  }

  mostrarMagdalena(){
    this.titulo="Río Magdalena";
    this.esti = "hidden";
    this.estilos["visibility"]=this.esti;
  }

  title = 'Como usar el Componente Google Maps de Angular 9';


  // Configuración de Google Maps
  center = {lat: 2.466645, lng: -76.615728};
  zoom = 13;
  display?: google.maps.LatLngLiteral;


}
