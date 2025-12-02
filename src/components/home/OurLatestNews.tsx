import news1 from "../../assets/Screenshot 2025-12-01 221000.png";
import news2 from "../../assets/Screenshot 2025-12-01 221104.png";
import news3 from "../../assets/Screenshot 2025-12-01 221129.png";
import news4 from "../../assets/Screenshot 2025-12-01 221149.png";

const OurLatestNews = () => {
  const items = [
    {
      img: news1,
      date: "February 9, 2024",
      author: "Editor",
      title: "How to Write a Blog Post Your Readers Will Love in 5 Steps",
      link: "#",
    },
    {
      img: news2,
      date: "February 7, 2024",
      author: "Editor",
      title: "9 Content Marketing Trends and Ideas to Increase Traffic",
      link: "#",
    },
    {
      img: news3,
      date: "February 5, 2024",
      author: "Editor",
      title: "The Ultimate Guide to Marketing Strategies to Improve Sales",
      link: "#",
    },
    {
      img: news4,
      date: "February 3, 2024",
      author: "Editor",
      title: "50 Best Sales Questions to Determine Your Customer's Needs",
      link: "#",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
        OUR LATEST NEWS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 group">
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-1/2 h-64 object-cover"
            />

            <div className="flex flex-col justify-center w-full md:w-1/2">
              <p className="text-gray-500 text-sm mb-2">
                {item.date} • by {item.author}
              </p>

              <h3 className="text-2xl font-semibold leading-snug mb-4 group-hover:opacity-80 transition">
                {item.title}
              </h3>

              <a
                href={item.link}
                className="text-black text-lg underline underline-offset-4 hover:opacity-60 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLatestNews;
