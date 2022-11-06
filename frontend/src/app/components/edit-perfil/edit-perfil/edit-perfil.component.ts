import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {Client} from 'src/app/models/client-model';
import {CompanyService} from 'src/app/servicios/company/company.service'

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  user: Client = {
    id: 0,
    admin_name: '',
    email: '',
    username: '',
  }

  editForm: FormGroup;

  ngOnInit(): void {
    this.getClient();
    this.editForm = new FormGroup({
      name: new FormControl(),
      company: new FormControl(),
      email: new FormControl()
     });
  }

  getClient():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getElementById(id)
    .subscribe(data=> this.user = data);
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
    .then(() => {
      window.location.reload();
    });
  }

  editClient() : void{
    this.user.admin_name = this.editForm.get('name')?.value;
    this.user.username = this.editForm.get('company')?.value;
    this.user.email = this.editForm.get('email')?.value;

    console.log(this.user)

    this.companyService.editClient(this.user.id,this.user);
    this.goToPage('Dashboard/Perfil');
  }


}
