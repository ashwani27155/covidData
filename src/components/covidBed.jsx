import React, { useEffect, useState } from 'react';
import '../css/covidBed.css'
const CovidBed = () => {
    const [data, setData] = useState([])
    const covidbdata = async () => {
        const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const actualData = await res.json()
        setData(actualData.data.regional)
        console.log(actualData.data.regional)
    }
    useEffect(() => {
        covidbdata();
    }, [])
    return (
        <div className='container'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>States</th>
                        <th>ConfirmedCasesForeign</th>
                        <th>ConfirmedCasesIndian</th>
                        <th>Deaths</th>
                        <th>discharged</th>
                        <th>TotalConfirmed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele, id) => {
                        return (
                            <>
                                <tr>
                                    <td>{ele.loc}</td>
                                    <td>{ele.confirmedCasesForeign}</td>
                                    <td>{ele.confirmedCasesIndian}</td>
                                    <td>{ele.deaths}</td>
                                    <td>{ele.discharged}</td>
                                    <td>{ele.totalConfirmed}</td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>



        </div>
    )
}
export default CovidBed