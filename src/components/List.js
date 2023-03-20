import React from "react";

const list = [
  {
    id: "a",
    firstname: "Robin",
    lastname: "Wieruch",
    year: 1988,
  },
  {
    id: "b",
    firstname: "Dave",
    lastname: "Davidds",
    year: 1990,
  },

  {
    id: "c",
    firstname: "Dave",
    lastname: "Lynch",
    year: 1990,
  },
  {
    id: "d",
    firstname: "Robin",
    lastname: "Lynch",
    year: 1988,
  },
  {
    id: "e",
    firstname: "Davin",
    lastname: "Booker",
    year: 1990,
  },
  {
    id: "f",
    firstname: "Robert",
    lastname: "Redford",
    year: 1988,
  },
];

const List = () => {
  const refs = list.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = (id) =>
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  //   <ul>
  //     {list.map((item) => {
  //       const ref = React.createRef();
  //       const handleClick = () =>
  //         ref.current?.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         });
  //       return (
  //         <li
  //           key={item.id}
  //           style={{ height: "250px", border: "1px solid black" }}
  //         >
  //           <div>{item.id}</div>
  //           <div>{item.firstname}</div>
  //           <div>{item.lastname}</div>
  //           <div>{item.year}</div>
  //           <button
  //             type="button"
  //             onClick={handleClick}
  //           >
  //             Scroll Into View
  //           </button>
  //         </li>
  //       );
  //     })}
  //   </ul>;

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
            >
              Scroll Item {item.id} Into View
            </button>
          </li>
        ))}
      </ul>

      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            ref={refs[item.id]}
            style={{ height: "250px", border: "1px solid black" }}
          >
            <div>{item.id}</div>
            <div>{item.firstname}</div>
            <div>{item.lastname}</div>
            <div>{item.year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
