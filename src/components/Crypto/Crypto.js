import React, { useEffect, useState } from 'react';
import CryptoData from '../CryptoData/CryptoData';
import './Crypto.css'

const Crypto = () => {
    let [search, setSearch] = useState('');
    let [cryto, setCryptoData] = useState([])
    // console.log(search)
    useEffect(() => {
        let url = `https://api.coinstats.app/public/v1/coins?skip=0&limit=100%C2%A4cy=${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCryptoData(data.coins))
    }, [search])

    let handleCrypto = (e) => {
        let searchdata = e.target.value
        setSearch(searchdata)
    }
    console.log(cryto);
    return (
        <div>
            <input type="text" onChange={handleCrypto} placeholder='Enter text' name="" id="" />
            <div>
                <table>
                    <tr>
                        <th>name</th>
                        <th>icon</th>

                        <th>rank</th>
                        <th>price</th>
                        <th>totalSupply</th>

                    </tr>
                    {
                        cryto.map(crypdata => <CryptoData
                            key={crypdata.id}
                            crypdata={crypdata}
                        >
                        </CryptoData>)
                    }

                </table>

            </div>
        </div>
    );
};

export default Crypto;