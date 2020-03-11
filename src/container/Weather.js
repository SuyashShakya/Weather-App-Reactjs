import React, { useState, useEffect } from 'react';
import Card from '../component/Card';
import Welcome from '../container/Welcome/Welcome';
import { Bar } from 'react-chartjs-2';
import back from '../assets/back.jpg';


const DayData = [
    { id: 1, Date: '1 March 2020', Time0: 15, Time2: 16, Time4: 17, Time6: 18, Time8: 20, Time10: 22, Time12: 25, Time14: 26, Time16: 23, Time18: 22, Time20: 19, Time22: 18 },
    { id: 2, Date: '5 March 2020', Time0: 16, Time2: 18, Time4: 19, Time6: 20, Time8: 21, Time10: 24, Time12: 27, Time14: 28, Time16: 24, Time18: 23, Time20: 22, Time22: 20 },
    { id: 3, Date: '10 March 2020', Time0: 18, Time2: 20, Time4: 22, Time6: 24, Time8: 26, Time10: 28, Time12: 30, Time14: 32, Time16: 28, Time18: 27, Time20: 26, Time22: 23 },
    { id: 4, Date: '15 March 2020', Time0: 18, Time2: 20, Time4: 21, Time6: 22, Time8: 24, Time10: 25, Time12: 30, Time14: 34, Time16: 32, Time18: 28, Time20: 24, Time22: 20 },
    { id: 5, Date: '20 March 2020', Time0: 20, Time2: 21, Time4: 22, Time6: 23, Time8: 24, Time10: 28, Time12: 32, Time14: 34, Time16: 30, Time18: 28, Time20: 25, Time22: 23 },

]

const noOfTime = (Object.keys(DayData[0]).length);



const Weather = () => {
    const [timePassed, settimePassed] = useState(false);
    const [chartData, setChartData] = useState({});
    const [radio, setRadio] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setTimePassed();
        }, 2000);
    },[]);

    const setTimePassed = () => {
        settimePassed(true);
    }
    const celciusHandler = () => {
        setRadio(true)
    }
    const farenheitHandler = () => {
        setRadio(false)
    }

    if (!timePassed) {
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
                    {radio ?
                        < div class="container">
                            <div class="card-deck">
                                {DayData.map((weather, index) => {
                                    return (
                                        <Card
                                            temp={((weather.Time0 + weather.Time2 + weather.Time4 + weather.Time6 + weather.Time8 + weather.Time10 + weather.Time12 + weather.Time14 + weather.Time16 + weather.Time18 + weather.Time20 + weather.Time22) / (noOfTime - 2)).toFixed(2) + ' Degree Celcius'}
                                            date={weather.Date}
                                            onClick={() => (setChartData({
                                                labels: ['12 Am', '2 Am', '4 Am', '6 Am', '8 Am', '10 Am', '12 Pm', '2 Pm', '4 Pm', '6 Pm', '8 Pm', '10 Pm'],
                                                datasets: [
                                                    {
                                                        label: 'Temperature',
                                                        data: [weather.Time0, weather.Time2, weather.Time4, weather.Time6, weather.Time8, weather.Time10, weather.Time12, weather.Time14, weather.Time16, weather.Time18, weather.Time20, weather.Time22],
                                                        backgroundColor: 'rgba(255, 99, 132, 0.6)'
                                                    }
                                                ]
                                            })

                                            )} />
                                    )
                                })}
                            </div>
                        </div>
                        : < div class="container">
                            <div class="card-deck">
                                {DayData.map(weather => {
                                    return (
                                        <Card
                                            temp={(((weather.Time0 + weather.Time2 + weather.Time4 + weather.Time6 + weather.Time8 + weather.Time10 + weather.Time12 + weather.Time14 + weather.Time16 + weather.Time18 + weather.Time20 + weather.Time22) / (noOfTime - 2)) * (9 / 5) + 32).toFixed(2) + ' Degree Fahrenheit'}
                                            date={weather.Date}
                                            onClick={() => (
                                                setChartData({
                                                    labels: ['12 Am', '2 Am', '4 Am', '6 Am', '8 Am', '10 Am', '12 Pm', '2 Pm', '4 Pm', '6 Pm', '8 Pm', '10 Pm'],
                                                    datasets: [
                                                        {
                                                            label: 'Temperature',
                                                            data: [(weather.Time0 * (9 / 5) + 32).toFixed(2), (weather.Time2 * (9 / 5) + 32).toFixed(2), (weather.Time4 * (9 / 5) + 32).toFixed(2), (weather.Time6 * (9 / 5) + 32).toFixed(2), (weather.Time8 * (9 / 5) + 32).toFixed(2), (weather.Time10 * (9 / 5) + 32).toFixed(2), (weather.Time12 * (9 / 5) + 32).toFixed(2), (weather.Time14 * (9 / 5) + 32).toFixed(2), (weather.Time16 * (9 / 5) + 32).toFixed(2), (weather.Time18 * (9 / 5) + 32).toFixed(2), (weather.Time20 * (9 / 5) + 32).toFixed(2), (weather.Time22 * (9 / 5) + 32).toFixed(2)],
                                                            backgroundColor: 'rgba(255, 99, 132, 0.6)'
                                                        }
                                                    ]
                                                })

                                            )} />)
                                })}
                            </div>
                        </div>}
                    <div className="chart">
                        <br />
                        <center> <h2>BarGraph of Temperature of Kathmandu in {radio ? 'Celcius' : 'Fahrenheit'}</h2></center>
                        <br />
                        <Bar
                            data={chartData}
                        />
                    </div>
                </div>
            </div>
        )


    }
}
export default Weather;