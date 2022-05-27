import React from 'react';
import './CryptoData.css'

const CryptoData = (props) => {
    // console.log(props.coins);
    let { name, icon, symbol, rank, price, totalSupply, websiteUrl } = props.crypdata
    return (
        <tr>
            <td>{name}</td>
            <td><img src={icon} alt="" /></td>
            <td>{rank}</td>
            <td>{price}</td>
            <td>{totalSupply}</td>

        </tr>
    );
};

export default CryptoData;