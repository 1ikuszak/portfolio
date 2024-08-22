import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DynamicImage from "./dynamic-image";

interface CaseStudyCarouselProps {
  urls: string[];
}

export function CaseStudyCarousel({ urls }: CaseStudyCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {urls.map((url, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video h-full w-full">
              <DynamicImage alt={url} url={url}></DynamicImage>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white hover:bg-transparent" />
      <CarouselNext className="bg-white hover:bg-transparent" />
    </Carousel>
  );
}
