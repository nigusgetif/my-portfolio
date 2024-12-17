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
        liveDemo: 'https://yourportfolio.com',
      },
      {
        title: 'Product Manegement',
        description: 'An e-commerce platform with user authentication and payment gateway An e-commerce platform with user authentication and payment gateway authentication and payment gateway',
        technologies: ['Angular', 'TypeScript', 'CSS'],
        screenshot: 'assets/images/project2.png',
        githubLink: 'https://github.com/yourusername/ecommerce',
        liveDemo: 'https://ecommerce.com',
      },
      {
        title: 'Chat Application',
        description: 'A real-time chat application using WebSocket.An e-commerce platform with user authentication and payment gateway authentication and payment gatewayggggggggggggggg',
        technologies: ['Angular', 'Spring Boot', 'WebSocket'],
        screenshot: 'assets/images/project-one-screenshot.png',
        githubLink: 'https://github.com/yourusername/chat-app',
        liveDemo: null,
      },
     
   ];

   constructor() { }

   getProjects(){
    return this.projects;
   }
  

}
