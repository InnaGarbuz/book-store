import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book.model';
import { BookFormComponent } from '../book-form/book-form.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookFormComponent, CommonModule, NgOptimizedImage
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() edit = new EventEmitter<Book>();  // Подія для редагування книги
  @Output() add = new EventEmitter<void>();   // Подія для додавання нової книги

  books$ = this.bookService.books$;
  selectedBook: Book | null = null;
  imagePreview: string | null = '../../assets/images/book-preview.png';

  constructor(private bookService: BookService) {}

  onEdit(book: Book) {
    this.edit.emit(book);
    this.closeModal()
  }

  onDelete(id: number) {
    this.bookService.deleteBook(id);
    this.closeModal()
  }

  onAddNewBook() {
    this.add.emit();
  }

  onBookClick(book: Book) {
    this.selectedBook = book;
  }

  closeModal() {
    this.selectedBook = null;
  }
}
