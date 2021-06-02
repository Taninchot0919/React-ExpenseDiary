import moment from "moment";
import { useEffect, useState } from "react";
import AddTransactionModal from "./AddTransaction";
import ExpenseList from "./ExpenseList";

const Home = () => {
  const [expenses, setExpense] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:9000/Expense")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setExpense(data);
        setIsLoading(false);
      });
    console.log("Use Effect ran");
  }, []);

  if (isLoading) {
    console.log(expenses);
    return <p>Loading....</p>;
  }

  const myBalance = () => {
    let myBalance = 0;
    expenses.map((item) => {
      return (myBalance += parseInt(item.expense));
    });
    console.log(myBalance);
    return myBalance.toString();
  };

  const balance = myBalance();

  // Get YYYY/MM/DD
  const today = moment(new Date()).format("YYYY/MM/DD");
  console.log(today);

  const setAddModalOn = () => {
    setAddModal(true);
  };

  const setAddModalOff = () => {
    setAddModal(false);
  };

  const addingLocal = (expense) => {
    let oldArray = expenses;
    oldArray.push(expense);
    setExpense(oldArray);
  };

  return (
    <div className="mx-10 my-5">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400 mb-10">
        Expense Diary
      </h2>
      <div className="mb-5">
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
        <button
          className="p-5 bg-green-500 rounded-full text-white font-bold shadow-xl"
          onClick={setAddModalOn}
        >
          ADD
        </button>
      </div>
      {addModal && (
        <AddTransactionModal
          setAddModalOff={setAddModalOff}
          addingLocal={addingLocal}
        />
      )}
    </div>
  );
};

export default Home;
