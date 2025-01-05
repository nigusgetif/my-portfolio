import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

   private projects = [
      {
        title: 'Online food Mine',
        description: 'This is a responsive Ethiopian traditional online food store application built using Angular, Angular Material, and custom CSS. The application allows users to browse a wide variety of food items, add them to their cart, and place orders seamlessly. It includes features like searching for products, removing items from the cart, and real-time cart updates.',
        technologies: ['Angular', 'TypeScript', 'CSS'],
        screenshot: 'assets/images/project1.png',
        githubLink: 'https://github.com/nigusgetif/online-food-store',
      },
      {
        title: 'Product Manegement',
        description: 'This is a responsive and straightforward Angular application (built with TypeScript, CSS, and HTML) that primarily focuses on the fundamentals of routing and route navigation, enabling seamless page transitions for a basic product management system.',
        technologies: ['Angular', 'TypeScript', 'CSS'],
        screenshot: 'assets/images/project2.png',
        githubLink: 'https://github.com/nigusgetif/angular-product-management',
      },
     
   ];

   constructor() { }

   getProjects(){
    return this.projects;
   }
  

}
