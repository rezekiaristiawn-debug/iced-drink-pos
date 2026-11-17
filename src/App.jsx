import { useState } from "react";
import Menu from "./components/Menu";
import RevenueCard from "./components/RevenueCard";

function App() {
  const [revenueHistory, setRevenueHistory] = useState([]);

  const totalRevenue = revenueHistory.reduce((total, price) => total + price, 0);

  const handleMenuClick = (price) => {
    setRevenueHistory((current) => [...current, price]);
  };

  const handleDeleteRevenue = () => {
    setRevenueHistory((current) => current.slice(0, -1));
  };

  return (
    <>
      <section className="flex min-h-screen flex-col md:flex-col p-2">
        <Menu onSelect={handleMenuClick} />
        <RevenueCard
          total={totalRevenue}
          canDelete={revenueHistory.length > 0}
          onDelete={handleDeleteRevenue}
        />
      </section>
    </>
  );
}

export default App;
