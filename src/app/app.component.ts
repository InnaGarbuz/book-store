import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { Book } from './models/book.model';
import { BookService } from './service/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent, BookFormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-apps';
  selectedBook: Book | null = null;

  constructor(private bookService: BookService) {}

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  addBook() {
    this.selectedBook = { id: 0, title: '', author: '', year: new Date().getFullYear(), description: '', image: 'string' };
  }

  saveBook(book: Book) {
    if (book.id === 0) {
      this.bookService.addBook({ ...book, id: Date.now() });
    } else {
      this.bookService.editBook(book);
    }
    this.selectedBook = null;
  }

  // Закриває модальне вікно
  closeModal(): void {
    this.selectedBook = null;
  }
}
