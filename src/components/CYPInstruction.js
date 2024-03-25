export default function CYPInstruction({ step, title, description }) {
  return (
    <>
      <div>
        <h1 className={"text-center font-fraunces text-[72px] font-black text-pale-orange"}>{step}</h1>
        <div>
          <h2 className={"text-center font-fraunces text-[28px] font-black text-light-cream"}>{title}</h2>
          <p className={"pt-6 text-center text-[15px] text-light-cream opacity-80"}>{description}</p>
        </div>
      </div>
    </>
  );
}
