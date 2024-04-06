import Link from "next/link";

export default function SubMenu({ searchParams }) {
  const urlParams = new URLSearchParams(searchParams);
  const MENU = {
    "01": ["Preferences", "drinkType"],
    "02": ["Bean Type", "coffeeType"],
    "03": ["Quantity", "quantity"],
    "04": ["Grind Option", "grindOption"],
    "05": ["Deliveries", "deliveryFrequency"],
  };

  return (
    <>
      <div className={"hidden lg:block lg:w-[255px] lg:divide-y-2 lg:pt-[138px]"}>
        {Object.keys(MENU).map((key, idx) => (
          <a key={idx} href={"#" + MENU[key][1]}>
            <div key={key} className={"space-x-[22.5px] py-6 font-fraunces text-[24px] font-bold text-grey opacity-70 hover:text-dark-grey-blue"}>
              <span className={`${urlParams.get(MENU[key][1]) !== null ? "text-dark-cyan opacity-50" : ""}`}>{key}</span>
              <span>{MENU[key][0]}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
