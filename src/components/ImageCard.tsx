type Props = {
  imageUrl: string;
  children: React.ReactNode;
};

import Image from "next/image";

export default function ImageCard({ imageUrl, children }: Props) {
  return (
    <figure className="container overflow-hidden rounded-base border-2 border-border dark:border-darkBorder bg-main font-base shadow-light dark:shadow-dark">
      <Image className="max-w-full " src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-text border-border dark:border-darkBorder p-4">
        {children}
      </figcaption>
    </figure>
  );
}
