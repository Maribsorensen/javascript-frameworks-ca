import LoopCartHero from "../../assets/LoopCartHero.png";

export function HomeHero() {
  return (
  <div className="flex flex-row items-center justify-center bg-white p-4">
    <img className="w-full h-auto" src={LoopCartHero} alt="White shopping bag on a windowsill" />
    <div className="p-4">
      <p className="font-body">LoopCart is here to cover all your shopping needs and wants. Your cart, your choice!</p>
    </div>
  </div>
  );
}