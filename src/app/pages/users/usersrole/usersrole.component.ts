
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { AppSettings } from '../../../app.settings';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../users.service';
import { AlertService } from 'ngx-alerts';
import { CompanyService } from '../../../pages/companys/company.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-usersrole',
  templateUrl: './usersrole.component.html',
  styleUrls: ['./usersrole.component.scss']
})
export class UsersroleComponent implements OnInit {
  userRoleForm: FormGroup;
  comany_id: any;
  settings: any;
  editable: Boolean = false;
  role_id: any;
  //================role name====================
  can_access_user_add: boolean = false;
  can_access_user_view: boolean = false;
  can_access_user_update: boolean = false;
  can_access_user_delete: boolean = false;

  can_access_role_add: boolean = false;
  can_access_role_view: boolean = false;
  can_access_role_update: boolean = false;
  can_access_role_delete: boolean = false;

  can_access_enquiry_add: boolean = false;
  can_access_enquiry_view: boolean = false;
  can_access_enquiry_update: boolean = false;
  can_access_enquiry_delete: boolean = false;

  can_access_lead_add: boolean = false;
  can_access_lead_view: boolean = false;
  can_access_lead_update: boolean = false;
  can_access_lead_delete: boolean = false;

  can_access_client_add: boolean = false;
  can_access_client_view: boolean = false;
  can_access_client_delete: boolean = false;
  can_access_client_update: boolean = false;

  can_access_task_add: boolean = false;
  can_access_task_view: boolean = false;
  can_access_task_update: boolean = false;
  can_access_task_delete: boolean = false;

  can_access_country_add: boolean = false;
  can_access_country_view: boolean = false;
  can_access_country_update: boolean = false;
  can_access_country_delete: boolean = false;

  can_access_region_add: boolean = false;
  can_access_region_view: boolean = false;
  can_access_region_update: boolean = false;
  can_access_region_delete: boolean = false;

  can_access_city_add: boolean = false;
  can_access_city_view: boolean = false;
  can_access_city_update: boolean = false;
  can_access_city_delete: boolean = false;

  can_access_team_managemet_add: boolean = false;
  can_access_team_managemet_view: boolean = false;
  can_access_team_managemet_update: boolean = false;
  can_access_team_managemet_delete: boolean = false;

  can_access_data_source_add: boolean = false;
  can_access_data_source_view: boolean = false;
  can_access_data_source_update: boolean = false;
  can_access_data_source_delete: boolean = false;

  can_access_compaing_list_add: boolean = false;
  can_access_compaing_list_view: boolean = false;
  can_access_compaing_list_update: boolean = false;
  can_access_compaing_list_delete: boolean = false;

  can_access_assing_compaing_add: boolean = false;
  can_access_assing_compaing_view: boolean = false;
  can_access_assing_compaing_update: boolean = false;
  can_access_assing_compaing_delete: boolean = false;

  can_access_stage_add: boolean = false;
  can_access_stage_view: boolean = false;
  can_access_stage_update: boolean = false;
  can_access_stage_delete: boolean = false;

  can_access_discription_add: boolean = false;
  can_access_discription_view: boolean = false;
  can_access_discription_update: boolean = false;
  can_access_discription_delete: boolean = false;

  can_access_lead_probabliti_add: boolean = false;
  can_access_lead_probabliti_view: boolean = false;
  can_access_lead_probabliti_update: boolean = false;
  can_access_lead_probabliti_delete: boolean = false;

  can_access_drop_resion_add: boolean = false;
  can_access_drop_resion_view: boolean = false;
  can_access_drop_resion_update: boolean = false;
  can_access_drop_resion_delete: boolean = false;

  can_access_enquiry_type_add: boolean = false;
  can_access_enquiry_type_view: boolean = false;
  can_access_enquiry_type_update: boolean = false;
  can_access_enquiry_type_delete: boolean = false;

  can_access_enquiry_source_add: boolean = false;
  can_access_enquiry_source_view: boolean = false;
  can_access_enquiry_source_update: boolean = false;
  can_access_enquiry_source_delete: boolean = false;

  can_access_QrCode_add: boolean = false;
  can_access_QrCode_view: boolean = false;
  can_access_QrCode_update: boolean = false;
  can_access_QrCode_delete: boolean = false;

  can_access_target_add: boolean = false;
  can_access_target_view: boolean = false;
  can_access_target_update: boolean = false;
  can_access_target_delete: boolean = false;

  can_access_forcast_add: boolean = false;
  can_access_forcast_view: boolean = false;
  can_access_forcast_update: boolean = false;
  can_access_forcast_delete: boolean = false;

  can_access_email_add: boolean = false;
  can_access_email_view: boolean = false;
  can_access_email_update: boolean = false;
  can_access_email_delete: boolean = false;

  can_access_sms_add: boolean = false;
  can_access_sms_view: boolean = false;
  can_access_sms_update: boolean = false;
  can_access_sms_delete: boolean = false;

  can_access_report_add: boolean = false;
  can_access_report_view: boolean = false;
  can_access_report_update: boolean = false;
  can_access_report_delete: boolean = false;

  user_role: any
  parent_id: any
  function: any
  ///==============================================
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'option'];
  dataSource: any;
  add_role_enamable: Boolean = false;
  alluser_role: any;
  all_comapny: any;
  user_active: Boolean = false;
  enquiry: Boolean = false;
  User_role: Boolean = false;
  User_active: Boolean = false;
  lead: Boolean = false;
  task: Boolean = false;
  country: Boolean = false;
  region: Boolean = false;
  city: Boolean = false;
  User: Boolean = false;
  team_management: Boolean = false;
  client: Boolean = false;
  enquiry_type: Boolean = false;
  data_source: Boolean = false;
  compaing_list: Boolean = false;
  assing_compaing: Boolean = false;
  stage: Boolean = false;
  discription: Boolean = false;
  lead_probabliti: Boolean = false;
  drop_resion: Boolean = false;
  enquiry_source: Boolean = false;
  super: Boolean = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  position: any;
  constructor(private formBuilder: FormBuilder, public appSettings: AppSettings,
    public router: Router, private UsersService: UsersService, private alertService: AlertService,
    private CompanyService: CompanyService, private Location: Location) {
    this.settings = this.appSettings.settings;
    this.initForm();
  }

  ngOnInit() {
    this.get_role();
    this.get_comany();
    this.get_me();
  }

  get_role() {
    this.UsersService.get_role().subscribe((res: any) => {
      console.log(res)
      this.alluser_role = res;
      // this.UsersService.user_activity({ routes: "/users/role", activity: "Get User Role" }).subscribe(res => {
      // })
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;
    })
  }

  get_me() {
    this.UsersService.get_me().subscribe((doc: any) => {
      // if(doc.data.position)
      console.log(doc.data.position._id)
      if (doc.data.position._id == "5e7df0fc894f5d5980a65143") {
        this.super = true;
      } else {
        this.super = false;
      }
      this.position = doc.data.position.privileges;
      console.log(this.position)
    })
  }

  get_comany() {
    this.UsersService.get_company().subscribe((res: any) => {
      this.all_comapny = res;
      console.log(this.all_comapny, '+++++++')
    })
  }

  initForm() {
    this.userRoleForm = this.formBuilder.group({
      user_role: [''],
      parent_id: [''],
      function: ['']
    })
  }

  redirectToDelete(id) {
    var x = confirm("Are you sure you want to delete?");
    if (x) {
      this.UsersService.delete_role(id).subscribe((res: any) => {
        if (res.errors == false) {
          console.log(res.message)
          this.ngOnInit()
        } else {
          alert(res.message)
          console.log(res.message)
        }
      })
    } else {
      return false;
    }
  }
  openUserDialog() {
    if (this.add_role_enamable == false) {
      this.add_role_enamable = true;
      this.reset_form();
    } else
      this.add_role_enamable = false;
  }
  edit_role(data, i) {
    console.log(data)
    this.role_id = data._id
    this.editable = true;
    this.add_role_enamable = true;
    if (!data.parent_id) {
      this.parent_id = data.parent_id;
    } else {
      this.parent_id = data.parent_id;
    }
    this.user_role = data.user_role,
      this.function = data.function,
      this.can_access_user_add = data.privileges.can_access_user_add
    this.can_access_user_view = data.privileges.can_access_user_view
    this.can_access_user_update = data.privileges.can_access_user_update
    this.can_access_user_delete = data.privileges.can_access_user_delete
    this.can_access_role_add = data.privileges.can_access_role_add
    this.can_access_role_view = data.privileges.can_access_role_view
    this.can_access_role_update = data.privileges.can_access_role_update
    this.can_access_role_delete = data.privileges.can_access_role_delete
    this.can_access_enquiry_add = data.privileges.can_access_enquiry_add
    this.can_access_enquiry_view = data.privileges.can_access_enquiry_view
    this.can_access_enquiry_update = data.privileges.can_access_enquiry_update
    this.can_access_enquiry_delete = data.privileges.can_access_enquiry_delete
    this.can_access_lead_add = data.privileges.can_access_lead_add
    this.can_access_lead_view = data.privileges.can_access_lead_view
    this.can_access_lead_update = data.privileges.can_access_lead_update
    this.can_access_lead_delete = data.privileges.can_access_lead_delete
    this.can_access_client_add = data.privileges.can_access_client_add
    this.can_access_client_view = data.privileges.can_access_client_view
    this.can_access_client_delete = data.privileges.can_access_client_delete
    this.can_access_client_update = data.privileges.can_access_client_update
    this.can_access_task_add = data.privileges.can_access_task_add
    this.can_access_task_view = data.privileges.can_access_task_view
    this.can_access_task_update = data.privileges.can_access_task_update
    this.can_access_task_delete = data.privileges.can_access_task_delete
    this.can_access_country_add = data.privileges.can_access_country_add
    this.can_access_country_view = data.privileges.can_access_country_view
    this.can_access_country_update = data.privileges.can_access_country_update
    this.can_access_country_delete = data.privileges.can_access_country_delete
    this.can_access_region_add = data.privileges.can_access_region_add
    this.can_access_region_view = data.privileges.can_access_region_view
    this.can_access_region_update = data.privileges.can_access_region_update
    this.can_access_region_delete = data.privileges.can_access_region_delete
    this.can_access_city_add = data.privileges.can_access_city_add
    this.can_access_city_view = data.privileges.can_access_city_view
    this.can_access_city_update = data.privileges.can_access_city_update
    this.can_access_city_delete = data.privileges.can_access_city_delete
    this.can_access_team_managemet_add = data.privileges.can_access_team_managemet_add
    this.can_access_team_managemet_view = data.privileges.can_access_team_managemet_view
    this.can_access_team_managemet_update = data.privileges.can_access_team_managemet_update
    this.can_access_team_managemet_delete = data.privileges.can_access_team_managemet_delete
    this.can_access_data_source_add = data.privileges.can_access_data_source_add
    this.can_access_data_source_view = data.privileges.can_access_data_source_view
    this.can_access_data_source_update = data.privileges.can_access_data_source_update
    this.can_access_data_source_delete = data.privileges.can_access_data_source_delete
    this.can_access_compaing_list_add = data.privileges.can_access_compaing_list_add
    this.can_access_compaing_list_view = data.privileges.can_access_compaing_list_view
    this.can_access_compaing_list_update = data.privileges.can_access_compaing_list_update
    this.can_access_compaing_list_delete = data.privileges.can_access_compaing_list_delete
    this.can_access_assing_compaing_add = data.privileges.can_access_assing_compaing_add
    this.can_access_assing_compaing_view = data.privileges.can_access_assing_compaing_view
    this.can_access_assing_compaing_update = data.privileges.can_access_assing_compaing_update
    this.can_access_assing_compaing_delete = data.privileges.can_access_assing_compaing_delete
    this.can_access_stage_add = data.privileges.can_access_stage_add
    this.can_access_stage_view = data.privileges.can_access_stage_view
    this.can_access_stage_update = data.privileges.can_access_stage_update
    this.can_access_stage_delete = data.privileges.can_access_stage_delete
    this.can_access_discription_add = data.privileges.can_access_discription_add
    this.can_access_discription_view = data.privileges.can_access_discription_view
    this.can_access_discription_update = data.privileges.can_access_discription_update
    this.can_access_discription_delete = data.privileges.can_access_discription_delete
    this.can_access_lead_probabliti_add = data.privileges.can_access_lead_probabliti_add
    this.can_access_lead_probabliti_view = data.privileges.can_access_lead_probabliti_view
    this.can_access_lead_probabliti_update = data.privileges.can_access_lead_probabliti_update
    this.can_access_lead_probabliti_delete = data.privileges.can_access_lead_probabliti_delete
    this.can_access_drop_resion_add = data.privileges.can_access_drop_resion_add
    this.can_access_drop_resion_view = data.privileges.can_access_drop_resion_view
    this.can_access_drop_resion_update = data.privileges.can_access_drop_resion_update
    this.can_access_drop_resion_delete = data.privileges.can_access_drop_resion_delete
    this.can_access_enquiry_type_add = data.privileges.can_access_enquiry_type_add
    this.can_access_enquiry_type_view = data.privileges.can_access_enquiry_type_view
    this.can_access_enquiry_type_update = data.privileges.can_access_enquiry_type_update
    this.can_access_enquiry_type_delete = data.privileges.can_access_enquiry_type_delete
    this.can_access_enquiry_source_add = data.privileges.can_access_enquiry_source_add
    this.can_access_enquiry_source_view = data.privileges.can_access_enquiry_source_view
    this.can_access_enquiry_source_update = data.privileges.can_access_enquiry_source_update
    this.can_access_enquiry_source_delete = data.privileges.can_access_enquiry_source_delete
    this.can_access_QrCode_add = data.privileges.can_access_QrCode_add
    this.can_access_QrCode_view = data.privileges.can_access_QrCode_view
    this.can_access_QrCode_update = data.privileges.can_access_QrCode_update
    this.can_access_QrCode_delete = data.privileges.can_access_QrCode_delete
  }

  onBookChange(data) {
    console.log(data)
    this.parent_id = data;
  }
  comany(data) {
    console.log(data)
    this.comany_id = data;
  }
  submit() {
    let obj = {
      user_role: this.user_role,
      parent_id: this.parent_id,
      function: this.function,
      company: this.comany_id,
      privileges: {
        can_access_user_add: this.can_access_user_add,
        can_access_user_view: this.can_access_user_view,
        can_access_user_update: this.can_access_user_update,
        can_access_user_delete: this.can_access_user_delete,

        can_access_role_add: this.can_access_role_add,
        can_access_role_view: this.can_access_role_view,
        can_access_role_update: this.can_access_role_update,
        can_access_role_delete: this.can_access_role_delete,

        can_access_enquiry_add: this.can_access_enquiry_add,
        can_access_enquiry_view: this.can_access_enquiry_view,
        can_access_enquiry_update: this.can_access_enquiry_update,
        can_access_enquiry_delete: this.can_access_enquiry_delete,

        can_access_lead_add: this.can_access_lead_add,
        can_access_lead_view: this.can_access_lead_view,
        can_access_lead_update: this.can_access_lead_update,
        can_access_lead_delete: this.can_access_lead_delete,

        can_access_client_add: this.can_access_client_add,
        can_access_client_view: this.can_access_client_view,
        can_access_client_delete: this.can_access_client_delete,
        can_access_client_update: this.can_access_client_update,

        can_access_task_add: this.can_access_task_add,
        can_access_task_view: this.can_access_task_view,
        can_access_task_update: this.can_access_task_update,
        can_access_task_delete: this.can_access_task_delete,

        can_access_country_add: this.can_access_country_add,
        can_access_country_view: this.can_access_country_view,
        can_access_country_update: this.can_access_country_update,
        can_access_country_delete: this.can_access_country_delete,

        can_access_region_add: this.can_access_region_add,
        can_access_region_view: this.can_access_region_view,
        can_access_region_update: this.can_access_region_update,
        can_access_region_delete: this.can_access_region_delete,

        can_access_city_add: this.can_access_city_add,
        can_access_city_view: this.can_access_city_view,
        can_access_city_update: this.can_access_city_update,
        can_access_city_delete: this.can_access_city_delete,

        can_access_team_managemet_add: this.can_access_team_managemet_add,
        can_access_team_managemet_view: this.can_access_team_managemet_view,
        can_access_team_managemet_update: this.can_access_team_managemet_update,
        can_access_team_managemet_delete: this.can_access_team_managemet_delete,

        can_access_data_source_add: this.can_access_data_source_add,
        can_access_data_source_view: this.can_access_data_source_view,
        can_access_data_source_update: this.can_access_data_source_update,
        can_access_data_source_delete: this.can_access_data_source_delete,

        can_access_compaing_list_add: this.can_access_compaing_list_add,
        can_access_compaing_list_view: this.can_access_compaing_list_view,
        can_access_compaing_list_update: this.can_access_compaing_list_update,
        can_access_compaing_list_delete: this.can_access_compaing_list_delete,

        can_access_assing_compaing_add: this.can_access_assing_compaing_add,
        can_access_assing_compaing_view: this.can_access_assing_compaing_view,
        can_access_assing_compaing_update: this.can_access_assing_compaing_update,
        can_access_assing_compaing_delete: this.can_access_assing_compaing_delete,

        can_access_stage_add: this.can_access_stage_add,
        can_access_stage_view: this.can_access_stage_view,
        can_access_stage_update: this.can_access_stage_update,
        can_access_stage_delete: this.can_access_stage_delete,

        can_access_discription_add: this.can_access_discription_add,
        can_access_discription_view: this.can_access_discription_view,
        can_access_discription_update: this.can_access_discription_update,
        can_access_discription_delete: this.can_access_discription_delete,

        can_access_lead_probabliti_add: this.can_access_lead_probabliti_add,
        can_access_lead_probabliti_view: this.can_access_lead_probabliti_view,
        can_access_lead_probabliti_update: this.can_access_lead_probabliti_update,
        can_access_lead_probabliti_delete: this.can_access_lead_probabliti_delete,

        can_access_drop_resion_add: this.can_access_drop_resion_add,
        can_access_drop_resion_view: this.can_access_drop_resion_view,
        can_access_drop_resion_update: this.can_access_drop_resion_update,
        can_access_drop_resion_delete: this.can_access_drop_resion_delete,

        can_access_enquiry_type_add: this.can_access_enquiry_type_add,
        can_access_enquiry_type_view: this.can_access_enquiry_type_view,
        can_access_enquiry_type_update: this.can_access_enquiry_type_update,
        can_access_enquiry_type_delete: this.can_access_enquiry_type_delete,

        can_access_enquiry_source_add: this.can_access_enquiry_source_add,
        can_access_enquiry_source_view: this.can_access_enquiry_source_view,
        can_access_enquiry_source_update: this.can_access_enquiry_source_update,
        can_access_enquiry_source_delete: this.can_access_enquiry_source_delete,

        can_access_QrCode_add: this.can_access_QrCode_add,
        can_access_QrCode_view: this.can_access_QrCode_view,
        can_access_QrCode_update: this.can_access_QrCode_update,
        can_access_QrCode_delete: this.can_access_QrCode_delete,

        can_access_target_add: this.can_access_target_add,
        can_access_target_view: this.can_access_target_view,
        can_access_target_update: this.can_access_target_update,
        can_access_target_delete: this.can_access_target_delete,

        can_access_forcast_add: this.can_access_forcast_add,
        can_access_forcast_view: this.can_access_forcast_view,
        can_access_forcast_update: this.can_access_forcast_update,
        can_access_forcast_delete: this.can_access_forcast_delete,

        can_access_report_add: this.can_access_report_add,
        can_access_report_view: this.can_access_report_view,
        can_access_report_update: this.can_access_report_update,
        can_access_report_delete: this.can_access_report_delete,

      }
    }
    if (this.editable == false) {
      this.UsersService.Create_role(obj).subscribe((doc: any) => {
        if (doc.errors == false) {
          this.alertService.success('This User Role Successfull Add')
          this.ngOnInit();
          this.add_role_enamable = false;
          this.reset_form()
        }
      })
    } else if (this.editable == true) {
      this.UsersService.update_role(this.role_id, obj).subscribe((res: any) => {
        if (res.errors == false) {
          this.alertService.success('this role is update Successfull.');
          this.add_role_enamable = false;
          this.ngOnInit();
          this.reset_form()
        } else
          this.alertService.warning('this role is not update.')
      })
    }
  }


  reset_form() {
    this.can_access_user_add = false;
    this.can_access_user_view = false;
    this.can_access_user_update = false;
    this.can_access_user_delete = false;

    this.can_access_role_add = false;
    this.can_access_role_view = false;
    this.can_access_role_update = false;
    this.can_access_role_delete = false;

    this.can_access_enquiry_add = false;
    this.can_access_enquiry_view = false;
    this.can_access_enquiry_update = false;
    this.can_access_enquiry_delete = false;

    this.can_access_lead_add = false;
    this.can_access_lead_view = false;
    this.can_access_lead_update = false;
    this.can_access_lead_delete = false;

    this.can_access_client_add = false;
    this.can_access_client_view = false;
    this.can_access_client_delete = false;
    this.can_access_client_update = false;

    this.can_access_task_add = false;
    this.can_access_task_view = false;
    this.can_access_task_update = false;
    this.can_access_task_delete = false;

    this.can_access_country_add = false;
    this.can_access_country_view = false;
    this.can_access_country_update = false;
    this.can_access_country_delete = false;

    this.can_access_region_add = false;
    this.can_access_region_view = false;
    this.can_access_region_update = false;
    this.can_access_region_delete = false;

    this.can_access_city_add = false;
    this.can_access_city_view = false;
    this.can_access_city_update = false;
    this.can_access_city_delete = false;

    this.can_access_team_managemet_add = false;
    this.can_access_team_managemet_view = false;
    this.can_access_team_managemet_update = false;
    this.can_access_team_managemet_delete = false;

    this.can_access_data_source_add = false;
    this.can_access_data_source_view = false;
    this.can_access_data_source_update = false;
    this.can_access_data_source_delete = false;

    this.can_access_compaing_list_add = false;
    this.can_access_compaing_list_view = false;
    this.can_access_compaing_list_update = false;
    this.can_access_compaing_list_delete = false;

    this.can_access_assing_compaing_add = false;
    this.can_access_assing_compaing_view = false;
    this.can_access_assing_compaing_update = false;
    this.can_access_assing_compaing_delete = false;

    this.can_access_stage_add = false;
    this.can_access_stage_view = false;
    this.can_access_stage_update = false;
    this.can_access_stage_delete = false;

    this.can_access_discription_add = false;
    this.can_access_discription_view = false;
    this.can_access_discription_update = false;
    this.can_access_discription_delete = false;

    this.can_access_lead_probabliti_add = false;
    this.can_access_lead_probabliti_view = false;
    this.can_access_lead_probabliti_update = false;
    this.can_access_lead_probabliti_delete = false;

    this.can_access_drop_resion_add = false;
    this.can_access_drop_resion_view = false;
    this.can_access_drop_resion_update = false;
    this.can_access_drop_resion_delete = false;

    this.can_access_enquiry_type_add = false;
    this.can_access_enquiry_type_view = false;
    this.can_access_enquiry_type_update = false;
    this.can_access_enquiry_type_delete = false;

    this.can_access_enquiry_source_add = false;
    this.can_access_enquiry_source_view = false;
    this.can_access_enquiry_source_update = false;
    this.can_access_enquiry_source_delete = false;

    this.can_access_QrCode_add = false;
    this.can_access_QrCode_view = false;
    this.can_access_QrCode_update = false;
    this.can_access_QrCode_delete = false;

    this.user_role = ''
    this.parent_id = ''
    this.function = ''
  }
  user_change() {
    if (this.can_access_user_add == false) {
      this.can_access_user_add = true
      this.can_access_user_view = true
      this.can_access_user_update = true
      this.can_access_user_delete = true
    } else {
      this.can_access_user_add = false
      this.can_access_user_view = false
      this.can_access_user_update = false
      this.can_access_user_delete = false
    }
  }
  userrole_change() {
    if (this.can_access_role_add == false) {
      this.can_access_role_add = true
      this.can_access_role_view = true
      this.can_access_role_update = true
      this.can_access_role_delete = true

    } else {
      this.can_access_role_add = false
      this.can_access_role_view = false
      this.can_access_role_update = false
      this.can_access_role_delete = false
    }
  }
  enquiry_change() {
    if (this.can_access_enquiry_add == false) {
      this.can_access_enquiry_add = true
      this.can_access_enquiry_view = true
      this.can_access_enquiry_update = true
      this.can_access_enquiry_delete = true
    } else {
      this.can_access_enquiry_add = false
      this.can_access_enquiry_view = false
      this.can_access_enquiry_update = false
      this.can_access_enquiry_delete = false
    }
  }
  lead_change() {
    if (this.can_access_lead_add == false) {
      this.can_access_lead_add = true
      this.can_access_lead_view = true
      this.can_access_lead_update = true
      this.can_access_lead_delete = true
    } else {
      this.can_access_lead_add = false
      this.can_access_lead_view = false
      this.can_access_lead_update = false
      this.can_access_lead_delete = false
    }
  }
  client_change() {
    if (this.can_access_client_add == false) {
      this.can_access_client_add = true
      this.can_access_client_view = true
      this.can_access_client_delete = true
      this.can_access_client_update = true
    } else {
      this.can_access_client_add = false
      this.can_access_client_view = false
      this.can_access_client_delete = false
      this.can_access_client_update = false
    }
  }
  task_change() {
    if (this.can_access_task_add == false) {
      this.can_access_task_add = true
      this.can_access_task_view = true
      this.can_access_task_update = true
      this.can_access_task_delete = true
    } else {
      this.can_access_task_add = false
      this.can_access_task_view = false
      this.can_access_task_update = false
      this.can_access_task_delete = false
    }
  }
  country_change() {
    if (this.can_access_country_add == false) {
      this.can_access_country_add = true
      this.can_access_country_view = true
      this.can_access_country_update = true
      this.can_access_country_delete = true
    } else {
      this.can_access_country_add = false
      this.can_access_country_view = false
      this.can_access_country_update = false
      this.can_access_country_delete = false
    }
  }
  region_change() {
    if (this.can_access_region_add == false) {
      this.can_access_region_add = true
      this.can_access_region_view = true
      this.can_access_region_update = true
      this.can_access_region_delete = true
    } else {
      this.can_access_region_add = false
      this.can_access_region_view = false
      this.can_access_region_update = false
      this.can_access_region_delete = false
    }
  }
  city_change() {
    if (this.can_access_city_add == false) {
      this.can_access_city_add = true
      this.can_access_city_view = true
      this.can_access_city_update = true
      this.can_access_city_delete = true
    } else {
      this.can_access_city_add = false
      this.can_access_city_view = false
      this.can_access_city_update = false
      this.can_access_city_delete = false
    }
  }
  team_mang_change() {
    if (this.can_access_team_managemet_add == false) {
      this.can_access_team_managemet_add = true
      this.can_access_team_managemet_view = true
      this.can_access_team_managemet_update = true
      this.can_access_team_managemet_delete = true
    } else {
      this.can_access_team_managemet_add = false
      this.can_access_team_managemet_view = false
      this.can_access_team_managemet_update = false
      this.can_access_team_managemet_delete = false
    }
  }
  data_sorc_change() {
    if (this.can_access_data_source_add == false) {
      this.can_access_data_source_add = true
      this.can_access_data_source_view = true
      this.can_access_data_source_update = true
      this.can_access_data_source_delete = true
    } else {
      this.can_access_data_source_add = false
      this.can_access_data_source_view = false
      this.can_access_data_source_update = false
      this.can_access_data_source_delete = false
    }
  }
  comp_list_change() {
    if (this.can_access_compaing_list_add == false) {
      this.can_access_compaing_list_add = true
      this.can_access_compaing_list_view = true
      this.can_access_compaing_list_update = true
      this.can_access_compaing_list_delete = true
    } else {
      this.can_access_compaing_list_add = false
      this.can_access_compaing_list_view = false
      this.can_access_compaing_list_update = false
      this.can_access_compaing_list_delete = false
    }
  }
  assing_comp_change() {
    if (this.can_access_assing_compaing_add == false) {
      this.can_access_assing_compaing_add = true
      this.can_access_assing_compaing_view = true
      this.can_access_assing_compaing_update = true
      this.can_access_assing_compaing_delete = true
    } else {
      this.can_access_assing_compaing_add = false
      this.can_access_assing_compaing_view = false
      this.can_access_assing_compaing_update = false
      this.can_access_assing_compaing_delete = false
    }
  }
  Stage_change() {
    if (this.can_access_stage_add == false) {
      this.can_access_stage_add = true
      this.can_access_stage_view = true
      this.can_access_stage_update = true
      this.can_access_stage_delete = true
    } else {
      this.can_access_stage_add = false
      this.can_access_stage_view = false
      this.can_access_stage_update = false
      this.can_access_stage_delete = false
    }
  }

  Description_change() {
    if (this.can_access_discription_add == false) {
      this.can_access_discription_add = true
      this.can_access_discription_view = true
      this.can_access_discription_update = true
      this.can_access_discription_delete = true
    } else {
      this.can_access_discription_add = false
      this.can_access_discription_view = false
      this.can_access_discription_update = false
      this.can_access_discription_delete = false
    }
  }
  lead_prob_change() {
    if (this.can_access_lead_probabliti_add == false) {
      this.can_access_lead_probabliti_add = true
      this.can_access_lead_probabliti_view = true
      this.can_access_lead_probabliti_update = true
      this.can_access_lead_probabliti_delete = true
    } else {
      this.can_access_lead_probabliti_add = false
      this.can_access_lead_probabliti_view = false
      this.can_access_lead_probabliti_update = false
      this.can_access_lead_probabliti_delete = false
    }
  }
  drop_reg_change() {
    if (this.can_access_drop_resion_add == false) {
      this.can_access_drop_resion_add = true
      this.can_access_drop_resion_view = true
      this.can_access_drop_resion_update = true
      this.can_access_drop_resion_delete = true
    } else {
      this.can_access_drop_resion_add = false
      this.can_access_drop_resion_view = false
      this.can_access_drop_resion_update = false
      this.can_access_drop_resion_delete = false
    }
  }
  enq_type_change() {
    if (this.can_access_enquiry_type_add == false) {
      this.can_access_enquiry_type_add = true
      this.can_access_enquiry_type_view = true
      this.can_access_enquiry_type_update = true
      this.can_access_enquiry_type_delete = true
    } else {
      this.can_access_enquiry_type_add = false
      this.can_access_enquiry_type_view = false
      this.can_access_enquiry_type_update = false
      this.can_access_enquiry_type_delete = false
    }
  }
  enq_sorc_change() {
    if (this.can_access_enquiry_source_add == false) {
      this.can_access_enquiry_source_add = true
      this.can_access_enquiry_source_view = true
      this.can_access_enquiry_source_update = true
      this.can_access_enquiry_source_delete = true
    } else {
      this.can_access_enquiry_source_add = false
      this.can_access_enquiry_source_view = false
      this.can_access_enquiry_source_update = false
      this.can_access_enquiry_source_delete = false
    }
  }
  qr_code_chnage() {
    if (this.can_access_QrCode_add == false) {
      this.can_access_QrCode_add = true
      this.can_access_QrCode_view = true
      this.can_access_QrCode_update = true
      this.can_access_QrCode_delete = true
    } else {
      this.can_access_QrCode_add = false
      this.can_access_QrCode_view = false
      this.can_access_QrCode_update = false
      this.can_access_QrCode_delete = false
    }
  }
  Target_chnage() {
    if (this.can_access_target_add == false) {
      this.can_access_target_add = true;
      this.can_access_target_view = true;
      this.can_access_target_update = true;
      this.can_access_target_delete = true;
    } else {
      this.can_access_target_add = false;
      this.can_access_target_view = false;
      this.can_access_target_update = false;
      this.can_access_target_delete = false;
    }
  } Forecast_chnage() {
    if (this.can_access_forcast_add == false) {
      this.can_access_forcast_add = true;
      this.can_access_forcast_view = true;
      this.can_access_forcast_update = true;
      this.can_access_forcast_delete = true;
    } else {
      this.can_access_forcast_add = false;
      this.can_access_forcast_view = false;
      this.can_access_forcast_update = false;
      this.can_access_forcast_delete = false;
    }
  }
  Report_chnage() {
    if (this.can_access_report_add == false) {
      this.can_access_report_add = true;
      this.can_access_report_view = true;
      this.can_access_report_update = true;
      this.can_access_report_delete = true;
    } else {
      this.can_access_report_add = false;
      this.can_access_report_view = false;
      this.can_access_report_update = false;
      this.can_access_report_delete = false;
    }
  }

}
