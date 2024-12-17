import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }
  getResumeData() {
    return {
      education: {
        degree: 'B.Sc. in Computer Engineering',
        university: 'Addis Ababa University',
        year: '2018 - 2022',
      },
      experience: [
        {
          role: 'Full Stack Developer',
          company: 'EZ Software',
          duration: 'Oct 2023 - Present',
          tasks: [
            'Developed responsive web applications using Angular and Spring Boot.',
            'Implemented RESTful APIs and optimized UI performance.',
          ],
        },
      ],
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'Java Spring Boot', level: 75 },
        { name: 'PostgreSQL, MYSQL', level: 80 },
        { name: 'HTML, CSS3, JavaScript', level: 85 },
      ],
      extracurricularActivities: [
        {
          activity: 'Vice president of Ethics and Anti-corruption club',
          description: 'Participated in combating corruption and upholding ethical standard.',
        },
        {
          activity: 'Member of Mininovation',
          description: 'participating on Eclipse Kura platform for IOT based projects.',
        },
       
      ],
      certifications: ['AWS for Begginers', 'Work Readiness Training'],
      extraccuriclumActivities: ['Vice president of Ethics and Anti-corruption club','Member of Mininovation'],
    };
  }
}
