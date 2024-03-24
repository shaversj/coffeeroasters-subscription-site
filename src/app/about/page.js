import Image from "next/image";
import Product from "@/components/Product";
import Headquarters from "@/components/Headquarters";

export default function About() {
  return (
    <div>
      <div className={"bg-about-hero-mobile mt-[40px] rounded-xl bg-cover bg-no-repeat px-6 pb-[87px]"}>
        <h1 className={"pt-[111px] text-center font-fraunces text-[28px] font-black text-light-cream"}>About Us</h1>
        <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream"}>
          Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been
          dedicated to bring the perfect cup - from bean to brew - in every shipment.
        </p>
      </div>
      <div className={"pt-[120px]"}>
        <Image className={"rounded-xl"} src={"/assets/about/mobile/image-commitment.jpg"} alt={"Our commitment"} width={327} height={400} />
        <h2 className={"pt-6 text-center font-fraunces text-[28px] font-black text-very-dark-blue"}>Our commitment</h2>
        <p className={"pt-6 text-center font-barlow text-[15px] text-very-dark-blue"}>
          We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and
          invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native
          growing region.
        </p>
      </div>
      <div className={"relative mt-[198px] rounded-xl bg-very-dark-blue pb-[61px]"}>
        <div className={"relative bottom-[75px] rounded-xl px-6"}>
          <Image className={"rounded-xl"} src={"/assets/about/mobile/image-quality.jpg"} alt={"Uncompromising quality"} width={327} height={400} />
        </div>
        <div className={"px-6"}>
          <h2 className={"text-center font-fraunces text-[28px] font-black leading-8 text-light-cream"}>Uncompromising quality</h2>
          <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream opacity-80"}>
            Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our
            goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
          </p>
        </div>
      </div>
      <div>
        <h2 className={"pt-[120px] text-center font-fraunces text-[24px] font-black text-grey"}>Our headquarters</h2>
        <div>
          <Headquarters
            name={"United Kingdom"}
            description={"68 Asfordby Rd\n Alcaston\n SY6 1YA\n +44 1241 918425"}
            imageSrc={"/assets/about/desktop/illustration-uk.svg"}
            width={40.84}
            height={49.07}
          />

          <Headquarters
            name={"Canada"}
            description={"Canada 1528 Eglinton Avenue\n Toronto\n Ontario M4P 1A6\n +1 416 485 2997"}
            imageSrc={"/assets/about/desktop/illustration-canada.svg"}
            width={51.56}
            height={49.96}
          />
          <Headquarters
            name={"Australia"}
            description={"Australia 36 Swanston Street\n Kewell\n Victoria\n +61 4 9928 3629"}
            imageSrc={"/assets/about/desktop/illustration-australia.svg"}
            width={48.87}
            height={43.94}
          />
        </div>
      </div>
    </div>
  );
}
