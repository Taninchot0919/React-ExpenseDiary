import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";

const EditTransaction = (props) => {
  console.log(props.item);
  console.log(props.item.name);

  const nameRef = useRef();
  const priceRef = useRef();
  const history = useHistory();
  useEffect(() => {
    console.log("In use Effect");
    console.log(props.item.name);
    console.log(nameRef);
    nameRef.current.value = props.item.name; // ก่อนจะ Assign ค่าต้องไป link ref={} ก่อน
    priceRef.current.value = props.item.expense.replace(/\D/gm, "");
  }, []);

  const handleDelete = () => {
    fetch("http://localhost:9000/Expense/" + props.item.id, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        history.push("/");
      }
    });
  };
  return (
    <div className="fixed z-10 flex justify-center items-center top-0 left-0 right-0 bottom-0 ">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 w-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      />
      <div className="relative w-9/12 bottom-0 ">
        <div className="bg-gray-100 p-5 bottom-0 rounded-lg">
          <form>
            <label>Expense Name :</label>
            <input
              type="text"
              className="block border border-black w-full px-2 py-1 rounded-md"
              ref={nameRef}
            />
            <label>Transaction Price:</label>
            <input
              type="number"
              className="block border border-black w-24 px-2 py-1 rounded-md"
              ref={priceRef}
            />
            <div className="mt-3">
              <input
                type="radio"
                name="transactionType"
                value="+ "
                onChange={(e) => e.currentTarget.value}
                checked={parseInt(props.item.expense) > 0}
              />
              <label>Income</label>
              <input
                type="radio"
                name="transactionType"
                value="-"
                onChange={(e) => e.currentTarget.value}
                checked={parseInt(props.item.expense) < 0}
              />
              <label>Expense</label>
            </div>
            <div className="mt-5 space-x-3">
              <button className="px-3 py-1 bg-green-500 text-white rounded-2xl">
                Submit
              </button>
              <button
                className="px-3 py-1 bg-yellow-500 text-white rounded-2xl"
                onClick={props.setEditModalOff}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-2xl"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTransaction;
