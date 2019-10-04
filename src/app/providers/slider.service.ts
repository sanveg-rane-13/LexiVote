import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private data = [
    {
      category: 'Candidates',
      expanded: true,
      products: [
        { id: 101, name: 'John', age: '60', img: '/assets/politicians/img-1.jpg' },
        { id: 102, name: 'Jack', age: '50', img: '/assets/politicians/img-2.jpg' },
        { id: 103, name: 'Jane', age: '70', img: '/assets/politicians/img-3.jpg' }
      ]
    },
    {
      category: 'Bills',
      products: [
        { id: 201, name: 'Education' },
        { id: 202, name: 'International' },
        { id: 203, name: 'Environment' }
      ]
    }
  ];

  private slider = [];
  constructor() { }

  getItems() {
    return this.data;
  }
}
