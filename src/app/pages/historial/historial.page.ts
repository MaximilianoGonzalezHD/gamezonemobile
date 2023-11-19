import { Component, OnInit } from '@angular/core';
import { DbservicioService } from 'src/app/services/dbservicio.service';
import { Router } from '@angular/router';
import { DetalleCompra } from '../../interfaces/Detallecompra';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  totalCompra: number = 0;
  detalles = [{
    nombrev: '',
    descripcion: '',
    cantidad: '',
    imagenv: '',
    precio: '',
    subtotal: 0,
    totalc: 0,
    fechac: '',
    seccion_id: '',
    rutc: '',
    usuario_id: '',
    slug: '',
    videojuego_id: '',
    id_juego: '',
    id_detallesc: '',
    id_comprac: '',
    compra_id: '',
    }
  ]
  userId: string | null | number;

  constructor(private bd: DbservicioService, private router: Router) {
    this.userId = localStorage.getItem('userId');
  }
  async ngOnInit() {
    try {
        this.detalles = await this.bd.obtenerDetallesCompraPorId(this.userId);
        console.log('Detalles con juegos:', this.detalles);

    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  }
}
  
