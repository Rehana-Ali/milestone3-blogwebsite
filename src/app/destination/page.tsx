
import Image from "next/image";

const categories = [
  {
    title: "United state",
    description: "A beautiful place to visit.",
    image: "/us.png",
  },
  {
    title: "BRAZIL",
    description: "A beautiful place to visit.",
    image: "/brazil.png",
  },
  {
    title: "MOROCO",
    description: "A beautiful place to visit.",
    image: "/moroco.png",
  },
  {
    title: "MEXICO",
    description: "A beautiful place to visit.",
    image: "/mexico.png",
  },
  {
    title: "SINGAPUR",
    description: "A beautiful place to visit.",
    image: "/singapur.png",
  },
];

export default function Category() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-screen h-64  md:h-96">
        <Image
          src="/destination.png" 
          alt="Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={true}
        />
        <div className="absolute inset-0 flex items-center justify-center">
  
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section: Categories */}
          <div className="mt-10 col-span-2 space-y-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={100}
                  height={100}
                  className="rounded-lg flex-shrink-0"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: About and Top Stories */}
          <div className="space-y-6 mt-10">
            {/* About Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600">
              Discover the world’s most breathtaking destinations with our travel website! From serene beaches to bustling cities, we bring you curated experiences, travel tips, and exclusive deals. Let us inspire your next adventure with detailed itineraries and stunning visuals. Whether you’re seeking relaxation or adventure, we’ve got something for every traveler. Start your journey today and explore the wonders of the globe!.
              </p>
            </div>

            {/* Top Stories Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
              <ul className="space-y-4">
                <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                Khao Sok National Park in (Thailand)
                </li>
                <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                Visit Budget Paradise in (Maldives) 
                </li>
                <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                Santa Ana Valcano Hike (Ilamatepec)
                </li>
                <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                Maya Bay Beach in (Thailand)
                </li>
                <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                How to visit Nara Park in (Japan)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


