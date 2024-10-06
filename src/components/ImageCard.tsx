type Props = {
  imageUrl: string;
  children: React.ReactNode;
};

export default function ImageCard({ imageUrl, children }: Props) {
  return (
    <figure className="container overflow-hidden rounded-base border-2 border-border dark:border-darkBorder bg-main font-base shadow-light dark:shadow-dark">
      <img className="max-w-full " src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-text border-border dark:border-darkBorder p-4">
        {children}
      </figcaption>
    </figure>
  );
}
