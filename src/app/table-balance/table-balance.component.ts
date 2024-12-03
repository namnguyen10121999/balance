import { NgFor } from '@angular/common';
import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface Member {
  name: string;
  role: string;
  year: number;
  wfh: number;
  intleave: number;
  intWFH: number;
  anleave: number;
  matleave: number;
  wedding: number;
  berleave: number;
  materleave: number;
}

@Component({
  selector: 'app-table-balance',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table-balance.component.html',
  styleUrls: ['./table-balance.component.css']
})
export class TableBalanceComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'role',
    'year',
    'wfh',
    'intleave',
    'intWFH',
    'anleave',
    'matleave',
    'wedding',
    'berleave',
    'materleave'
  ];

  datasource = new MatTableDataSource<Member>([
    { name: 'Nam Nguyen', role: 'User', year: 2024, wfh: 21.5, intleave: 180, intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7 },
    { name: 'Bao Nguyen', role: 'Admin', year: 2024, wfh: 10 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Tung Thanh', role: 'Document Writer', year: 2024, wfh: 15 , intleave: 180,intWFH: 144, anleave: 141, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Sang Tran', role: 'Leader', year: 2024, wfh: 21.5 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Bao Uyen', role: 'User', year: 2024, wfh: 24 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Minh Khai', role: 'User', year: 2024, wfh: 18 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Thanh Truc', role: 'User', year: 2024, wfh: 24 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Minh Khoi', role: 'Leader', year: 2024, wfh: 14 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Thu Le', role: 'User', year: 2024, wfh: 19 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Huyen Nguyen', role: 'Super Admin', year: 2024, wfh: 20 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Long Tran', role: 'User', year: 2024, wfh: 30 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Duc Nguyen', role: 'User', year: 2024, wfh: 10 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Hoang Khang', role: 'PM', year: 2024, wfh: 9.5 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Sang Le', role: 'User', year: 2024, wfh: 1.5 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Nhat Nguyen', role: 'User', year: 2024, wfh: 16 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Nam Tran', role: 'Document Writer', year: 2024, wfh: 14 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Tung Tran', role: 'User', year: 2024, wfh: 3 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Bao Le', role: 'Super Admin', year: 2024, wfh: 17 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Quang Le', role: 'User', year: 2024, wfh: 40 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'To Nhu', role: 'QA', year: 2024, wfh: 10 , intleave: 180,intWFH: 144, anleave: 115, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    // You can add any initialization logic here if necessary.
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.datasource.filter = filterValue;
  }

  currentPage = 1; // Trang hiện tại
  itemsPerPage = 5; // Số phần tử mỗi trang

  // Lấy danh sách phân trang
  get paginatedMembers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.datasource.filteredData.slice(startIndex, endIndex);
  }
}
