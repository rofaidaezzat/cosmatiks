import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Ordering & Payment",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are encrypted and secure.",
        },
        {
          question: "Can I modify or cancel my order?",
          answer:
            "You can modify or cancel your order within 2 hours of placing it. Please contact our customer service team immediately at support@cosmika.com or call us at +1 (234) 567-890.",
        },
        {
          question: "Do you offer gift cards?",
          answer:
            "Yes! We offer digital gift cards in various denominations ($25, $50, $100, $150). They can be purchased on our website and are delivered via email within minutes.",
        },
        {
          question: "Is it safe to order from your website?",
          answer:
            "Absolutely! We use industry-standard SSL encryption to protect your personal and payment information. We never store your complete credit card details on our servers.",
        },
      ],
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "What are your shipping options and costs?",
          answer:
            "We offer Standard Shipping (5-7 business days, $5.99) and Express Shipping (2-3 business days, $12.99). Orders over $50 qualify for free standard shipping within the United States.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to most countries worldwide. International shipping times vary by destination (typically 7-14 business days). Customs duties and taxes may apply and are the responsibility of the customer.",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'Orders' section.",
        },
        {
          question: "What if my order arrives damaged?",
          answer:
            "We're sorry if this happens! Please contact us within 48 hours of delivery with photos of the damaged items and packaging. We'll arrange a replacement or refund immediately.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for unused products in their original packaging. Products must be in resalable condition. Shipping costs for returns are the customer's responsibility unless the item is defective.",
        },
        {
          question: "How do I initiate a return?",
          answer:
            "Log into your account, go to 'Orders', select the order you want to return, and click 'Request Return'. You'll receive a return authorization and instructions via email within 24 hours.",
        },
        {
          question: "Can I exchange a product?",
          answer:
            "Yes! If you'd like to exchange a product for a different shade or variant, please initiate a return and place a new order for your desired item. This ensures you get your new product as quickly as possible.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Refunds are processed within 5-7 business days after we receive your return. The funds will appear in your original payment method within 3-5 business days after processing.",
        },
      ],
    },
    {
      category: "Products & Ingredients",
      questions: [
        {
          question: "Are your products cruelty-free?",
          answer:
            "Yes! All Cosmika products are 100% cruelty-free and never tested on animals. We're certified by leading cruelty-free organizations and are proud advocates for ethical beauty.",
        },
        {
          question: "Are your products vegan?",
          answer:
            "Many of our products are vegan, and we clearly label which ones contain animal-derived ingredients. Look for the 'Vegan' badge on product pages or filter by 'Vegan' when shopping.",
        },
        {
          question: "Do you use natural ingredients?",
          answer:
            "We prioritize natural, sustainably-sourced ingredients whenever possible. Each product page lists all ingredients, and our blog features articles about the benefits of natural skincare.",
        },
        {
          question: "How do I know which products are right for my skin type?",
          answer:
            "Each product page includes information about which skin types it's best suited for. You can also take our Skin Quiz on the homepage or contact our beauty experts for personalized recommendations.",
        },
        {
          question: "Do you offer samples?",
          answer:
            "We include complimentary samples with every order based on your purchase. You can also purchase our Discovery Sets, which include travel sizes of our most popular products.",
        },
      ],
    },
    {
      category: "Account & Privacy",
      questions: [
        {
          question: "Do I need an account to place an order?",
          answer:
            "No, you can checkout as a guest. However, creating an account allows you to track orders, save favorites, manage addresses, and receive exclusive member benefits.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "Click 'Login' at the top of the page, then 'Forgot Password'. Enter your email address and we'll send you instructions to reset your password.",
        },
        {
          question: "How is my personal information protected?",
          answer:
            "We take privacy seriously and never sell your personal information. All data is encrypted and stored securely. Please review our Privacy Policy for complete details.",
        },
        {
          question: "How do I unsubscribe from emails?",
          answer:
            "Click the 'Unsubscribe' link at the bottom of any marketing email, or manage your email preferences in your account settings under 'Communication Preferences'.",
        },
      ],
    },
  ];

  const allQuestions = faqCategories.flatMap((cat, catIndex) =>
    cat.questions.map((q, qIndex) => ({
      ...q,
      category: cat.category,
      globalIndex: catIndex * 100 + qIndex,
    }))
  );

  const filteredQuestions = searchQuery
    ? allQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions about orders, shipping, returns,
            and our products
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 focus:outline-none focus:border-rose-600"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {filteredQuestions ? (
          // Search Results
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-gray-600">
              {filteredQuestions.length} result
              {filteredQuestions.length !== 1 ? "s" : ""} found
            </p>
            <div className="space-y-4">
              {filteredQuestions.map((item) => (
                <div key={item.globalIndex} className="bg-white">
                  <button
                    onClick={() =>
                      setOpenIndex(
                        openIndex === item.globalIndex ? null : item.globalIndex
                      )
                    }
                    className="w-full px-6 py-4 flex items-start justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-left flex-1">
                      <span className="text-xs text-rose-600 mb-1 block">
                        {item.category}
                      </span>
                      <h3>{item.question}</h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${
                        openIndex === item.globalIndex ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === item.globalIndex && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Category View
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, catIndex) => (
              <div key={category.category}>
                <h2 className="text-2xl mb-4 text-rose-600">
                  {category.category}
                </h2>
                <div className="space-y-2">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex;
                    return (
                      <div key={qIndex} className="bg-white">
                        <button
                          onClick={() =>
                            setOpenIndex(
                              openIndex === globalIndex ? null : globalIndex
                            )
                          }
                          className="w-full px-6 py-4 flex items-start justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-left flex-1">{item.question}</h3>
                          <ChevronDown
                            className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${
                              openIndex === globalIndex ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openIndex === globalIndex && (
                          <div className="px-6 pb-6 border-t">
                            <p className="text-gray-600 leading-relaxed pt-4">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help! We typically respond
            within 24 hours.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 transition-colors">
              Contact Support
            </button>
            <button className="border border-gray-300 hover:border-rose-600 hover:text-rose-600 px-8 py-3 transition-colors">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
