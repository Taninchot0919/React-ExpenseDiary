import "./index.css";
import ExpenseList from "./components/ExpenseList";

function App() {
  let expenses = [
    {
      id: 1,
      name: "Youtube Premium",
      expense: "-240",
    },
    {
      id: 2,
      name: "ค่าหอ",
      expense: "-7500",
    },
    {
      id: 3,
      name: "ค่าน้ำ ค่าไฟ",
      expense: "-2200",
    },
    {
      id: 4,
      name: "ค่ากับข้าว",
      expense: "-1000",
    },
  ];

  const myBalance = () => {
    let myBalance = 0;
    expenses.map((item) => {
      return (myBalance += parseInt(item.expense));
    });
    console.log(myBalance);
    return myBalance.toString();
  };

  let balance = myBalance();

  return (
    <div className="App w-screen">
      <div className="mx-10 my-5">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400 mb-10">
          Expense Diary
        </h2>
        <div>
          <h2 className="text-left text-xl font-extrabold">
            Current Balance
            <span
              className="float-right text-4xl text-blue-400"
              // style={{ color: "red" }}
            >
              ${balance}
            </span>
          </h2>
        </div>
        <ExpenseList expenses={expenses} />
        <div className="flex justify-center my-10">
          <button className="p-5 bg-green-500 rounded-full text-white font-bold">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
