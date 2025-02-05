import React from "react";

export default function Contact() {
  return (
    <div>
      {/* Fullscreen Banner */}
      <div
        className=" h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact.png')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    
          <p className="text-white text-base sm:text-lg mt-2">
            
          </p>
        </div>
      </div>
      

      {/* Contact Section */}
      <div className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm sm:text-lg font-semibold text-orange-500">GET IN TOUCH</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Contact Form</h3>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Send me your questions comments or suggestions! If you'd like to work with me or you have a question or comment you can contact me using the form below. You can also find <a href="#" className="text-orange-500 underline">more info about me here</a>. Sometimes I'm busy traveling but I try to respond to any messages!
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-10 px-4 sm:py-12 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
Contact()
