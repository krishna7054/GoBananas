# GoBananas

## Description

GoBananas is a simple React application that fetches data from the JSONPlaceholder public API and displays it in a user-friendly format using Material-UI. The application features a list view displaying items fetched from the API, basic navigation, styling using Material-UI, and a search feature to filter the displayed items.

## Features

- **Fetch Data from API:** Fetches data from the JSONPlaceholder API.
- **Material-UI Components:** Uses Material-UI components for styling and layout.
- **Responsive Design:** Ensures the application works well on different screen sizes.
- **Search Functionality:** Allows users to filter displayed items based on their input.
- **No Data Alert:** Displays an alert when no data is found.

## Demo

You can view the deployed application [here](https://stalwart-sundae-979aea.netlify.app).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krishna7054/GoBananas.git
   cd go-bananas
    ```

2. Install the dependencies:

```bash
npm install
```
3. Start the development server:
   
```bash
npm start
```
The application should now be running on http://localhost:3000.

## File Structure
```bash
go-bananas/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── ItemList.js
│   │   ├── SearchBar.js
│   ├── App.js
│   ├── index.js
│   ├── api.js
│   ├── App.css
├── package.json
└── README.md
```

## API Integration
The application fetches data from the JSONPlaceholder API. The API request is handled in src/api.js using Axios.

## Components
ItemList: Displays a list of items fetched from the API. Shows an alert if no items are found.
SearchBar: Provides a search bar to filter the displayed items based on user input.
