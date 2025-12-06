export function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb and Title Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Home / Contact Us</p>
            <h1 className="text-4xl font-serif">Contact Us</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Map and Location Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {/* Google Map */}
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540815189858!2d-0.12174492346587866!3d51.50330097181434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon%20Eye!5e0!3m2!1sen!2seg!4v1733305651039!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="London Eye Location"
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">London Eye</h3>
              <p className="text-sm text-gray-600 mb-1">
                Riverside Building, County Hall
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Westminster Bridge Rd, London SE1 7PB, United Kingdom
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center">
                  <span className="text-orange-500 text-lg">★★★★</span>
                  <span className="text-gray-300 text-lg">★</span>
                </div>
                <span className="text-sm font-semibold">4.5</span>
                <span className="text-sm text-gray-500">16,961 reviews</span>
              </div>
              <a
                href="https://www.google.com/maps/place/London+Eye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline mt-2 inline-block"
              >
                View larger map
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-serif mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-8">
              If you wish to directly reach us, Please fill out the form below -
            </p>

            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-700 mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-700 mb-2"
                >
                  Your message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
