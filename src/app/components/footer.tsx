
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Newsletter Section */}
      <div className="bg-white text-center py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800">Newsletter</h2>
        <p className="text-gray-600 mt-2">
          Subscribe to my newsletter for the latest blog posts, tips, & travel guides. Let&apos;s stay updated!
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Email..."
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-black text-white px-6 py-2 w-full sm:w-auto rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-gray-800">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-center py-6 border-t border-gray-700 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 text-white mb-4">
          <a href="#" className="hover:text-orange-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-orange-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-orange-500">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="#" className="hover:text-orange-500">
            <i className="fab fa-envelope"></i>
          </a>
          <a href="#" className="hover:text-orange-500">
            <i className="fas fa-rss"></i>
          </a>
        </div>
        <p className="text-sm">
          © The World Travel Guy 2024
        </p>
        <div className="flex flex-wrap justify-center space-x-4 mt-2 text-orange-500">
          <a href="/blog" className="hover:underline">
            Blog
          </a>
          <a href="/destination" className="hover:underline">
            Destination
          </a>
          <a href="/category" className="hover:underline">
            Category
          </a>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="text-center text-xs text-gray-500 py-4 px-4 sm:px-6 lg:px-8">
        The World Travel Guide is your ultimate companion for planning unforgettable adventures. Whether you're seeking travel tips
        <br className="hidden sm:block" />
        hidden gems or cultural insights we've got you covered. Let’s explore the world together!
      </div>
    </footer>
  );
}
