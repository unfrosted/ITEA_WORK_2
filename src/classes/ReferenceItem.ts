export class ReferenceItem {

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
  

