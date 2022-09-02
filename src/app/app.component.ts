import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObject = {
    'key1': 'value1',
    'key2': 'value2'
  };

  mySortingFunction = (a, b) => {
    return a.key > b.key ? -1 : 1;
  }

  myMap = new Map([['mapKey1', 'mapValue1'], ['mapKey2', 'mapValue2']]);

}
