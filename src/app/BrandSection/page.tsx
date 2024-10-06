import Marquee from "@/components/Marquee";

const BrandsSection = () => {
  const items = [
    {
      id: 1,
      img: "/img/hm.png",
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
        {items.map((item) => {
          return <div className="">{item.img}</div>;
        })}
      </div>
    </div>
  );
};

export default BrandsSection;
