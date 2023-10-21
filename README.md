# Unit-Test
A simple Practice on unit testing, integration and automation(UI) test

To write tests for the React components and Redux actions and reducers using Jest and React Testing Library, you can follow these steps. Below are examples of how to write tests for different parts of your application.

Install necessary dependencies:
You need to have Jest, React Testing Library, and Redux testing utilities installed. You can install them with the following commands:

bash
Copy code
npm install --save react-test-renderer
npm install --save jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install --save redux-mock-store
Create a test file for each component and Redux slice.

Let's create separate test files for your components, Redux actions, and Redux reducers.

Create a test file for App.js. For example, App.test.js:
javascript
Copy code
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore();
const store = mockStore({
  searchRobots: {
    robots: [],
    searchField: '',
  },
});

test('App component renders correctly', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // You can write test assertions here to check if the component renders as expected
});

// You can write more tests for App component functionality like searching, loading, etc.
Create a test file for Card.js. For example, Card.test.js:
javascript
Copy code
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card component renders correctly', () => {
  const mockCardData = {
    name: 'TestName',
    email: 'test@example.com',
    id: 1,
  };

  render(<Card {...mockCardData} />);

  // You can write test assertions here to check if the Card component renders as expected
});
Create a test file for Cardlist.js. For example, Cardlist.test.js:
javascript
Copy code
import React from 'react';
import { render, screen } from '@testing-library/react';
import Cardlist from './Cardlist';

test('Cardlist component renders correctly', () => {
  const mockRobots = [
    { name: 'Robot1', email: 'robot1@example.com', id: 1 },
    { name: 'Robot2', email: 'robot2@example.com', id: 2 },
  ];

  render(<Cardlist robots={mockRobots} />);

  // You can write test assertions here to check if the Cardlist component renders as expected
});
Create a test file for SearchBox.js. For example, SearchBox.test.js:
javascript
Copy code
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBox from './SearchBox';

const mockStore = configureStore();
const store = mockStore({
  searchRobots: {
    searchField: '',
  },
});

test('SearchBox component renders correctly', () => {
  render(
    <Provider store={store}>
      <SearchBox />
    </Provider>
  );

  // You can write test assertions here to check if the SearchBox component renders as expected
});

// You can also write tests for search input and change functionality.
Create a test file for Redux actions. For example, searchRobotsSlice.test.js:
javascript
Copy code
import { setSearchField, setRobots } from './searchRobotsSlice';

test('setSearchField action creator', () => {
  const action = setSearchField('test');
  expect(action).toEqual({ type: 'searchRobots/setSearchField', payload: 'test' });
});

test('setRobots action creator', () => {
  const action = setRobots([{ id: 1, name: 'TestRobot' }]);
  expect(action).toEqual({ type: 'searchRobots/setRobots', payload: [{ id: 1, name: 'TestRobot' }] });
});
Run tests:
You can run the tests using the following command:

npm test
This will execute Jest, and it will run all the test files you've created.

Make sure to adjust the test assertions in each test file based on your specific component and functionality. The provided examples are just placeholders to get you started.




