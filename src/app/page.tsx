import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Section */}
      <div className="relative w-screen h-screen mb-10">
        <Image
          src="/156(1).jpg"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 md:px-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
              Explore The World To Discover Your Dreams
            </h1>
            <p className="text-white text-sm md:text-lg mt-2">
              This is a world travel blog featuring beautiful destinations, new
              experiences, and hidden places around the globe.
            </p>
            <p className="text-white font-semibold mt-5">Please tag along!</p>
            <button className="text-white font-bold border border-white px-6 py-2 rounded-md mt-5 hover:bg-white hover:text-black transition duration-300">
              Start Exploring
            </button>
          </div>
        </div>
      </div>

      {/* Torn Effect */}
      <div className="bg-white text-center py-10">
        <h2 className="text-orange-500 text-3xl md:text-4xl lg:text-5xl font-bold">
          Featured Blogs
        </h2>
      </div>

      {/* Blog Cards Section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image
              src="/travel.png"
              width={400}
              height={200}
              alt="Travel Blogs"
              className="rounded-md"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
              Travel Blogs
            </h3>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image
              src="/destination1.png"
              width={400}
              height={200}
              alt="Destination"
              className="rounded-md"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
              Destination
            </h3>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image
              src="/category.png"
              width={400}
              height={200}
              alt="Category"
              className="rounded-md"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
              Category
            </h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 mb-8">
        <button className="text-orange-500 font-bold border border-orange-500 px-6 py-2 rounded-md hover:bg-orange-500 hover:text-white transition duration-300">
          Explore More
        </button>
      </div>

      {/* Footer Section */}
      <div className="relative w-screen h-80 mb-10">
        <Image
          src="/bottom.png"
          alt="Get In Touch"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 md:px-8">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Get In Touch
            </h1>
            <p className="text-white text-sm md:text-lg mt-2">
              Feel free to <span className="font-bold">contact me</span> if you
              have travel questions, comments, or suggestions.
            </p>
            <p className="text-white mt-5">I will get back to you!</p>
            <button className="text-white text-3xl md:text-5xl mt-5">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


