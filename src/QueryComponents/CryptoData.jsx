import axios from "axios";
import { useQuery } from "react-query";
import CryptoTable from "../Components/CryptoTable";

const CryptoData = () => {
  const getData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
    );

    return response.data;
  };

  const { data, status } = useQuery("cryptos", getData);

  if (status === "loading") {
    return <p>cargando</p>;
  }
  if (status === "error") {
    return <p>error</p>;
  }

  return (
    <div>
      {/* {data.map(coin => ( */}
      <CryptoTable crypto={data} />
      {/*  */}
    </div>
  );
};

export default CryptoData;
