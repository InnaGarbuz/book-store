import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule, FormsModule
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent implements OnInit {
  @Input() book: Book | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Book>();

  bookForm!: FormGroup;
  imagePreview: string | null = '../../assets/images/book-preview.png';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: [this.book?.title || '', Validators.required],
      author: [this.book?.author || '', Validators.required],
      year: [this.book?.year || '', [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())]],
      description: [this.book?.description || '', Validators.required],
      image: [this.book?.image || '']
    });
    if (this.book?.image) {
      this.imagePreview = this.book.image;
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const updatedBook: Book = {
        ...this.book,
        ...this.bookForm.value,
        image: this.imagePreview || '',
      };
      this.save.emit(updatedBook);
      this.closeModal();
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.bookForm.patchValue({ image: this.imagePreview });
      };
      reader.readAsDataURL(file);
    }
  }


  closeModal() {
    this.close.emit();
  }
}
