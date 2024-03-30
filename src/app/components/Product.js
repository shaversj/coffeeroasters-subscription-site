import Image from "next/image";

export default function Product({ name, description, imageSrc }) {
  return (
    <div
      className={
        "flex flex-col items-center pt-[48px] first:pt-[24px] md:flex-row md:items-start md:px-[60px] lg:max-w-[279px] lg:flex-col lg:items-center lg:px-0 lg:pt-0 lg:first:pt-0"
      }
    >
      <div className={"relative h-[151px] w-[200px] md:h-[193px] md:w-[256px] md:shrink-0"}>
        <Image fill={true} src={imageSrc} sizes={"(min-width: 200px) 200px, 151px, (min-width: 768px) 256px, 193px"} alt="" />
      </div>
      <div>
        <h3 className={"pt-[24px] text-center font-fraunces text-[24px] font-black text-dark-grey-blue md:text-left lg:text-center"}>{name}</h3>
        <p className={"pt-4 text-center font-barlow text-[18px] text-dark-grey-blue md:text-left lg:text-center"}>{description}</p>
      </div>
    </div>
  );
}
