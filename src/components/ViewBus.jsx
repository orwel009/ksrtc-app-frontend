import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewBus = () => {
    const [bus,changeBus] = useState([])
    const fetchData = ()=>{
        axios.post("http://localhost:8080/viewBus").then(
            (response)=>{
                if (response.data.status ==="unauthorized access") {
                    alert("unauthorized access")
                } else {
                    changeBus(response.data)
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">BusNumber</th>
                                    <th scope="col">BusName</th>
                                    <th scope="col">BusRoute</th>
                                    <th scope="col">DriverName</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bus.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{index}</th>
                                                <td>{value.busNumber}</td>
                                                <td>{value.busName}</td>
                                                <td>{value.busRoot}</td>
                                                <td>{value.driverName}</td>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewBus