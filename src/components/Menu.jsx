import { useEffect, useRef, useState } from "react";
import pociImg from "../assets/poci.webp";
import greenteaImg from "../assets/greentea.webp";
import kukubimaImg from "../assets/kukubima.jpg";
import susuImg from "../assets/susu.jpg";
import tehtarikImg from "../assets/tehtarik.jpg";
import chocolatosImg from "../assets/chocolatos.jpg";
import gooddayImg from "../assets/goodday.jpg";
import vanillalateImg from "../assets/vanillalate.jpg";
import coklatsilverquinImg from "../assets/coklatsilverquin.jpg";

function Menu({ onSelect }) {
  const [clickCounts, setClickCounts] = useState({});
  const timers = useRef({});

  useEffect(() => {
    const activeTimers = timers.current;
    return () => {
      Object.values(activeTimers).forEach(clearTimeout);
    };
  }, []);

  const handleClick = (item) => {
    setClickCounts((current) => ({
      ...current,
      [item.id]: (current[item.id] || 0) + 1,
    }));

    clearTimeout(timers.current[item.id]);
    timers.current[item.id] = setTimeout(() => {
      setClickCounts((current) => {
        const next = { ...current };
        delete next[item.id];
        return next;
      });
      delete timers.current[item.id];
    }, 3000);

    onSelect(item.price);
  };

  const menuList = [
    { id: 1, name: "Poci", price: 3000, src: pociImg },
    { id: 2, name: "Green Tea", price: 3000, src: greenteaImg },
    { id: 3, name: "Kukubima", price: 3000, src: kukubimaImg },
    { id: 4, name: "Susu", price: 3000, src: susuImg },
    { id: 5, name: "Teh Tarik", price: 4000, src: tehtarikImg },
    { id: 6, name: "Chocolatos", price: 4000, src: chocolatosImg },
    { id: 7, name: "Good Day", price: 5000, src: gooddayImg },
    { id: 8, name: "Vanilla Late", price: 10000, src: vanillalateImg },
    { id: 9, name: "Coklat Silverquin", price: 10000, src: coklatsilverquinImg },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-7 md:grid-rows-[repeat(2,minmax(0,1fr))] gap-4 pt-0 p-2 md:p-2">
      {menuList.map((item) => (
        <div key={item.id} className="relative">
          <img
            src={item.src}
            alt={item.name}
            className="cursor-pointer"
            onClick={() => handleClick(item)}
          />

          {clickCounts[item.id] > 0 && (
            <span className="absolute top-0 right-0 flex h-7 min-w-7 items-center justify-center rounded-full bg-yellow-400 px-1.5 text-xs leading-none font-extrabold tabular-nums text-black shadow-md ring-2 ring-white">
              {clickCounts[item.id]}
            </span>
          )}

          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Menu;
