import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function DetailsList() {
  const searchParams = useSearchParams();
  // const drinkType = searchParams?.drinkType;
  // const coffeeType = searchParams?.coffeeType;
  // const quantity = searchParams?.quantity;
  // const grindOption = searchParams?.grindOption;
  // const deliveryFrequency = searchParams?.deliveryFrequency;

  const drinkType = searchParams.get("drinkType");
  const coffeeType = searchParams.get("coffeeType");
  const quantity = searchParams.get("quantity");
  const grindOption = searchParams.get("grindOption");
  const deliveryFrequency = searchParams.get("deliveryFrequency");

  const PLAN_TYPE_DATA = {
    drinkType: {
      title: "How do you drink your coffee?",
      options: [
        { title: "Capsule", description: "Compatible with Nespresso systems and similar brewers" },
        { title: "Filter", description: "For pour over or drip methods like Aeropress, Chemex, and V60" },
        { title: "Espresso", description: "Dense and finely ground beans for an intense, flavorful experience" },
      ],
    },
    coffeeType: {
      title: "What type of coffee?",
      options: [
        { title: "Decaf", description: "Just like regular coffee, except the caffeine has been removed" },
        { title: "Caffeinated", description: "Regular coffee with the full caffeine content" },
      ],
    },
    quantity: {
      title: "How much would you like?",
      options: [
        { title: "250g", description: "Perfect for the solo drinker. Yields about 12 delicious cups." },
        { title: "500g", description: "Perfect option for a couple. Yields about 40 delectable cups." },
        { title: "1000g", description: "Perfect for offices and events. Yields about 90 delightful cups." },
      ],
    },
    grindOption: {
      title: "Want us to grind them?",
      options: [
        { title: "Wholebean", description: "Best choice if you cherish the full sensory experience" },
        { title: "Filter", description: "For drip or pour-over coffee methods such as V60 or Aeropress" },
        { title: "Cafetiere", description: "Course ground beans specially suited for french press coffee" },
      ],
    },
    deliverFrequency: {
      title: "How often should we deliver?",
      options: [
        { title: "Every Week", description: "$14.00 per shipment. Includes free first-class shipping." },
        { title: "Every 2 Weeks", description: "$17.25 per shipment. Includes free priority shipping." },
        { title: "Every Month", description: "$22.50 per shipment. Includes free priority shipping." },
      ],
    },
  };

  const listOfPlanTypes = Object.keys(PLAN_TYPE_DATA);

  function generateUrlParams(planTypes, planTypeIndex, option) {
    return planTypes
      .reduce((acc, planType) => {
        const value = planTypeIndex === planTypes.indexOf(planType) ? option.title : searchParams.get(planType);
        if (value) {
          acc += `${planType}=${value}&`;
        }
        return acc;
      }, "")
      .slice(0, -1); // remove the last '&'
  }

  return (
    <>
      {listOfPlanTypes.map((planType, planTypeIndex) => (
        <details className={"group"} key={planTypeIndex}>
          <summary className={"flex list-none items-center font-fraunces text-[20px] font-black leading-7 text-grey"}>
            {PLAN_TYPE_DATA[planType].title}
            <span className={"ml-auto"}>
              <svg
                className={"rotate-180 group-open:rotate-0"}
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3629 11.9238L18.1913 9.0954L9.09566 -0.000263214L0 9.0954L2.82843 11.9238L9.09521 5.65661L15.3629 11.9238Z"
                  fill="#0E8784"
                />
              </svg>
            </span>
          </summary>
          <div className={"space-y-4"}>
            {PLAN_TYPE_DATA[planType].options.map((option, optionIdx) => (
              <Link key={optionIdx} scroll={false} href={`?${generateUrlParams(listOfPlanTypes, planTypeIndex, option)}`}>
                <button className={"group/button w-full rounded-xl bg-button-brown px-[25px] py-6 text-left first:mt-[32px] hover:bg-dark-cyan"}>
                  <span className={"font-fraunces text-[24px] font-bold group-hover/button:text-white"}>{option.title}</span>
                  <p className={"font-barlow text-[16px] text-dark-grey-blue group-hover/button:text-white"}>{option.description}</p>
                </button>
              </Link>
            ))}
          </div>
        </details>
      ))}
    </>
  );
}
