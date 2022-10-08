import { useState, useEffect } from "react";

const Multiselect = () => {
  /**
   * ? METHOD
   * * first we can just grab the value and then push it into an array
   * * second we make a slice and then dispatch here
   */

  //  get isFilter() {
  //   return Array(this.filter.length).fill(false);
  // },

  const [selectOption, setSelectOption] = useState([
    {
      type: "Genres",
      filter: [
        {
          name: "Action",
          id: 1,
          isTrue: false,
        },
        {
          name: "Adventure",
          id: 2,
          isTrue: false,
        },
        {
          name: "Romance",
          id: 3,
          isTrue: false,
        },
      ],
    },
    {
      type: "Year",
      filter: [
        {
          name: "2019",
          id: 2019,
          isTrue: false,
        },
        {
          name: "2020",
          id: 2020,
          isTrue: false,
        },
        {
          name: "2021",
          id: 2021,
          isTrue: false,
        },
      ],
    },
    {
      type: "Season",
      filter: [
        {
          name: "Summer",
          id: 101,
          isTrue: false,
        },
        {
          name: "Spring",
          id: 102,
          isTrue: false,
        },
        {
          name: "Winter",
          id: 103,
          isTrue: false,
        },
      ],
    },
  ]);

  const optionLength = selectOption.length;
  const [isOpen, setIsOpen] = useState(Array(optionLength).fill(false)); // automatically change the array size depending on the length of selectOption
  const [search, setSearch] = useState(String);

  const [parameter, setParameter] = useState([
    {
      genre: Array(String()),
      id: Number(0),
    },
    {
      year: Array(String()),
      id: Number(1),
    },
    {
      season: Array(String()),
      id: Number(2),
    },
  ]);

  const [isGenre, setIsGenre] = useState([]);

  /**
   * ! Can Use String("") if String doesn't work
   */

  /**
   * ? Alternative use in filter a boolean that determines whether the option is on or off (true or false) and then print out the value ( this method is much safer )
   */

  function canClose(i) {
    setIsOpen((prevState) => prevState.map((bool, idx) => idx === i && !bool));
  }

  function canOpen(i) {
    setIsOpen((prevState) =>
      prevState.map((bool, idx) => (idx === i ? !bool : bool))
    );

    const countTrue = isOpen.filter(Boolean).length;
    let checkTrue = countTrue === 1;

    if (checkTrue) {
      canClose();
    }
  }

  const handleClick = (e, genre, i, idx) => {
    // setSelectOption((prevState) =>
    //   prevState.map((item) => ({
    //     ...item,
    //     isTrue: item.filter['isTrue'] = true
    //   }))
    // );
    // newArr[i].filter['isTrue'] = !newArr[i].filter['isTrue'];

    setSelectOption((prevState) =>
      prevState.map((item) => ({
        ...item,
        isTrue: prevState[idx].filter.map((item, i) => {
          return item.name === genre.name ? (item.isTrue = !item.isTrue) : null;
        }),
      }))
    );

    // console.log(selectOption);

    // selectOption[idx].filter.map((item, i) => {
    //   return item.name === genre.name ? (item.isTrue = !item.isTrue) : null;
    // });
  };

  const filterGenre = (e, i) => {
    setSearch(e.target.value);

    const newArr = selectOption[i].filter.filter((element, i) => {
      if (search === "") {
        return element;
      } else if (element.name.toLowerCase().includes(search.toLowerCase())) {
        return element;
      }
    });

    // console.log(newArr);
  };

  const setParams = () => {
    selectOption.map((item, i) => {
      item.filter.map((genre, idx) => {
        setParameter((prevState) =>
          prevState.map((item, i) => ({
            ...item,

            //if the id are the same as the id in selectoption then we wanna push the item into the setparameter
          }))
        );
      });
    });

    // console.log(parameter);
  };

  useEffect(() => {
    setParams();
  }, [selectOption]);

  // isTrue: genre.name === item.filter.name ? !item.filter['isTrue'] : false

  /**
   * ! explain to yourself later
   * use redux later to grab data from here
   */

  const activeGenre = () => {
    // selectOption.map((item, i) => {
    //   item.filter.filter((genre, idx) => {
    //     genre.isTrue &&
    //       genre.id &&
    //       setIsGenre(genre);
    //   });
    // });

    // console.log(isGenre)


    setSelectOption((prevState) => prevState.map((item, i ) => {
      console.log(item)
    }))
  };


  useEffect(() => {
    activeGenre()
  }, [selectOption])

  return (
    <div className="w-screen h-[20vh] m-10 p-10">
      <div className="flex flex-row gap-6">
        {selectOption.map((item, i) => {
          return (
            <div className="flex flex-col text-white" key={item?.filter[i].id}>
              <div
                className="bg-white h-[3vh] flex justify-center items-center p-4 rounded-xl w-[10vw] relative"
                onMouseDown={(e) => {
                  e.preventDefault();
                  canOpen(i);
                }}

                // tabIndex={0} // search this up later
              >
                <input
                  placeholder={item?.type}
                  className="bg-white focus:outline-none text-gray-700 font-exo font-semibold"
                  onMouseDown={(event) => {
                    event.stopPropagation(); //biar child elemen kg ketabrak sama parent
                    canClose(i);
                  }}
                  onChange={(e) => filterGenre(e, i)}
                  // onClick={e => canClose(i)}

                  // onBlur={(e) => canClose(i)}
                  //put text inside input or behind div
                />
              </div>

              <ul
                className={`flex flex-col mt-[4.5vh] bg-white h-fit w-[10vw] rounded-lg text-gray-700 font-semibold font-josef p-2 absolute ${
                  isOpen[i] ? "block" : "hidden"
                }`}
                //not here
              >
                <h2 className="mb-2 select-none text-lg font-bold font-exo">
                  {item?.type}
                </h2>
                {item?.filter?.map((genre, idx) => (
                  <li
                    value={idx}
                    key={genre.id}
                    onClick={(e) => handleClick(e, genre, idx, i)}
                    className={`${
                      item.filter[idx].isTrue
                        ? "text-green-600"
                        : "hover:bg-slate-100"
                    }  cursor-pointer mx-2 px-2`}
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-2">
        {selectOption.map((item, i) =>
          item?.filter.map(
            (
              genre,
              idx // filter is not filter as in js function but a var name
            ) =>
              genre.isTrue && (
                <div key={genre.id}>
                  {genre.isTrue && (
                    <h1
                      className={`bg-sky-500 text-white rounded text-md py-1 px-2 mt-[10vh] cursor-pointer group flex items-center font-josef`}
                      onClick={(e) => handleClick(e, genre, idx, i)}
                    >
                      {genre.name}
                      <span className="ml-2 font-bold hidden group-hover:block">
                        X
                      </span>
                    </h1>
                  )}
                </div>
              )
          )
        )}
      </div>
    </div>
  );
};

export default Multiselect;
