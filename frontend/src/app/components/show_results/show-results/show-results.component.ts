import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {ClientInfoService} from 'src/app/servicios/clientInfo/client-info.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  constructor(
    private router:Router, 
    private route: ActivatedRoute,
    private clientInfoService: ClientInfoService)
     { }
  answer: number;
  d_id: number;
  cluster: number;

  ngOnInit(): void {
    this.d_id = Number(this.route.snapshot.paramMap.get('id'));
    this.cluster = Number(this.route.snapshot.paramMap.get('cluster'));
    //console.log(this.d_id);
    //console.log(this.cluster);
    this.clientInfoService.useDT(this.d_id,this.cluster)
    .subscribe(data => {
      this.answer = data;
    })
  }

}
