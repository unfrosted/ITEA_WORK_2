import * as interfaces from '../interfaces'

export class UniversityLibrarian implements interfaces.Librarian {
    name: string;
    email: string;
    department: string;
  
    assistCustomer(custName: string) {
      console.log(`${this.name} is assisting ${custName}`);
    }
  }