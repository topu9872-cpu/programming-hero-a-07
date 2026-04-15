import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-7xl md:text-9xl font-extrabold text-[#244d3f]">404</h1>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/">
        <button className="btn mt-6 px-6 py-3 bg-[#244d3f] text-white rounded-lg ">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
