import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Ecomerce = () => {
  const [change, setChange] = useState(0);
  const [apidata, setApiData] = useState([]);

  const url = "https://fakestoreapi.com/products";

  const getallData = () => {
    axios.get(url)
      .then(res => setApiData(res.data));
  };

  useEffect(() => {
    getallData();
  }, []);

  const data1 = apidata.slice(0, 3);
  const data2 = apidata.slice(3, 6);
  const data3 = apidata.slice(6, 9);
  const data4 = apidata.slice(9, 12);
  const data5 = apidata.slice(12, 15);
  const data6 = apidata.slice(15, 18);
  const data7 = apidata.slice(18, 20);

  const apiArrayData = [data1, data2, data3, data4, data5, data6, data7];

  useEffect(() => {
    const interval = setInterval(() => {
      setChange(prevChange => prevChange + 1);
    }, 7000); // Change picture every 4 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <>
      <div className='body'>
        <div className='bttnHolder'>
          <div className='leftBttn' onClick={() => setChange(change - 1)}> <MdOutlineArrowBackIos /> </div>
        </div>
        <div className='bodyHolder'>
          <div className="card">
            <div className='cardTop'>
              {apiArrayData[change % apiArrayData.length]?.map(item => (
                <img src={item.image} alt="IMAGE" key={item.id} />
              ))}
            </div>
            <div className='cardDown'>
              <div className='nameHolder'>
                <h4>{apiArrayData[change % apiArrayData.length]?.map(item => (
                  <span key={item.id}>
                    {item.title}
                  </span>
                ))}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='bttnHolder'>
          <div className='rightBttn' onClick={() => setChange(change + 1)}> <MdOutlineArrowForwardIos /> </div>
        </div>
      </div>
    </>
  );
};


{/* <div className="categoryBody"></div> */}

export default Ecomerce;
