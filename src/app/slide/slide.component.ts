import { Component, OnInit,ViewChild } from '@angular/core';
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


  // center: google.maps.LatLngLiteral = { lat: 2.463302, lng: -76.588921 };
  // zoom = 13;
  // mapOptions: google.maps.MapOptions = {
  //   mapTypeId: 'roadmap',
  // };

markerPositions1: google.maps.LatLngLiteral[] = [{ lat: 1.78843370, lng:  -76.4925330},
                                                { lat: 2.463302, lng: -76.588921 },
                                                { lat: 2.921619, lng: -76.713438 },
                                                { lat: 3.205501, lng: -76.494269, }];


  // // Define el icono personalizado
  // customIcon: google.maps.Icon = {
  //   url: 'https://cdn.icon-icons.com/icons2/1808/PNG/512/info_115118.png', // Reemplaza con la URL de tu icono personalizado
  //   scaledSize: new google.maps.Size(64, 64), // Tamaño del icono
  // };
  //                                                 // Función que se ejecutará cuando se haga clic en el mapa
  // onMapClick(event: google.maps.MapMouseEvent) {
  //   const latLng = event.latLng; // Obtiene las coordenadas del clic

  //   // Verifica que latLng no sea undefined antes de agregarlo a markerPositions
  //   if (latLng) {
  //     this.markerPositions.push({ lat: latLng.lat(), lng: latLng.lng() });
  //   }
  // }


  @ViewChild('map', { static: false }) map: any; // Obtén una referencia al mapa

  center: google.maps.LatLngLiteral = { lat:  2.463302, lng: -76.588921};
  zoom = 13;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
  };


  markerPositions: { position: google.maps.LatLngLiteral, label: string , customIcon: google.maps.Icon}[] = [
    { position: { lat: 1.78843370, lng:  -76.4925330 },
      label: 'NACIMIENTO',
      customIcon: {url: 'https://cdn.icon-icons.com/icons2/1808/PNG/512/info_115118.png',
      scaledSize: new google.maps.Size(64, 64),
      labelOrigin: new google.maps.Point(16, -8), }
    },
    { position: { lat: 2.463302, lng: -76.588921 },
      label: 'POR POPAYÁN',
      customIcon: {url: 'https://cdn.icon-icons.com/icons2/1808/PNG/512/info_115118.png',
      scaledSize: new google.maps.Size(64,64 ),
      labelOrigin: new google.maps.Point(16, -8), }
    },
    { position: { lat: 2.921619, lng: -76.713438},
    label: 'REPRESA SALVAJINA',
    customIcon: {url: 'https://cdn.icon-icons.com/icons2/1808/PNG/512/info_115118.png',
    scaledSize: new google.maps.Size(64, 64),
    labelOrigin: new google.maps.Point(16, -8), }
  },
    { position: { lat: 3.205501, lng: -76.494269 },
    label: 'VALLE DEL CAUCA',
    customIcon: {url: 'https://cdn.icon-icons.com/icons2/1808/PNG/512/info_115118.png',
    scaledSize: new google.maps.Size(64, 64),
    labelOrigin: new google.maps.Point(16, -8), } },
  ];



}
