import Product from "@/app/components/Product";
import Description from "@/app/components/Description";
import Instruction from "@/app/components/Instruction";
import Link from "next/link";

export default function Home() {
  // noinspection SqlDialectInspection
  return (
    <>
      <main className={"pt-[40px]"}>
        <section
          className={"grid h-[500px] items-center justify-center rounded-md [grid-template-areas:hero] md:justify-start  lg:h-[600px] lg:w-[1280px] "}
        >
          <picture className={"[grid-area:hero]"}>
            <source media="(min-width: 1440px)" srcSet={"/assets/home/desktop/image-hero-coffeepress.avif"} />
            <source media="(min-width: 768px)" srcSet={"/assets/home/tablet/image-hero-coffeepress.avif"} />
            <img
              src={"/assets/home/mobile/image-hero-coffeepress.avif"}
              className={"rounded-xl"}
              loading={"eager"}
              fetchPriority={"high"}
              alt={"Hero Image"}
            />
          </picture>
          <div className={"flex flex-col px-6 [grid-area:hero] md:block md:w-[425px] md:pl-[58px] lg:w-[600px] lg:pl-[85px]"}>
            <h1
              className={
                "text-center font-fraunces text-[40px] font-bold leading-[40px] text-light-cream md:text-left md:text-[48px] lg:text-[72px] lg:leading-[72px]"
              }
            >
              Great coffee made simple.
            </h1>
            <p
              className={
                "pt-6 text-center font-barlow text-[15px] font-light leading-[1.65rem] text-[#cccac6] md:text-left lg:w-[440px] lg:text-[16px]"
              }
            >
              Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to
              your door, at your schedule.
            </p>

            <Link href={"/plan"} className={"mx-auto mt-[39px] grid h-[56px] w-[217px] place-items-center rounded-lg bg-dark-cyan md:mx-0"}>
              <span className={"font-fraunces text-[18px] font-semibold text-light-cream"}>Create your plan</span>
            </Link>
          </div>
        </section>

        <div className={"pt-[180px] md:pt-[110px]"}>
          <section>
            <div className={""}></div>
            <h2
              className={
                "bg-hero-gradient-180 bg-clip-text text-center font-fraunces text-[40px] font-black text-transparent md:text-[96px] lg:text-[150px]"
              }
            >
              our collection
            </h2>
            <div className={"md:-mt-[90px] lg:flex lg:justify-center lg:gap-x-[30px]"}>
              <Product
                name={"Gran Espresso"}
                description={"Light and flavorful blend with cocoa and black pepper for an intense experience"}
                imageSrc={"/assets/home/desktop/image-gran-espresso.png"}
              />

              <Product
                name={"Planalto"}
                description={"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"}
                imageSrc={"/assets/home/desktop/image-planalto.png"}
              />
              <Product
                name={"Piccollo"}
                description={"Mild and smooth blend featuring notes of toasted almond and dried cherry"}
                imageSrc={"/assets/home/desktop/image-piccollo.png"}
              />
              <Product
                name={"Danche"}
                description={"Ethiopian hand-harvested blend densely packed with vibrant fruit notes"}
                imageSrc={"/assets/home/desktop/image-danche.png"}
              />
            </div>
          </section>

          <section className={"mt-[120px] h-[902px] rounded-lg bg-dark-grey-blue px-6 md:h-[573px] md:px-0 lg:mt-[200px]"}>
            <div className={"pt-[64px] md:px-[115px] lg:px-[370px] lg:pt-[100px]"}>
              <h3 className={"text-center font-fraunces text-[28px] font-black text-light-cream md:text-[32px] lg:text-[40px]"}>Why choose us?</h3>
              <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream opacity-80 lg:text-[16px]"}>
                A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best
                coffee growers to give you a more impactful experience on every level.
              </p>
            </div>

            <div className={"relative space-y-6 pt-[64px] md:px-[57px] lg:flex lg:gap-x-[30px] lg:space-y-0 lg:px-[85px] lg:pt-[86px]"}>
              <Description
                name={"Best quality"}
                description={"Discover an endless variety of the world’s best artisan coffee from each of our roasters."}
                imageSrc={"/assets/home/desktop/icon-coffee-bean.svg"}
                alt={"coffee bean icon"}
              />

              <Description
                name={"Exclusive benefits"}
                description={"Special offers and swag when you subscribe, including 30% off your first shipment."}
                imageSrc={"/assets/home/desktop/icon-gift.svg"}
                alt={"gift icon"}
              />

              <Description
                name={"Free shipping"}
                description={"We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."}
                imageSrc={"/assets/home/desktop/icon-truck.svg"}
                alt={"truck icon"}
              />
            </div>
          </section>
          <section className={"mt-[715px] md:mt-[444px] lg:mt-[250px] lg:pl-[85px]"}>
            <h3 className={"text-center font-fraunces text-[24px] font-bold text-grey md:text-left"}>How it works</h3>

            <picture>
              <source media="(min-width: 1440px)" srcSet={"/assets/home/desktop/desktop-rings.svg"} />
              <img className={"hidden md:mt-[40px] md:block lg:mt-[80px]"} src={"/assets/home/tablet/tablet-rings.svg"} alt={"rings"} />
            </picture>

            <div className={"space-y-[56px] pt-[80px] md:flex md:space-x-[20px] md:space-y-0 md:pt-[48px] lg:space-x-[170px]"}>
              <Instruction
                step={"01"}
                title={"Pick your coffee"}
                description={
                  "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
                }
              />

              <Instruction
                step={"02"}
                title={"Choose the frequency"}
                description={
                  "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
                }
              />

              <Instruction
                step={"03"}
                title={"Receive and enjoy!"}
                description={
                  "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
                }
              />
            </div>
            <div className={"flex justify-center pt-[79px] md:justify-start"}>
              <Link href={"/plan"} className={"rounded-lg bg-dark-cyan px-6 py-3"}>
                <span className={"font-fraunces text-[18px] font-bold text-light-cream"}>Create your plan</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
