import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expenses = props.expenses;

  console.log(props.expenses)
  return (
    <div
      className="space-y-3 mt-5 p-4 rounded-lg"
      style={{
        backgroundImage:
          "linear-gradient(225deg, rgba(25, 136, 247, 0.94) 25%, rgba(247, 25, 136, 0.79) 69%)",
      }}
    >
      {expenses.map((expense, index) => {
        return <ExpenseItem expense={expense} key={index} />;
      })}
    </div>
  );
};

export default ExpenseList;
