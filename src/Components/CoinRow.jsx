import React from "react";

const CoinRow = ({ coin }) => {
  return (
    <tr key={coin.id}>
      <td>#{coin.market_cap_rank}</td>
      <td>
        <img src={coin.image} alt="" width={25} className="img-fluid me-4" />
        <span>{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>
    </tr>
  );
};

export default CoinRow;
