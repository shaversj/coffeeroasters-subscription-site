export default function Instruction({ step, title, description }) {
  return (
    <>
      <div className={"md:max-w-[212px] lg:h-[355px]"}>
        <div>
          <h1 className={"text-center font-fraunces text-[72px] font-black text-pale-orange md:text-left"}>{step}</h1>
        </div>
        <div>
          <h2 className={"text-center font-fraunces text-[28px] font-black md:text-left md:font-bold lg:text-[32px] lg:leading-[32px]"}>{title}</h2>
          <p className={"pt-6 text-center font-barlow text-[15px] text-grey md:text-left lg:pt-[42px]"}>{description}</p>
        </div>
      </div>
    </>
  );
}
