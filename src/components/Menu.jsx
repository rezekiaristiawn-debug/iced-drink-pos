import pociImg from "../assets/poci.webp";
import greenteaImg from "../assets/greentea.webp";

function Menu() {
  const menuList = [
    { id: 1, name: "Poci", price: 5000, src: pociImg },
    { id: 2, name: "Green Tea", price: 8000, src: greenteaImg },
  ];

  return (
    <div className="grid grid-cols-[repeat(7,_1fr)] gap-4 p-4">
      {menuList.map((item) => (
        <div key={item.id}>
          <img src={item.src} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Menu;
