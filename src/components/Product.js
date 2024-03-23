import Image from "next/image";

export default function Product({ name, description, imageSrc }) {
  return (
    <div className={"pt flex flex-col items-center pt-[48px] first:pt-[24px]"}>
      <div className={"relative h-[151px] w-[200px] md:h-[193px] md:w-[256px]"}>
        <Image fill={true} src={imageSrc} sizes={"(min-width: 200px) 200px, 151px, (min-width: 768px) 256px, 193px"} alt="" />
      </div>
      <h3 className={"pt-[24px] text-center font-fraunces text-[24px] font-black text-dark-grey-blue"}>{name}</h3>
      <p className={"pt-4 text-center font-barlow text-[18px] text-dark-grey-blue"}>{description}</p>
    </div>
  );
}
