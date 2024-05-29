import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Thor', 'Ironman', 'Hulk'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
