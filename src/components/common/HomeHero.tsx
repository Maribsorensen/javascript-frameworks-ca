import LoopCartHero from '../../assets/LoopCartHero.png';

/**
 * HomeHero component
 * A hero section for the home page, showcasing a shopping bag image and a tagline.
 * @returns {JSX.Element} The HomeHero component.
 */

export function HomeHero() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16 max-w-7xl mx-auto gap-8 rounded-lg">
      <img
        src={LoopCartHero}
        alt="White shopping bag on a windowsill"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg"
      />
      <div className="md:w-1/2">
        <p className="font-body text-lg md:text-xl leading-relaxed text-gray-700">
          LoopCart is here to cover all your shopping needs and wants. <br />
          <strong>Your cart, your choice!</strong>
        </p>
      </div>
    </section>
  );
}
