import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/constants";
import ReviewCard from "./ReviewCard";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

function TestimonialSlider() {
  const plugin = useRef(Autoplay({ delay: 2, stopOnInteraction: true }));

  return (
    <Carousel
      className="w-60 md:w-[50rem]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      //   opts={{ loop: true }}
    >
      <CarouselContent>
        {reviews.map((client, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <ReviewCard {...client} cardStyles={``} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default TestimonialSlider;
