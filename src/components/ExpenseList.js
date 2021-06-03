import ExpenseItem from "./ExpenseItem";
import EditTransaction from "./EditTransaction";
import { useState } from "react";

const ExpenseList = (props) => {
  let expenses = props.expenses;
  const [editModal, setEditModal] = useState(false);
  const [expense, setExpense] = useState();

  const setEditModalOn = (item) => {
    setEditModal(true);
    setExpense(item);
  };

  const setEditModalOff = () => {
    setEditModal(false);
  };

  console.log(props.expenses);
  return (
    <div>
      {editModal && (
        <EditTransaction setEditModalOff={setEditModalOff} item={expense} />
      )}
      <div
        className="space-y-3 mt-5 p-4 rounded-lg shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(225deg, rgba(25, 136, 247, 0.94) 25%, rgba(247, 25, 136, 0.79) 69%)",
        }}
      >
        {expenses.map((expense, index) => {
          return (
            <div
              onClick={() => {
                setEditModalOn(expense);
              }}
              key={index}
            >
              <ExpenseItem expense={expense} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseList;
