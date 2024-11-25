import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  public name: string = 'Alvaro';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  public clients: string[] = ['Maria', 'Pedro', 'Alvaro', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void{
    this.clients.shift();
  }

  public person = {
    name: 'Alvaro',
    age: 30,
    address: 'La Paz, Bolivia'
  }

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value) )
  );

  public promiseValue: Promise<string>= new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa.' );
      console.log('Tenemos data de la promesa.');
    }, 3500 )
  } )

}
