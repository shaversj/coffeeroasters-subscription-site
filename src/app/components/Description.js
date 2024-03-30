import Image from "next/image";

export default function Description({ name, description, imageSrc, alt }) {
  return (
    <>
      <div
        className={
          "flex flex-col items-center justify-center rounded-lg bg-dark-cyan md:flex-row md:py-[41px] lg:h-[382px] lg:w-[350px] lg:flex-col lg:px-12"
        }
      >
        <div
          className={
            "flex flex-col items-center md:h-[98px] md:w-[455px] md:flex-row lg:h-[382px] lg:w-[350px] lg:flex-col lg:justify-center lg:px-12"
          }
        >
          <div
            className={
              alt.includes("truck")
                ? "relative mt-[72px] h-[72px] w-[72px] md:mt-0 md:h-[39px] md:w-[55px] md:shrink-0 lg:pt-3"
                : "relative mt-[72px] h-[72px] w-[72px] md:mt-0 md:h-[56px] md:w-[56px] md:shrink-0 lg:mt-0"
            }
          >
            <Image src={imageSrc} alt={alt} width={72} height={alt.includes("truck") ? 50 : 72} sizes={""} />
          </div>
          <div className={"px-8 pb-[51px] pt-[56px] md:pb-0 md:pt-0 lg:px-0 lg:pt-[45px]"}>
            <h4 className={"text-center font-fraunces text-[24px] font-black text-light-cream md:text-left lg:text-center"}>{name}</h4>
            <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream md:pt-4 md:text-left lg:text-center"}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
