import { fetchWeatherApi } from 'openmeteo';
import React, { useEffect, useState } from 'react';

function Display() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    "latitude": 52.52,
                    "longitude": 13.41,
                    "hourly": "temperature_2m"
                };
                const url = "https://api.open-meteo.com/v1/forecast";
                const responses = await fetchWeatherApi(url, params);

                const response = responses[0];
                const utcOffsetSeconds = response.utcOffsetSeconds();
                const hourly = response.hourly();

                const weatherData = {
                    hourly: {
                        time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                            t => new Date((t + utcOffsetSeconds) * 1000)
                        ),
                        temperature2m: hourly.variables(0).valuesArray(),
                    },
                };

                setWeatherData(weatherData);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchData();
    }, []);

    const range = (start, stop, step) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    return (
        <div>
            {weatherData && (
                weatherData.hourly.time.map((time, i) => (
                    <p key={i}>{time.toISOString()}</p>
                ))
            )}
        </div>
    );
}

export default Display;
