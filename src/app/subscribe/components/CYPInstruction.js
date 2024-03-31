export default function CYPInstruction({ step, title, description }) {
  return (
    <>
      <div className={"md:w-[223px] lg:w-[285px]"}>
        <h1 className={"text-center font-fraunces text-[72px] font-black text-pale-orange md:text-left"}>{step}</h1>
        <div>
          <h2 className={"text-center font-fraunces text-[28px] font-black text-light-cream md:text-left lg:w-[255px] lg:text-[32px] lg:leading-10"}>
            {title}
          </h2>
          <p className={"pt-6 text-center text-[15px] text-light-cream opacity-80 md:text-left lg:text-[16px] lg:leading-[26px]"}>{description}</p>
        </div>
      </div>
    </>
  );
}
