// import React, { useState } from "react";
// import axios from "axios";

// export default function Weather(){
//     const [input,setInput]=useState('');
//     const [idata,setIdata]=useState('')
//     const handleChange=(e)=>{
//         setTimeout(() => {
//             setInput(e.target.value)
//         }, 100);
//     }
//     console.log(input)
//     return(
//         <>
//         <div>
//             <form>
//                 <input type="text" value={input} placeholder="Enter city name" onChange={handleChange}></input>
//                 <button>Submit</button>
//             </form>
//         </div>
//         </>
//     )
// }
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const token='88bbf14c391f49a6a4072348241003';
// export default function Weather() {
//     const [input, setInput] = useState('');
//     const [subit, setSubmit] = useState(false);
//     const [data,setData]=useState([])

//     const handleChange = (e) => {
//         // setTimeout(() => {
//         //     setInput(e.target.value);
//         // }, 100);
//         setInput(e.target.value);
//     }

//     useEffect(()=>{
//         fetchData();
//     },[])

//     const fetchData=async()=>{
//         const res= await axios.get('https://api.weatherapi.com/v1/current.json',{params:{'key': `Bearer ${token}`,q:{input}}})
//         setData(res.data)
//     }
//     console.log(data);

//     return (
//         <>
//             <div>
//                 <input type="text" value={input} placeholder="Enter city name" onChange={handleChange}></input>
//                 <button>Submit</button>
//             </div>
//         </>
//     );
// }

import React, { useState } from "react";
import axios from "axios";
import Card from "../Card/Card";


const token = 'c8a14da38b9a413ea9383005241003';

export default function Weather() {
    const [input, setInput] = useState('');
    const [data, setData] = useState({});
    const [loading,setLoading]=useState(false)

    const handleChange = (e) => {
            setInput(e.target.value);
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get('https://api.weatherapi.com/v1/current.json', {
                params: {
                    key:token,
                    q: input
                }
            });
            setData(res.data);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Failed to fetch weather data')
            setLoading(false)
        }
    }

    

    return (
        <>
            <input type="text" value={input} placeholder="Enter city name" onChange={handleChange}></input>
            <button onClick={fetchData}>Submit</button>
            <div>
                {loading ? (<>
                <p>Loading data...</p>
                </>):(Object.keys(data).length > 0 && (
                        <Card 
                            temp={data.current?.temp_c} 
                            hum={data.current?.humidity} 
                            con={data.current?.condition?.text} 
                            windsp={data.current?.wind_kph}
                        />
                    )
                )}
            </div>

        </>
    );
}

