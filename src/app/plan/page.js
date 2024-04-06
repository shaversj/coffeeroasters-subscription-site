import CYPInstruction from "@/app/plan/components/CYPInstruction";
import DetailsList from "@/app/plan/components/DetalisList";
import Link from "next/link";
import Modal from "@/app/plan/components/Modal";
import SubMenu from "@/app/plan/components/SubMenu";

export default function Plan({ searchParams }) {
  const showModal = searchParams?.showModal;

  return (
    <>
      <div>
        <div
          className={
            "mt-[40px] rounded-xl bg-plan-hero-mobile bg-cover bg-no-repeat px-6 pb-[136px] pt-[101px] md:bg-plan-hero-tablet md:pl-[58px] lg:bg-plan-hero-desktop lg:pl-[85px] lg:pt-[134px]"
          }
        >
          <div className={"md:w-[398px] lg:w-[486px]"}>
            <h1
              className={
                "text-center font-fraunces text-[28px] font-black text-light-cream md:text-left md:text-[48px] lg:text-[72px] lg:leading-none"
              }
            >
              Create a plan
            </h1>
            <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream opacity-80 md:text-left lg:pt-[32px] lg:text-[16px]"}>
              Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered
              fresh to your door.
            </p>
          </div>
        </div>
        <div className={"-mx-6 mt-[120px] space-y-[56px] rounded-xl bg-very-dark-blue px-6 pb-[79px] pt-[80px] lg:mx-0 lg:pl-[85px]"}>
          <svg className={"hidden md:block lg:hidden"} width="497" height="31" viewBox="0 0 497 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 16H481" stroke="#FDD6BA" strokeWidth="2" />
            <circle cx="15.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
            <circle cx="248.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
            <circle cx="481.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
          </svg>

          <svg className={"hidden lg:block"} width="791" height="31" viewBox="0 0 791 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 15.5H775.5" stroke="#FDD6BA" strokeWidth="2" />
            <circle cx="15.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
            <circle cx="395.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
            <circle cx="775.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
          </svg>

          <div className={"md:flex md:gap-x-[10px] lg:gap-x-[95px]"}>
            <CYPInstruction
              step={"01"}
              title={"Pick your coffee"}
              description={
                "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
              }
            />

            <CYPInstruction
              step={"02"}
              title={"Choose the frequency"}
              description={
                "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
              }
            />

            <CYPInstruction
              step={"03"}
              title={"Receive and enjoy!"}
              description={
                "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
              }
            />
          </div>
        </div>

        <div className={"lg:flex lg:gap-x-[125px] lg:px-[85px]"}>
          <SubMenu searchParams={searchParams} />
          <div>
            <DetailsList searchParams={searchParams} />
          </div>
        </div>

        <div className={"container mt-[120px] rounded-xl bg-very-dark-blue pl-6 pr-[25px]"}>
          <div className={"py-[32px]"}>
            <h3 className={"text-[14px] uppercase text-grey"}>Order Summary</h3>
            <p className={"pt-[8px] font-fraunces text-[24px] font-bold text-white"}>
              &quot;I drink coffee as <span className={"text-dark-cyan"}>{searchParams?.drinkType}</span>, with a{" "}
              <span className={"text-dark-cyan"}>{searchParams?.coffeeType}</span> type of bean.{" "}
              <span className={"text-dark-cyan"}>{searchParams?.quantity}</span>
              {searchParams?.drinkType !== "Capsule" && (
                <>
                  {" "}
                  ground ala <span className={"text-dark-cyan"}>{searchParams?.grindOption}</span>,
                </>
              )}
              <span> sent to me</span> <span className={"text-dark-cyan"}>{searchParams?.deliveryFrequency}</span>.&quot;
            </p>
          </div>
        </div>

        <div>
          <div className={"flex justify-center"}>
            <Link scroll={false} href={`/subscribe?showModal=true&${new URLSearchParams(searchParams).toString()}`}>
              <button
                className={
                  "hover:bg-very-dark-cyan rounded-xl bg-dark-cyan px-[25px] py-6 font-fraunces text-[24px] font-bold text-white first:mt-[32px]"
                }
              >
                Create my plan!
              </button>
            </Link>
            {showModal && <Modal searchParams={searchParams} />}
          </div>
        </div>
      </div>
    </>
  );
}
