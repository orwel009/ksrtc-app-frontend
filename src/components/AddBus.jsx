import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddBus = () => {
    const [data,changeData] = useState(
        {
            "busNo":"",
            "busName":"",
            "busRoot":"",
            "driverName":""    
        }
    )
    const inputHandler = (event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        axios.post("http://localhost:8080/addBus",data).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("Bus Added Successfully")
                } else {
                    alert("An error occured")
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">BusNumber</label>
                            <input type="text" className="form-control" name='busNo' value={data.busNo} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">BusName</label>
                            <input type="text" className="form-control" name='busName' value={data.busName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">BusRoute</label>
                            <input type="text" className="form-control" name='busRoot' value={data.busRoot} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DriverName</label>
                            <input type="text" className="form-control" name='driverName' value={data.driverName} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>AddBus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBus