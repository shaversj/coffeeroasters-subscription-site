import Headquarters from "@/app/about/components/Headquarters";

export default function About() {
  return (
    <div>
      <section
        className={"mt-[40px] grid h-[400px] w-[327px] rounded-xl [grid-template-areas:box] md:h-[400px] md:w-[689px] lg:h-[450px] lg:w-[1280px]"}
      >
        <picture className={"[grid-area:box]"}>
          <source media="(min-width: 1440px)" srcSet={"assets/about/desktop/image-hero-whitecup.avif"} />
          <source media="(min-width: 768px)" srcSet={"/assets/about/tablet/image-hero-whitecup.avif"} />
          <img
            src={"/assets/about/mobile/image-hero-whitecup.avif"}
            className={"rounded-xl"}
            loading={"eager"}
            fetchPriority={"high"}
            alt={"Hero Image"}
          />
        </picture>
        <div className={"self-center px-6 [grid-area:box] md:w-[500px] md:pl-[58px] lg:w-[550px] lg:pl-[85px]"}>
          <h1
            className={"text-center font-fraunces text-[28px] font-bold text-light-cream [grid-area:box] md:text-left md:text-[32px] lg:text-[40px]"}
          >
            About Us
          </h1>
          <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream opacity-80 md:text-left md:leading-[24px] lg:text-[16px]"}>
            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been
            dedicated to bring the perfect cup - from bean to brew - in every shipment.
          </p>
        </div>
      </section>

      <section className={"pt-[120px] md:flex md:gap-x-[63px] lg:justify-center"}>
        <picture>
          <source media="(min-width: 1440px)" srcSet={"/assets/about/desktop/image-commitment.avif"} />
          <source media="(min-width: 768px)" srcSet={"/assets/about/tablet/image-commitment.avif"} />
          <img className={"rounded-lg md:basis-1/2"} src={"/assets/about/mobile/image-commitment.avif"} alt={"Our commitment"} />
        </picture>

        <div className={"md:basis-1/2"}>
          <h2 className={"pt-6 text-center font-fraunces text-[28px] font-black text-very-dark-blue md:text-left md:text-[32px]"}>Our commitment</h2>
          <p className={"pt-6 text-center font-barlow text-[15px] text-very-dark-blue md:pt-[30px] md:text-left"}>
            We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year
            trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower
            a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives,
            and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their
            native growing region.
          </p>
        </div>
      </section>

      <section className={"relative mt-[198px] rounded-xl bg-very-dark-blue pb-[61px] md:mt-[342px] lg:mt-[250px] lg:flex lg:pb-0"}>
        <div
          className={
            "relative bottom-[75px] rounded-xl px-6 md:bottom-[150px] md:flex md:flex-col md:items-center md:px-0 lg:bottom-[115px] lg:left-[115px] lg:order-2 lg:block"
          }
        >
          <picture>
            <source srcSet={"/assets/about/desktop/image-quality.jpg"} media={"(min-width: 1440px)"} />
            <source srcSet={"/assets/about/tablet/image-quality.jpg"} media={"(min-width: 768px)"} />
            <img className={"rounded-xl"} src={"/assets/about/desktop/image-quality.jpg"} alt={"Uncompromising quality"} />
          </picture>
        </div>
        <div className={"px-6 md:-mt-20 md:px-[74px] lg:order-1 lg:-mt-0 lg:w-[650px] lg:px-0 lg:pl-[85px] lg:pt-[88px]"}>
          <h2 className={"text-center font-fraunces text-[28px] font-black leading-8 text-light-cream md:text-[32px] lg:text-left lg:text-[40px]"}>
            Uncompromising quality
          </h2>
          <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream opacity-80 lg:text-left lg:text-[16px]"}>
            Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our
            goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
          </p>
        </div>
      </section>

      <section>
        <h2 className={"pt-[120px] text-center font-fraunces text-[24px] font-black text-grey md:text-left"}>Our headquarters</h2>
        <div className={"md:flex md:gap-x-8 md:pt-[72px] lg:justify-center lg:gap-x-[95px]"}>
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
      </section>
    </div>
  );
}
