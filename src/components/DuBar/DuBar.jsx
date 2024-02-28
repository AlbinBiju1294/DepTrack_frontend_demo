import { BarChart } from '@mui/x-charts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';


const DuBar = () => {
  const [duData, setDuData] = useState([]);
  const [xdata, setXdata] = useState([]);
  const [ydata, setYdata] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false)

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyOTA4OTEyMTEwLCJpYXQiOjE3MDg5MTIxMTAsImp0aSI6ImJmOWViMmEwZGYwYTRmNDZiN2NjMWEwZmE5ZDViZjQ0IiwidXNlcl9pZCI6MX0.2uATecJOp2euhduB8OYWTzpZIfZshbvwdbN0FQeuc_8';
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/v1/transfer/bargraph-data/', config);
        console.log('Response from API:', res.data);
        setDuData(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log("duData:", duData);
    if (duData && duData.length > 0) {
      const newyData = [];
      const newxData = [];
      // Perform operations on duData after it has been updated
      duData.forEach((data) => {
        newxData.push(data.du_id);
        newyData.push(data.no_of_transfers);
      });
      setXdata(newxData);
      setYdata(newyData);
      setIsLoaded(true)
      console.log(xdata)
      console.log(ydata)
    }
  }, [duData]);
  

  return (
    <div>
      
      {isLoaded?<BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: xdata,
            scaleType: 'band',
            categoryGapRatio: 0.6,
          },
        ]}
        series={[
          {
            data: ydata,
            color: '#5A6ACF',
          },
        ]}
        width={500}
        height={250}
      />:<></>}
      <Paper>Hiii</Paper>
    </div>
  );
};

export default DuBar;
