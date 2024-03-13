import logo from './logo.svg';
import './App.css';
import ExpenseItems from './components/ExpenseItems';
function App() {
  const [firstName, lastName] = ["Bhanu Teja", "Kakarla"];
  console.log(firstName+" "+lastName);
  const expenses = [
    {
      id: '1',
      title: 'Toilet Paper',
      amount: 95,
      date: new Date(2023,5,17)
    },
    {
      id: '2',
      title: 'New TV',
      amount: 799,
      date: new Date(2023,8,15)
    },
    {
      id: '3',
      title: 'Car Insurance',
      amount: 295.45,
      date: new Date(2023,1,30)
    },
    {
      id: '1',
      title: 'Wifi',
      amount: 68,
      date: new Date(2023,8,28)
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItems>
      <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItems>
      <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItems>
      <ExpenseItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItems>
      {/* <ExpenseItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date.toISOString()}></ExpenseItems> */}
    </div>
  );
}

export default App;
