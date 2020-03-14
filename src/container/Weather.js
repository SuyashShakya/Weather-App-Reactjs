import React, { useState, useEffect } from 'react';
import Card from '../component/Card';
import Welcome from '../container/Welcome/Welcome';
import { Bar } from 'react-chartjs-2';
import back from '../assets/back.jpg';


// const DayData = [
//     { id: 1, Date: '1 March 2020', Time0: 15, Time2: 16, Time4: 17, Time6: 18, Time8: 20, Time10: 22, Time12: 25, Time14: 26, Time16: 23, Time18: 22, Time20: 19, Time22: 18 },
//     { id: 2, Date: '5 March 2020', Time0: 16, Time2: 18, Time4: 19, Time6: 20, Time8: 21, Time10: 24, Time12: 27, Time14: 28, Time16: 24, Time18: 23, Time20: 22, Time22: 20 },
//     { id: 3, Date: '10 March 2020', Time0: 18, Time2: 20, Time4: 22, Time6: 24, Time8: 26, Time10: 28, Time12: 30, Time14: 32, Time16: 28, Time18: 27, Time20: 26, Time22: 23 },
//     { id: 4, Date: '15 March 2020', Time0: 18, Time2: 20, Time4: 21, Time6: 22, Time8: 24, Time10: 25, Time12: 30, Time14: 34, Time16: 32, Time18: 28, Time20: 24, Time22: 20 },
//     { id: 5, Date: '20 March 2020', Time0: 20, Time2: 21, Time4: 22, Time6: 23, Time8: 24, Time10: 28, Time12: 32, Time14: 34, Time16: 30, Time18: 28, Time20: 25, Time22: 23 },
// ]

// const noOfTime = (Object.keys(DayData[0]).length);



const Weather = () => {
    const [timePassed, settimePassed] = useState(false);
    const [chartData1, setChartData1] = useState({});
    const [chartData2, setChartData2] = useState({});
    const [radio, setRadio] = useState(true);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState();
    const [final_arr, setFinal_arr] = useState(null);
    const [ind, setind] = useState(6);
    useEffect(() => {
        setTimeout(() => {
            Passed();
        }, 2000);
        apiCalls();
    }, [radio]);

    const apiCalls = () => {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Kathmandu&APPID=920e416e06ad3a34c0ec275b1e96bc49")
            .then(res => res.json())
            .then((data) => {

                setItems(data.items)
                console.log(radio)
                const new_array = [];
                for (var i = 0; i < data.list.length; i++) {
                    new_array.push({ 'Date': data.list[i].dt_txt.split(' ')[0], 'Time': data.list[i].dt_txt.split(' ')[1], 'Max_Temp': data.list[i].main.temp_max, 'Min_Temp': data.list[i].main.temp_min })
                }

                let output = [];
                let date = "";
                new_array.forEach(data => {
                    let temp = {
                        Date: "",
                        Time: [],
                        Max_Temp: [],
                        Min_temp: []
                    };
                    if (date == data.Date) {
                        let filter = output.filter(o => o.Date == data.Date)

                        radio ? filter[0].Max_Temp.push(data.Max_Temp - 273.15)
                            : filter[0].Max_Temp.push((data.Max_Temp - 273.15) * (9 / 5) + 32)


                        radio ? filter[0].Min_temp.push(data.Min_Temp - 273.15)
                            : filter[0].Min_temp.push((data.Min_Temp - 273.15) * (9 / 5) + 32)

                        filter[0].Time.push(data.Time);
                    } else {
                        date = data.Date;
                        temp.Date = data.Date;

                        radio ? temp.Max_Temp.push(data.Max_Temp - 273.15)
                            :
                            temp.Max_Temp.push((data.Max_Temp - 273.15) * (9 / 5) + 32)


                        radio ? temp.Min_temp.push(data.Min_Temp - 273.15)
                            :
                            temp.Min_temp.push((data.Min_Temp - 273.15) * (9 / 5) + 32)

                        temp.Time.push(data.Time);
                        output.push(temp);
                    }
                });

                // const final_arr=[];
                // for(var i=0;i<result.length;i++){
                //     final_arr.push(result[i])
                // }
                // final_arr.splice(1, result.length - 1);
                // console.log(result.splice(1, result.length - 1));
                setFinal_arr(output);
                // setFinal_arr(result)
                setIsLoaded(false)
            })
            .catch(err => {
                setIsLoaded(false)
            })
    }

    const Passed = () => {
        settimePassed(true);
    }
    const celciusHandler = () => {
        setRadio(true)
        apiCalls()
    }
    const farenheitHandler = () => {
        setRadio(false)
        apiCalls()
    }

    if (isLoaded) {
        return <Welcome />
    } else {
        return (
            <div style={{ backgroundImage: `url(${back})` }}>
                <div className='container'>
                    <center><h2>Weather Application</h2></center>
                    <div>
                        <input
                            type='radio'
                            checked={radio}
                            onChange={celciusHandler}
                        />Celcius &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                            type='radio'
                            checked={!radio}
                            onChange={farenheitHandler}
                        />Fahrenheit
                        </div>
                    <br />

                    < div class="container">
                        <div class="card-deck">
                            {!isLoaded && final_arr.map((item, index) => {
                                var max_sum = 0;
                                for (var i = 0; i < item.Max_Temp.length; i++) {
                                    max_sum = max_sum + item.Max_Temp[i]
                                }
                                var min_sum = 0;
                                for (var i = 0; i < item.Min_temp.length; i++) {
                                    min_sum = min_sum + item.Min_temp[i]
                                }
                                return (
                                    <Card
                                        temp1={`${parseFloat(max_sum / item.Max_Temp.length).toFixed(3)} ${radio ? 'Celcius' : 'Fahrenheit'}`}
                                        date={item.Date}
                                        temp2={`${parseFloat(min_sum / item.Min_temp.length).toFixed(3)} ${radio ? 'Celcius' : 'Fahrenheit'}`}
                                        onClick={() => (setChartData1({
                                            labels: item.Time,
                                            datasets: [
                                                {
                                                    label: 'Temperature',
                                                    data: item.Max_Temp,
                                                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                                                }
                                            ]
                                        }),
                                            setChartData2({
                                                labels: item.Time,
                                                datasets: [
                                                    {
                                                        label: 'Temperature',
                                                        data: item.Min_temp,
                                                        backgroundColor: 'rgba(255, 99, 132, 0.6)'
                                                    }
                                                ]
                                            })
                                        )
                                        } />
                                )
                            })}
                        </div>
                    </div>

                    <div className="chart">
                        <br />
                        <center> <h2>BarGraph of Maximum Temperature of Kathmandu in {radio ? 'Celcius' : 'Fahrenheit'}</h2></center>
                        <br />
                        <Bar
                            data={chartData1}
                        />
                    </div>
                    <div className="chart">
                        <br />
                        <center> <h2>BarGraph of Minimum Temperature of Kathmandu in {radio ? 'Celcius' : 'Fahrenheit'}</h2></center>
                        <br />
                        <Bar
                            data={chartData2}
                        />
                    </div>
                </div>
            </div>
        )

    }
}
export default Weather;