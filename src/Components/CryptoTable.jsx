import React, { useState } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import CoinRow from "./CoinRow";

const CryptoTable = ({ crypto }) => {
  const [search, setSearch] = useState("");

  const filterCoins = crypto.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-table">
      <input
        type="text"
        placeholder="Search Coin"
        className="form-control bg-dark text-light border-0 mt-4 text-center"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-dark mt-4 table-hover">
        <thead>
          <tr>
            <td>Market Rank</td>
            <td>Coin Name</td>
            <td>Current Price</td>
            <td>Price change 24h</td>
          </tr>
        </thead>
        <tbody>
          {filterCoins.map((coin) => (
            <CoinRow coin={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
