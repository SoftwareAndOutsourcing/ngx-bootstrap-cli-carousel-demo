import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  public myInterval: number = 1500;
  public slides: any[] = [];
  public activeSlideIndex: number;
  public noWrapSlides:boolean = false;
 
  public constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
 
  public addSlide(): void {
    this.slides.push({
      image: `http://valor-software.com/ngx-bootstrap/assets/images/nature/${ this.slides.length % 8 + 1 }.jpg`
    });
  }
 
  public removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }  
}
