import {ReferenceItem} from './ReferenceItem'
export class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
      super(title, year);
    }
  
    printItem() {
      super.printItem();
      console.log(`Edition: edition (${this.year})`);
    }
  }
  