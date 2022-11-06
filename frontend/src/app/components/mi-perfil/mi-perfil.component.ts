import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Client} from 'src/app/models/client-model';
import {CompanyService} from 'src/app/servicios/company/company.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  constructor(private router:Router, private companyService: CompanyService) { }

  user: Client = {
    id: 0,
    admin_name: '',
    email: '',
    username: '',
  }

  goToPage2(pageName:string,id:number):void{
    console.log(id);
    this.router.navigate([`${pageName}`,id]);
  }
  
  ngOnInit(): void {
    let c_id:number = JSON.parse(localStorage.getItem('current'));
    console.log(c_id);

    this.companyService.getElementById(c_id)
    .subscribe(data=> {this.user = data;
    console.log(data)})

  }

}
