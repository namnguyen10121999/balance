import { CommonModule, NgFor } from '@angular/common';
import { OnInit, Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { MatIconModule } from '@angular/material/icon';

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
  imports: [NgFor,MatTableModule, MatPaginatorModule,MatSelectModule, MatFormFieldModule,MatSortModule,MatIconModule, FormsModule,CommonModule],
  templateUrl: './table-balance.component.html',
  styleUrl: './table-balance.component.css'
})
export class TableBalanceComponent implements OnInit, AfterViewInit {
  sortDirection: 'asc' | 'desc' | 'none' = 'none';
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
    { name: 'Bao Nguyen', role: 'Admin', year: 2019, wfh: 10 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Tung Thanh', role: 'Document Writer' , year: 2019, wfh: 15 , intleave: 180,intWFH: 144, anleave: 141, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Sang Tran', role: 'Leader' , year: 2022, wfh: 21.5 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Bao Uyen', role: 'User' , year: 2023, wfh: 24 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Minh Khai', role: 'User' , year: 2025, wfh: 18 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Thanh Truc', role: 'User' , year: 2024, wfh: 24 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Minh Khoi', role: 'Leader' , year: 2024, wfh: 14 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Thu Le', role: 'User' , year: 2024, wfh: 19 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Huyen Nguyen', role: 'Super Admin' , year: 2022, wfh: 20 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Long Tran', role: 'User' , year: 2024, wfh: 30 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Duc Nguyen', role: 'User' , year: 2024, wfh: 10 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Hoang Khang', role: 'PM' , year: 2023, wfh: 9.5 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Sang Le', role: 'User' , year: 2024, wfh: 1.5 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Nhat Nguyen', role: 'User' , year: 2024, wfh: 16 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Nam Tran', role: 'Document Writer' , year: 2023, wfh: 14 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Tung Tran', role: 'User' , year: 2024, wfh: 3 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Bao Le', role: 'Super Admin' , year: 2024, wfh: 17 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'Quang Le', role: 'User' , year: 2024, wfh: 40 , intleave: 180,intWFH: 144, anleave: 144, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
    { name: 'To Nhu', role: 'QA' , year: 2024, wfh: 10 , intleave: 180,intWFH: 144, anleave: 115, matleave: 0, wedding: 0, berleave: 0, materleave: 7},
  ]);

  toggleSortOrder() {
    if (this.sortDirection === 'none' || this.sortDirection === 'desc') {
      this.sortDirection = 'asc';  // Đổi thành sắp xếp tăng dần
    } else if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc'; // Đổi thành sắp xếp giảm dần
    }

    this.sortMembers();  // Sắp xếp lại dữ liệu sau khi thay đổi thứ tự
  }

  // Hàm sắp xếp dữ liệu
  sortMembers() {
    if (this.sortDirection === 'asc') {
      this.datasource.data.sort((a, b) => a.name.localeCompare(b.name)); // Sắp xếp theo tên tăng dần
    } else if (this.sortDirection === 'desc') {
      this.datasource.data.sort((a, b) => b.name.localeCompare(a.name)); // Sắp xếp theo tên giảm dần
    }
  }

  filterOptions = ['TEAM', 'EMPLOYEE', 'YEAR', 'USER STATUS'];
  selectedFilter: string = '';
  role = ['User', 'Admin', 'QA', 'Document Writer'];
  employees = this.datasource.data.map(member => member.name);
  years = Array.from(new Set(this.datasource.data.map(member => member.year))); // Unique years

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  paginatedMembers: Member[] = [];
  itemsPerPage = 10;

  ngOnInit(): void {
    this.paginatedMembers = this.datasource.filteredData.slice(0, this.itemsPerPage);
  }

  ngAfterViewInit(): void {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;

    this.datasource.filterPredicate = (data: Member, filter: string): boolean => {
      const lowerFilter = filter.toLowerCase();
      switch (this.selectedFilter) {
        case 'ROLE':
          return data.role.toLowerCase().includes(lowerFilter);
        case 'EMPLOYEE':
          return data.name.toLowerCase().includes(lowerFilter);
        case 'YEAR':
          return data.year.toString() === filter;
        default:
          return Object.values(data).some((value) =>
            value.toString().toLowerCase().includes(lowerFilter)
          );
      }
    };
  }

  sortData(sort: Sort): void{
    const data = this.datasource.data.slice();
    if (!sort.active || sort.direction === '') {
      return;  // Nếu không có hướng sắp xếp, không làm gì cả
    }

    // Kiểm tra nếu đang sắp xếp theo cột đã chọn và hướng sắp xếp là desc, chuyển sang none
    if (sort.direction === 'asc') {
      this.datasource.data = data.sort((a, b) => this.compare(a.name, b.name, true));
    } else if (sort.direction === 'desc') {
      this.datasource.data = data.sort((a, b) => this.compare(a.name, b.name, false));
    } else {
      this.datasource.data = data;  // Trả về trạng thái ban đầu nếu không sắp xếp
    }
  }
  compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : a > b ? 1 : 0) * (isAsc ? 1 : -1);  // So sánh dữ liệu theo chiều tăng dần hoặc giảm dần
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.datasource.filter = filterValue;
    this.calculateTotalPages();
    this.updatePaginatedMembers();
  }

  applySearch(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.datasource.filter = filterValue;
    this.calculateTotalPages();
    this.updatePaginatedMembers();
    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  applyTeamFilter(event: MatSelectChange): void {
    const selectedYear = event.value;
    // Lọc dữ liệu theo năm đã chọn
    this.datasource.filterPredicate = (data: Member, filter: string): boolean => {
      return data.year.toString() === filter;
    };

    // Thiết lập bộ lọc cho dữ liệu
    this.datasource.filter = selectedYear.toString();

    // Cập nhật lại phân trang
    this.paginator.pageIndex = 0; // Reset phân trang về trang đầu tiên
    this.updatePaginatedMembers();
  }

  getFilterOptions(filter: string): any[] {
    switch (filter) {
      case 'EMPLOYEE':
        return this.employees;
      case 'YEAR':
        return this.years;
      case 'ROLE':
        return this.role;
      default:
        return [];
    }
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedMembers = this.datasource.filteredData.slice(startIndex, endIndex);
  }

  onFilterChange(): void {
    this.datasource.filter = ''; // Reset the filter
  }

  updatePaginatedMembers(): void {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  const endIndex = startIndex + this.paginator.pageSize;
  this.paginatedMembers = this.datasource.filteredData.slice(startIndex, endIndex);
  }

  applyCombinedFilter(event: MatSelectChange): void {
    const filterValue = event.value.trim();
    this.datasource.filter = filterValue;
    this.calculateTotalPages();
    this.updatePaginatedMembers();
    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  // Lấy tổng số thành viên trong danh sách
  get totalMembers(): number { 
    return this.datasource.filteredData.length;
  }

  pageSize = 5;
  totalPages: number = 0;
  showFirstLastButtons = true;
  currentPage = 1;

  constructor(){
    this.calculateTotalPages();
  }

  calculateTotalPages(){
    const totalMembers = this.datasource.filteredData.length;
    this.totalPages = Math.ceil(totalMembers / this.pageSize);
  }

  gotoPage(page: number){
    this.currentPage = page;

    this.updatePaginatedMembers();
  }

  getPageNumbers(){
    return Array.from({ length:this.totalPages}, (_,i) => i + 1);
  }
}
