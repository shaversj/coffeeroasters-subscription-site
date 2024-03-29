import Image from "next/image";
import Product from "@/app/components/Product";
import Description from "@/app/components/Description";
import Instruction from "@/app/components/Instruction";

export default function Home() {
  // noinspection SqlDialectInspection
  return (
    <>
      <main className={"pt-[40px]"}>
        <div className={"flex h-[500px] w-[327px] flex-col items-center justify-center rounded-xl bg-hero-mobile bg-cover px-6"}>
          <h1 className={"text-center font-fraunces text-[40px] font-bold leading-[40px] text-light-cream"}>Great coffee made simple.</h1>
          <p className={"pt-6 text-center font-barlow text-[15px] font-light leading-[1.65rem] text-[#cccac6]"}>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className={"mt-[39px] rounded-lg bg-dark-cyan px-8 py-4"}>
            <span className={"font-fraunces text-xl font-semibold text-light-cream"}>Create your plan</span>
          </button>
        </div>
        <div className={"pt-[120px]"}>
          <h2 className={"text-center font-fraunces text-[40px] font-black text-grey"}>our collection</h2>
          <div>
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
          <div className={" mt-[120px] h-[902px] rounded-lg bg-dark-grey-blue px-6"}>
            <div className={"pt-[64px]"}>
              <h3 className={"text-center font-fraunces text-[28px] font-black text-light-cream"}>Why choose us?</h3>
              <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream opacity-80"}>
                A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best
                coffee growers to give you a more impactful experience on every level.
              </p>
            </div>

            <div className={"relative space-y-6 pt-[64px]"}>
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
          </div>
          <div className={"mt-[715px]"}>
            <h3 className={"text-center font-fraunces text-[24px] font-black text-grey"}>How it works</h3>
            <div className={"space-y-[56px] pt-[80px]"}>
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
          </div>
          <div className={"flex justify-center pt-[79px]"}>
            <button className={"rounded-lg bg-dark-cyan px-6 py-3"}>
              <span className={"font-fraunces text-[18px] font-bold text-light-cream"}>Create your plan</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
