import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-gray-50">
      {/* Breadcrumb and Title Section */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-100">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center animate-fade-in">
            <p className="text-xs md:text-sm text-rose-600 mb-3 font-medium tracking-wide">Home / Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-rose-100 group">
            <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:scale-110 transition-all duration-300">
              <Phone className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-1">+00 123-456-789</p>
            <p className="text-sm text-gray-500">Mon-Fri 9am-6pm</p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-rose-100 group">
            <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-1">demo@example.com</p>
            <p className="text-sm text-gray-500">We'll reply within 24hrs</p>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-rose-100 group">
            <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:scale-110 transition-all duration-300">
              <MapPin className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600 mb-1">99 New Theme St.</p>
            <p className="text-sm text-gray-500">XY, USA 12345</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Map and Location Info */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-100 overflow-hidden animate-fade-in-up">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540815189858!2d-0.12174492346587866!3d51.50330097181434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon%20Eye!5e0!3m2!1sen!2seg!4v1733305651039!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="London Eye Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-rose-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">London Eye</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Riverside Building, County Hall
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Westminster Bridge Rd, London SE1 7PB, United Kingdom
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-lg">★★★★</span>
                      <span className="text-gray-300 text-lg">★</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">4.5</span>
                    <span className="text-sm text-gray-500">16,961 reviews</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/London+Eye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-rose-600 hover:text-rose-700 font-medium hover:underline inline-flex items-center gap-1 transition-colors"
                  >
                    View larger map
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-rose-600" />
                <h3 className="font-semibold text-lg text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-rose-100 p-2 rounded-lg">
                <MessageSquare className="w-6 h-6 text-rose-600" />
              </div>
              <h2 className="text-3xl font-serif text-gray-900">Get In Touch</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your email <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 resize-none transition-all duration-200 hover:border-rose-300"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 px-6 rounded-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
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
