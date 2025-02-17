"use client";
// const Flats = lazy(() => import("./flats/page.js"));
// import { Suspense , lazy  } from "react";
import Flats from "./flats/page";
import SearchField from "./flats/searchField";
import { useState, useEffect } from "react";
import getAllFlats from "@/lib/fetching-data";
import { FetchAll } from "@/lib/fetching-data";
import Pagination from "./flats/pagination";
import { mapKeys } from "lodash";
import {Cities} from "../utilis/cities.js"

export default function Home() {
  
  // handle flats state changes
  const [flats, setFlats] = useState([]);
  // handle loading state changes
  const [loadings, setLoadings] = useState(false);

  //handle current page state changes
  const [currentPage , setCurrentPage] = useState(1);

  // handle total flatsPerPage state changes
  const [totalFlatsPerPage, setTotalFlatsPerPage] = useState(10)

  // handle errors state changes

  const [error, setError] = useState([]);
  // handle search parameters state changes
  const [params, setParams] = useState({
   
    start_date: "2025-01-14",
    end_date: "2025-01-15",
    price_from: 50,
    price_to: 10000,
    offer: 0,
    "category[]": 1,
    city: 4,
    rooms_no: 1,
    rent_by_hour: 0,
  });
  const [renamedParams, setRenamedParams] = useState({});

  useEffect(() => {
   
    const newRenamedParams = mapKeys(params, (value, key) => {
      if (key === "start_date") return "Start Date";
      if (key === "end_date") return "End Date";
      if (key === "price_from") return "Price From";
      if (key === "price_to") return "Price To";
      if (key === "category[]") return "Category";
      if (key === "rooms_no") return "Rooms";
      if (key === "rent_by_hour") return "Rent By Hour";
      return key; 
    });

    setRenamedParams(newRenamedParams);
  }, [params]);
  // handle search button click
  const [clicked, setClicked] = useState({
    
    start_date: false,
    end_date: false,
    price_from: false,
    price_to: false,
    offer: false,
    "category[]": false,
    city: false,
    rooms_no: false,
    rent_by_hour: false,
  });
  
  const handleFetchAll = async () => {
    try {
      setLoadings(true);
      const data = await FetchAll();
      setFlats(data.data.items);
      setLoadings(false);
    } catch (error) {
      setLoadings(false);
      setError(error);
      console.error("Error:", error);
    }
  };
  // handle search function call on params change
  const handleSearch = async () => {
    try { 
      setLoadings(true);
      const data = await getAllFlats(params);
      setFlats(data.data.items);
      setLoadings(false);
      console.log(renamedParams)
      console.log(params)
      setClicked({
        limit: false,
        page: false,
        start_date: false,
        end_date: false,
        price_from: false,
        price_to: false,
        offer: false,
        "category[]": false,
        city: false,
        rooms_no: false,
        rent_by_hour: false,
      });
    } catch (error) {
      setError(error);
      setLoadings(false);
      console.error("Error:", error);
      
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  // handle params change
  function handleParamsChange(e) {
    const { name, value } = e.target;
    if (!name == params["end_date"] || value == params["start_date"]) {
      return setParams((prevParams) => {
        return { ...prevParams, [name]: Number(value) };
      });
    }
    setParams((prevParams) => {
      return { ...prevParams, [name]: value };
    });
  }

  // handle click on search
  function handleClick(key) {
    setClicked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  }
  //hanldle change flats per page
  const lastFlatIndex = currentPage*totalFlatsPerPage;
  const firstFlatIndex = lastFlatIndex - totalFlatsPerPage;
  const currentFlats = flats.slice(firstFlatIndex, lastFlatIndex);

    function  handleSelectCity(value){
      console.log(value)
      setParams((prevParams) => {
        return {...prevParams, city: Number(value) };
      });
    }
  return (
    <>
      <div className="container max-w-6xl mx-auto   mt-9">
        <div className="params">
          {Object.entries(renamedParams).map(([key, value]) => {
            if (key === "limit") {

              return;

            } else {
              if(key ===  "city"){
               
                return <select  defaultValue="city" className="select" key={key} onChange={(e)=>handleSelectCity(e.target.value)}>
                  <option className="option" value="city" selected disabled>City</option>
                  {Cities.map((c,i)=><option className="option" value={c.id} key={i}>{c.name}</option>)}
                </select>
              }
              return (
                <SearchField
                  key={key}
                  title={key}
                  type={
                    key == "End Date" || key == "Start Date" ? "date" : "number"
                  }
                  onChange={handleParamsChange}
                  value={value}
                  clickStatus={clicked[key]}
                  setClicked={() => handleClick(key)}
                />
              );
            }
          })}
        </div>
        <div className="btns">
          <button  onClick={handleSearch}>
            تصفيه
          </button>
          <button  onClick={handleFetchAll}>
            محو تصفيه{" "}
          </button>
        </div>
      </div>

   
  
       {loadings ? (
        <p className="loading">Loading Flats...</p>
      ) : (
        
        <div> 
          <Flats flats={currentFlats} />
        <Pagination totalFlats={flats.length} currentPage={currentPage} totalFlatsPerPage={totalFlatsPerPage} setCurrentPage={setCurrentPage} />
      </div>
      )}
     
    </>
  );
}
