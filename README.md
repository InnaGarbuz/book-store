# Book Store

## Description

This Book Store application is designed for viewing, adding, editing, and deleting books. Users can add book details such as title, description, author, year and image. By default, 5 books are pre-added to the app, which can be edited or deleted. Newly added books are not saved in the current version, but this functionality will be implemented in future updates.

## Features

* View, add, edit, and delete books.
* Add a title, description, author, year and image when creating a new book.
* 5 pre-added books for convenience.
* Modal window for adding and editing books.
* The application structure follows the BEM methodology for components and provides an organized project structure.

## Technologies

* Angular — for creating the single-page application.
* BEM (Block, Element, Modifier) — methodology for organizing CSS classes, simplifying project maintenance and expansion.
* Modal windows — used for adding and editing book data.


## Installation

1. Clone the repository to your local machine

    `git clone https://github.com/InnaGarbuz/book-apps.git`

2. Navigate to the project directory:
   `cd book-apps`

3. Install dependencies:
   `npm install`

4. Start the application:
   `ng serve`

5. Open your browser and go to:
    `http://localhost:4200`


## Project Structure

* src/app — main project directory. 
  * components — application components (following the BEM methodology). 
  * services — services for handling data. 
  * models — data models (e.g., Book). 
  * assets — directory for storing images and other resources.

# Usage

1. When the app starts, you will see a list of 5 pre-added books.

2. To add a new book, click the "Add Book" button. In the modal window, enter the title, description, and upload an image.

3. To edit a book, click on it and select "Edit".

4. To delete a book, choose the "Delete" option from the book's menu.

**Note**: Currently, the added books are not saved, and changes will be lost after a page reload. Future versions will include functionality for saving the book data.

## Planned Improvements

* Add functionality for permanent book storage.

* Implement pagination and filtering for books.

* Enhance the user interface.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Contact

If you have any questions or suggestions for improving the app, feel free to reach out!

___

**Note**: This app is a learning project, and we continue to improve it.


