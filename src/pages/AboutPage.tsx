import { Award, Heart, Leaf, Users } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural & Sustainable",
      description:
        "We're committed to using natural, ethically sourced ingredients and sustainable packaging.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cruelty-Free",
      description:
        "All our products are 100% cruelty-free and never tested on animals.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description:
        "We never compromise on quality, ensuring every product meets the highest standards.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description:
        "Our customers are at the heart of everything we do, and we're here to support your beauty journey.",
    },
  ];

  const team = [
    {
      name: "Emma Rodriguez",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1515019647021-21af2ecca43c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwd29tYW58ZW58MXx8fHwxNzY0NTkwNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Formulation Scientist",
      image:
        "https://images.unsplash.com/photo-1515019647021-21af2ecca43c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwd29tYW58ZW58MXx8fHwxNzY0NTkwNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Michael Anderson",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1515019647021-21af2ecca43c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwd29tYW58ZW58MXx8fHwxNzY0NTkwNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1736236560164-bc741c70bca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NDU5MDQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="About Cosmika"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">About Cosmika</h1>
          <p className="text-xl">Redefining Beauty, Naturally</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-rose-600 tracking-widest mb-4">OUR STORY</p>
            <h2 className="text-4xl mb-6">Where Beauty Meets Nature</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 2018, Cosmika was born from a simple belief: beauty
              should be natural, sustainable, and accessible to everyone. Our
              founder, Emma Rodriguez, started this journey in her small
              laboratory with a vision to create products that not only enhance
              natural beauty but also care for the skin and the planet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to be a leading name in clean beauty, serving
              thousands of customers worldwide with our carefully curated
              collection of premium cosmetics and skincare products. Every
              product we create is a testament to our commitment to quality,
              sustainability, and the power of natural ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rose-600 tracking-widest mb-2">OUR VALUES</p>
            <h2 className="text-4xl mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-600">
                  {value.icon}
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">50K+</div>
              <p className="text-rose-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl mb-2">200+</div>
              <p className="text-rose-100">Products</p>
            </div>
            <div>
              <div className="text-5xl mb-2">100%</div>
              <p className="text-rose-100">Cruelty-Free</p>
            </div>
            <div>
              <div className="text-5xl mb-2">5 Years</div>
              <p className="text-rose-100">Of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rose-600 tracking-widest mb-2">OUR TEAM</p>
            <h2 className="text-4xl mb-4">Meet The Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of beauty experts and scientists work
              tirelessly to bring you the best products and experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1552256028-2c58c3cbfa7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NDU5MDQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cosmika Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-rose-600 tracking-widest mb-4">INNOVATION</p>
              <h2 className="text-4xl mb-6">Our Laboratory</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At our state-of-the-art laboratory, science meets beauty. Our
                team of expert chemists and dermatologists work together to
                develop innovative formulations that deliver real results while
                staying true to our natural and sustainable values.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every product undergoes rigorous testing and quality control to
                ensure it meets our high standards. We believe in transparency
                and provide detailed ingredient lists for all our products, so
                you always know what you're putting on your skin.
              </p>
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 transition-colors">
                Learn About Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-6">Join Our Beauty Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference that natural, premium beauty products can
            make in your daily routine.
          </p>
          <button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 transition-colors">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}
