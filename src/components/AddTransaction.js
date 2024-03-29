import moment from "moment";
import { useRef, useState } from "react";
import { useHistory } from "react-router";

const AddTransactionModal = (props) => {
  const nameRef = useRef();
  const priceRef = useRef();
  const [expenseType, setExpenseType] = useState();

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    let addedAt = moment(new Date()).format("YYYY/MM/DD");
    const expensePrice = expenseType + priceRef.current.value;
    console.log(expenseType);
    if (
      nameRef.current.value === "" ||
      priceRef.current.value === "" ||
      expenseType === undefined
    ) {
      alert("Has null in some input");
      return;
    }
    const expenseObj = {
      name: nameRef.current.value,
      added: addedAt,
      expense: expensePrice,
    };
    console.log(priceRef.current.value);
    fetch("http://localhost:9000/Expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expenseObj),
    }).then((res) => {
      if (res.ok) {
        history.push("/");
        props.addingLocal(expenseObj);
        props.setAddModalOff();
      }
    });
  };

  const handleClickType = (event) => {
    console.log(event.target.value);
    setExpenseType(event.target.value);
  };

  return (
    <div className="fixed z-10 flex justify-center items-center top-0 left-0 right-0 bottom-0 ">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 w-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
      <div className="relative w-9/12 bottom-0 ">
        <div className="bg-gray-100 p-5 bottom-0 rounded-lg">
          <form>
            <label>Expense Name :</label>
            <input
              required
              type="text"
              className="block border border-black w-full px-2 py-1 rounded-md"
              ref={nameRef}
            />
            <label>Transaction Price:</label>
            <input
              type="number"
              className="block border border-black w-24 px-2 py-1 rounded-md"
              ref={priceRef}
              required
            />
            <div className="mt-3">
              <input
                type="radio"
                name="transactionType"
                value="+"
                onClick={handleClickType}
                required
              />
              <label>Income</label>
              <input
                type="radio"
                name="transactionType"
                value="-"
                onClick={handleClickType}
                required
              />
              <label>Expense</label>
            </div>
            <div className="mt-5 space-x-3">
              <button
                className="px-3 py-1 bg-green-500 text-white rounded-2xl"
                onClick={submitHandler}
              >
                Submit
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-2xl"
                onClick={props.setAddModalOff}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionModal;
