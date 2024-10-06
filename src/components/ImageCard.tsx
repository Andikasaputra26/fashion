import Image from "next/image";

type Props = {
  imageUrl: string;
  children: React.ReactNode;
};

export default function ImageCard({ imageUrl, children }: Props) {
  return (
    <figure className="container overflow-hidden rounded-lg border-2 border-border dark:border-darkBorder bg-main font-base shadow-light dark:shadow-dark">
      <Image
        className="max-w-full"
        src={imageUrl}
        alt="image" // Consider making this more descriptive for better accessibility
        width={200}
        height={200}
        layout="responsive" // Makes the image responsive
      />
      <figcaption className="border-t-2 text-text border-border dark:border-darkBorder p-4">
        {children}
      </figcaption>
    </figure>
  );
}
