import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   
  projects : any = [];
  constructor( private projectService : ProjectsService){

   

  }
  ngOnInit(): void {
   this.projects =  this.projectService.getProjects();
    
  }

   

}
