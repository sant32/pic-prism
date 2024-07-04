import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
        <h1 className="text-2xl font-bold text-center mb-4">Let's Connect</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              className="shadow-md rounded-md w-full
            px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black
            "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="xxx@gmail.com"
              className="shadow-md rounded-md w-full
            px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black
            "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="shadow-md rounded-md w-full
            px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black
            "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="accountType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select your account type
            </label>
            <select
              className="shadow-md rounded-md w-full
            px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
        <div className="flex items-center justify-end mb-4">
        <Link className="text-xs text-black " to='/login'>
          Log In With Account
          </Link>
        </div>
        <button type="submit" className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black">
          Signup
        </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
