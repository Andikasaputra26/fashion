import Image from "next/image"; // Import Image from Next.js

const BrandsSection = () => {
  const items = [
    {
      id: 1,
      img: "/img/hnm.png",
      width: 120,
      height: 60,
    },
    {
      id: 2,
      img: "/img/obey.png",
      width: 120,
      height: 60,
    },
    {
      id: 3,
      img: "/img/shopify.png",
      width: 120,
      height: 60,
    },
  ];

  return (
    <div className="bg-main py-10 mt-5">
      <div className="container mx-auto flex justify-center items-center">
        {items.map((item) => (
          <div key={item.id} className="mx-4 flex justify-center items-center">
            <Image
              src={item.img}
              alt={`Brand ${item.id}`}
              width={120} // Set fixed width
              height={60} // Set fixed height
              className="object-contain w-32 h-16" // Set fixed width and height in TailwindCSS
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
