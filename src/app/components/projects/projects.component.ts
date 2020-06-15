import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { Project } from "../../models/proyect";
import { Global } from "../../services/global";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ ProjectService]
})
export class ProjectsComponent implements OnInit {


public projects:Project[]
public url:string;



  constructor(

 
private _proyectService: ProjectService,

  ) { 

    this.url=Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

getProjects(){
  this._proyectService.getProjects().subscribe(
    response=>{
console.log(response);
if(response.projects){
  this.projects= response.projects
}
    },
    error=>{
      console.log(<any>error)
    }
  )
}


}
