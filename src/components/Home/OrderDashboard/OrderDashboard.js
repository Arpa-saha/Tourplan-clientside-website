import React, { useEffect, useState } from 'react';
import SingleDashboard from '../SingleDashboard/SingleDashboard';
import './OrderDashboard.css'

const OrderDashboard = () => {
    const [dashboard,setDashboard]=useState([]);
    useEffect(()=>{
        fetch('https://haunted-barrow-42206.herokuapp.com/order')
        .then(res=>res.json())
        .then(data=>setDashboard(data))
    },[])
    console.log(dashboard);
    return (
        <div>
           
       
        <div className='dash'>
            
            {
                dashboard.map(dash=><SingleDashboard key={dash._id} dash={dash}></SingleDashboard>)
            }
             </div>
        </div>
    );
};

export default OrderDashboard;