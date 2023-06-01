import { Component, OnInit } from '@angular/core';
import { Farm } from '../../Farm';
import { FarmService } from '../../FarmService';

@Component({
  selector: 'app-farm-list-component',
  templateUrl: './farm-list-component.component.html',
  styleUrls: ['./farm-list-component.component.css']
})
export class FarmListComponentComponent implements OnInit {
  farms: Farm[] = [];

  constructor(private farmService: FarmService) {}

  ngOnInit(): void {
    this.getAllFarms();
  }

  private getAllFarms() {
    this.farmService.getAllFarms().subscribe(data => {
      this.farms = data;
    });
  }
}
