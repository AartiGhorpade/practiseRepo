import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-gray-800">MyStore</div>

      {/* Navigation Links */}
      <nav className="space-x-6 hidden md:flex">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Product
        </a>
      </nav>

      {/* Cart */}
      <AddToCart />
    </header>
  );
};

export default Header;
