import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksSubject = new BehaviorSubject<Book[]>([
    { id: 1, title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', author: ' James Clear', year: 2018, description: 'Offers a practical framework for making small adjustments that build positive habits and sustain motivation over time..', image: '../assets/images/book-james.jpeg' },
    { id: 2, title: 'The Power of Habit: Why We Do What We Do in Life and Business', author: 'Charles Duhigg', year: 2012, description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { id: 3, title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki ', year: 1997, description: 'Through contrasting life lessons from two "dads," Kiyosaki explores wealth-building strategies and emphasizes financial education' },
    { id: 4, title: 'The Millionaire Next Door', author: 'Thomas J. Stanley and William D. Danko', year: 1996, description: 'While not strictly a finance book, it explores behavioral economics, explaining how cognitive biases affect financial and investment decisions.' },
    { id: 5, title: 'The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage ', author: 'Mel Robbins', year: 2017, description: 'Throughout your life, you\'ve had parents, coaches, teachers, friends and mentors who have pushed you to be better than your excuses and bigger than your fears. What if the secret to having the confidence and courage to enrich your life and work is simply knowing how to push yourself?', image: '../assets/images/mel-book.jpeg' },
  ]);

  books$ = this.booksSubject.asObservable();

  addBook(book: Book) {
    const books = [...this.booksSubject.value, book];
    this.booksSubject.next(books);
  }

  editBook(updatedBook: Book) {
    const books = this.booksSubject.value.map(book =>
        book.id === updatedBook.id ? updatedBook : book
    );
    this.booksSubject.next(books);
  }

  deleteBook(id: number) {
    const books = this.booksSubject.value.filter(book => book.id !== id);
    this.booksSubject.next(books);
  }
}
