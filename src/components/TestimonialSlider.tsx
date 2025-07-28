import ReviewCard from "./ReviewCard";
import React from "react";
import { User, Users, Briefcase, Heart, Zap, Trophy } from "lucide-react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      review:
        "This product has completely transformed our workflow. The team collaboration features are outstanding and the user interface is incredibly intuitive.",
      starRating: 5,
      Icon: User,
    },
    {
      name: "Michael Chen",
      review:
        "Outstanding customer service and product quality. I've been using this for over a year and it keeps getting better with each update.",
      starRating: 5,
      Icon: Briefcase,
    },
    {
      name: "Emily Davis",
      review:
        "The best investment we've made for our company. It's saved us countless hours and improved our overall productivity significantly.",
      starRating: 4,
      Icon: Trophy,
    },
    {
      name: "David Wilson",
      review:
        "Exceptional value for money. The features are robust and the learning curve is minimal. Highly recommend to anyone looking for efficiency.",
      starRating: 5,
      Icon: Zap,
    },
    {
      name: "Lisa Rodriguez",
      review:
        "Game-changer for our team! The integration capabilities are seamless and the support team is always ready to help when needed.",
      starRating: 4,
      Icon: Users,
    },
    {
      name: "James Thompson",
      review:
        "I love how user-friendly this platform is. It's made complex tasks simple and has greatly improved our client satisfaction rates.",
      starRating: 5,
      Icon: Heart,
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="h-fit responsive-p flex flex-col max-sm:justify-center {md:items-center}">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust our platform
        </p>
      </div>

      <div className="relative overflow-hidden flex items-center justify-center">
        <div className="flex animate-scroll w-full flex-row sm:justify-center gap-10 mt-14">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-80 md:w-96 mx-4">
              <ReviewCard
                name={testimonial.name}
                review={testimonial.review}
                starRating={testimonial.starRating}
                Icon={testimonial.Icon}
                cardStyles="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
