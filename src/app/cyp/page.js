"use client";

import Instruction from "@/components/Instruction";
import CYPInstruction from "@/components/CYPInstruction";
import { useSearchParams } from "next/navigation";
import DetailsList from "@/components/DetalisList";

export default function CYPPage() {
  const searchParams = useSearchParams();
  // const [drinkType, setDrinkType] = useState("");
  // const [coffeeType, setCoffeeType] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [grindOption, setGrindOption] = useState("");
  // const [deliveryFrequency, setDeliveryFrequency] = useState("");

  const drinkType = searchParams.get("drinkType");
  const coffeeType = searchParams.get("coffeeType");
  const quantity = searchParams.get("quantity");
  const grindOption = searchParams.get("grindOption");
  const deliveryFrequency = searchParams.get("deliveryFrequency");

  return (
    <>
      <div>
        <div className={"mt-[40px] rounded-xl bg-plan-hero-mobile bg-cover bg-no-repeat px-6 pb-[136px] pt-[101px]"}>
          <h1 className={"text-center font-fraunces text-[28px] font-black text-light-cream"}>Create a plan</h1>
          <p className={"pt-6 text-center font-barlow text-[15px] text-light-cream opacity-80"}>
            Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered
            fresh to your door.
          </p>
        </div>
        <div className={"-mx-6 mt-[120px] space-y-[56px] rounded-xl bg-very-dark-blue px-6 pb-[79px] pt-[80px]"}>
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

        <DetailsList />

        <div className={"container mt-[120px] rounded-xl bg-very-dark-blue pl-6 pr-[25px]"}>
          <div className={"py-[32px]"}>
            <h3 className={"text-[14px] uppercase text-grey"}>Order Summary</h3>
            <p className={"pt-[8px] font-fraunces text-[24px] font-bold text-white"}>
              "I drink coffee as <span className={"text-dark-cyan"}>{drinkType}</span>, with a <span className={"text-dark-cyan"}>{coffeeType}</span>{" "}
              type of bean. <span className={"text-dark-cyan"}>{quantity}</span> ground ala <span className={"text-dark-cyan"}>{grindOption}</span>,
              sent to me <span className={"text-dark-cyan"}>{deliveryFrequency}</span>."
            </p>
          </div>
        </div>

        <div>
          <div className={"flex justify-center"}>
            <button
              className={
                "hover:bg-very-dark-cyan rounded-xl bg-dark-cyan px-[25px] py-6 font-fraunces text-[24px] font-bold text-white first:mt-[32px]"
              }
            >
              Create my plan!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
