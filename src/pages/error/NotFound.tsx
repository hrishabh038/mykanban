import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center pt-4 bg-neutral-950 text-neutral-100">
      
      {/* Error Code */}
      <h1 className="text-6xl sm:text-8xl font-extrabold text-purple-500 mb-6">
        404
      </h1>

      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-neutral-400 text-center max-w-md mb-6">
        Oops! The page you’re looking for doesn’t exist, has been moved, or was typed incorrectly. Don’t worry, you can always return to the homepage and continue exploring Learning Hub.
      </p>

      {/* CTA Button */}
      <Link
        to="/"
        className="bg-purple-500 hover:bg-purple-600 text-neutral-100 font-semibold px-6 py-3 rounded transition-all"
      >
        Go Back Home
      </Link>
      
    </main>
  );
};

export default NotFound;
