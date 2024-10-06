import Marquee from "@/components/Marquee";

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
          <div key={item.id} className="mx-4 flex justify-center">
            <img
              src={item.img}
              alt={`Brand ${item.id}`}
              width={item.width}
              height={item.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
