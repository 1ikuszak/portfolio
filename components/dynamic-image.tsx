import { getImage } from "@/lib/getImage";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DynamicImageProps {
  url: string;
  alt?: string;
  imageClass?: string;
}

export default async function DynamicImage({
  url,
  alt,
  imageClass,
}: DynamicImageProps) {
  const { base64, img } = await getImage(url);

  return (
    <Dialog>
      <DialogTrigger>
        <Image
          {...img}
          alt={alt || ""}
          placeholder="blur"
          blurDataURL={base64}
          fill
          className={cn("object-cover", imageClass)}
          quality={100}
          loading="lazy"
        />
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="mx-auto aspect-video sm:max-w-none md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl"
      >
        <DialogHeader>
          <DialogTitle className="sr-only">{url}</DialogTitle>
        </DialogHeader>
        <Image
          {...img}
          alt={alt || ""}
          placeholder="blur"
          blurDataURL={base64}
          fill
          className={cn("object-cover", imageClass)}
          quality={100}
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  );
}
