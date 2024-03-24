import Image from "next/image";

export default function Headquarters({ name, description, imageSrc, width, height }) {
  return (
    <div className={"pt flex flex-col items-center pt-[48px] first:pt-[72px]"}>
      <Image src={imageSrc} width={width} height={height} alt="" />
      <h3 className={"pt-[24px] text-center font-fraunces text-[24px] font-black text-dark-grey-blue"}>{name}</h3>

      {description.split("\n").map((line, index) => (
        <p className={"pt-4 text-center font-barlow leading-3 text-dark-grey-blue"} key={index}>
          {line}
        </p>
      ))}
    </div>
  );
}
