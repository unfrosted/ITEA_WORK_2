import * as interfaces from './interfaces'
import {Category} from './enums'

class UniversityLibrarian implements interfaces.Librarian {
    name: string;
    email: string;
    department: string;
  
    assistCustomer(custName: string) {
      console.log(`${this.name} is assisting ${custName}`);
    }
  }

class ReferenceItem {
    //   title: string;
    //   year: number;
  
    //   constructor(newTitle: string, newYear: number) {
    //     console.log(`Creating a new ReferenceItem...`);
    //     this.title = newTitle;
    //     this.year = newYear;
    //   }
  
    private _publisher: string;
  
    static department = 'IT';
  
    constructor(public title: string, protected year: number) {
      console.log(`Creating a new ReferenceItem...`);
    }
  
    get publisher(): string {
      return this._publisher.toUpperCase();
    }
  
    set publisher(newPublisher) {
      this._publisher = newPublisher;
    }
  
    printItem(): void {
      console.log(`${this.title} was published in ${this.year}`);
      console.log(ReferenceItem.department);
    }
  }
  
  // const ref = new ReferenceItem('My Title', 2018);
  // ref.printItem();
  // ref.publisher = 'Boris';
  // console.log(ref.publisher);
  
  // Task 06



export {UniversityLibrarian, ReferenceItem}
