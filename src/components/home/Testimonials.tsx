import { useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  rating: number;
  title: string;
  review: string;
  customerName: string;
  date: string;
  image: string;
}

export function Testimonials() {
  const [currentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      title: "SHINY FINDS FOR EVERY MOOD",
      review:
        "Great selection, excellent quality, my go-to store for all beauty needs. Highly recommend!",
      customerName: "Natalie Schaller",
      date: "04 July, 2025",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      id: 2,
      rating: 5,
      title: "PERFECT PIECES FOR EVERYONE",
      review:
        "Exceptional products, amazing customer service, and my skin has never looked better!",
      customerName: "Jhone Doe",
      date: "02 July, 2025",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    },
    {
      id: 3,
      rating: 5,
      title: "OUTSTANDING QUALITY AND VALUE",
      review:
        "The best beauty products I've found. Fast shipping and excellent customer support throughout!",
      customerName: "Sarah Mitchell",
      date: "01 July, 2025",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      id: 4,
      rating: 5,
      title: "TRANSFORMS MY SKINCARE ROUTINE",
      review:
        "These products have completely transformed my skincare routine. Highly satisfied with every purchase!",
      customerName: "Emma Wilson",
      date: "30 June, 2025",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
    },
  ];

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Title and Button */}
          <div className="flex-shrink-0 w-full lg:w-80">
            <p className="text-xs text-gray-600 mb-4 tracking-widest font-medium">
              TESTIMONIAL
            </p>
            <h2 className="text-4xl md:text-4xl font-serif mb-8 leading-tight">
              WHAT CLIENT
              <br />
              SAY
            </h2>
            <button className="border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium tracking-wider w-full lg:w-auto">
              View All
            </button>
          </div>

          {/* Right Side - Testimonials Carousel */}
          <div className=" w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif mb-3 text-black leading-tight">
                    {testimonial.title}
                  </h3>

                  {/* Review Text */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {testimonial.review}
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.customerName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-sm text-black">
                        {testimonial.customerName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
