import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit{
  resumeData:any;

  constructor( private resumeService: ResumeService){}

  ngOnInit(): void {
    
    this.resumeData = this.resumeService.getResumeData();
    
  }

}
