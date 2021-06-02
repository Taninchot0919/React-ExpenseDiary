const ExpenseItem = (props) => {
  return (
    <div className="border px-3 py-4 bg-white rounded-lg">
      <h2 className="text-md font-semibold">
        Expense Name: <span className="font-medium">{props.expense.name}</span>{" "}
      </h2>
      <h2 className="text-md font-semibold">
        Expense: <span className="font-medium">{props.expense.expense}</span>
      </h2>
    </div>
  );
};

export default ExpenseItem;
