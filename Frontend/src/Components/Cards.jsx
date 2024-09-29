import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 p-3 my-3 ">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="h-80 overflow-hidden"> {/* Set a fixed height and hide overflow */}
            <img
              src={item.image}
              alt={item.name}
              className="" // Ensure the image covers the area
              style={{ height: "270px", width: "300px" }}

            />
          </figure>
          <div className="card-body h-40 overflow-y-auto h-[] scrollbar-thin  dark:bg-slate-900 "> {/* Fixed height with vertical scroll */}
            <h2 className="card-title">
              {item.name}
              <div className="badge bg-primary-content">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline cursor-pointer p-3 rounded-lg border-[2px] hover:bg-error hover:text-white duration-200">
                Get started
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
