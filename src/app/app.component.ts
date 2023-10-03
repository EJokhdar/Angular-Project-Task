import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task_Project';

  // constructor(){
  //   console.log("testing")
  // }
  // public toggleTheme() {
    
  //   console.log("test")
  //  }
   
}

const themeToggler: HTMLElement | null = document.querySelector(".rightSide-top-theme");

if (themeToggler) {
  themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    const span1: HTMLElement | null = themeToggler.querySelector("span:nth-child(1)");
    const span2: HTMLElement | null = themeToggler.querySelector("span:nth-child(2)");

    if (span1) {
      span1.classList.toggle("active");
    }

    if (span2) {
      span2.classList.toggle("active");
    }
  });
}




