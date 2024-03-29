import Image from "next/image";

export default function Description({ name, description, imageSrc, alt }) {
  return (
    <>
      <div className={"flex flex-col items-center justify-center rounded-lg bg-dark-cyan"}>
        <div className={alt.includes("truck") ? "relative mt-[72px] h-[50px] w-[72px]" : "relative mt-[72px] h-[72px] w-[72px]"}>
          <Image fill={true} src={imageSrc} alt={alt} />
        </div>
        <div className={"px-8 pb-[51px] pt-[56px]"}>
          <h4 className={"text-center font-fraunces text-[24px] font-black text-light-cream"}>{name}</h4>
          <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream"}>{description}</p>
        </div>
      </div>
    </>
  );
}
