import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  public nameLower:string = 'alvaro';
  public nameUpper:string = 'ALVARO';
  public fullName:string = 'aLvaRo GuarACHi';

  public customDate: Date = new Date();


}
