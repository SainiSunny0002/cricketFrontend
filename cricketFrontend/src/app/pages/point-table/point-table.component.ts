import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit {
  constructor(private _api:ApiCallService){}

  pointTableData:any;
  tableHeading:any;

  ngOnInit(): void {
    this.pointTable();
  }

  private pointTable() {
    this._api.getPointTable().subscribe({
      next: data => {
        this.pointTableData = data;
        this.tableHeading = [...this.pointTableData[0]];
        
      },
      error: error => {
        console.log(error);

      }
    });
  }
}
