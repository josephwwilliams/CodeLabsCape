import { Book } from './book';
import { Magazine } from './magazine';

class Shelf<ItemType> {
  items: ItemType[] = [];

  addItem(item: ItemType) {}

  removeItem(item: ItemType) {}
}

const shelf1 = new Shelf();

const harryPotter: Book = {
  author: 'JKR',
  pageAmount: 300,
  title: 'Harry Potter',
};

const magazine1: Magazine = {
  company: 'Forbes',
  pageAmount: 40,
  title: 'Random Title',
};

shelf1.addItem(magazine1);
