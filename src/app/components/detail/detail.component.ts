import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { Project } from "../../models/proyect";
import { Global } from "../../services/global";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[
ProjectService,


  ]
})
export class DetailComponent implements OnInit {

private url:string;
public confirm:boolean;
  constructor(
private _proyectService:ProjectService,
private _router:Router,
private _route:ActivatedRoute,
private project:Project,


  ) { 

    this.url=Global.url;
    this.confirm=false;

  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params.id;

      this.getProject(id);
    })
  }

getProject(id){
this._proyectService.getProject(id).subscribe(
response=>{
this.project= response.project;
},
error=>{
  console.log(<any>error);
  
}

)

}

deleteProject(id){
  this._proyectService.deleteProject(id).subscribe(
response=>{
if(response.project){
  this._router.navigate(['/proyectos'])
}
},
error=>{
  console.log(<any>error);
  
}

  )
}

setConfirm(confirm){
  this.confirm=confirm;

}

}
