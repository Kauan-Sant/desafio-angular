import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getVehicles().subscribe({
      next: (res) => this.vehicles = res,
      error: (err) => console.error('Erro ao buscar veículos:', err)
    });
  }
}
