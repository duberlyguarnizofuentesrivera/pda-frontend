import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {Admin} from "../../model/admin";

@Component({
  selector: 'app-admin-manage-admins',
  templateUrl: './admin-manage-admins.component.html',
  styleUrls: ['./admin-manage-admins.component.css']
})
export class AdminManageAdminsComponent implements OnInit {

  admins: Admin[] = [];
  isVisible: boolean = false;
  selectedAdminDetail: number = 0;

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  getAllAdmins() {
    this.adminService.getAdmins().subscribe((data: Admin[]) => {
      this.admins = data;
      console.log(data);
    });
  }

  setModalVisible(id: number) {
    this.isVisible = true;
    this.selectedAdminDetail = id - 1;
  }

  hideModal() {
    this.isVisible = false;
  }

}
