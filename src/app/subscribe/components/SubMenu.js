export default function SubMenu() {
  const MENU = {
    "01": "Preferences",
    "02": "Bean Type",
    "03": "Quantity",
    "04": "Grind Option",
    "05": "Deliveries",
  };
  return (
    <>
      <div className={"hidden lg:block lg:w-[255px] lg:divide-y-2 lg:pt-[138px]"}>
        {Object.keys(MENU).map((key) => (
          <div key={key} className={"space-x-[22.5px] py-6 font-fraunces text-[24px] font-bold text-grey hover:text-dark-cyan"}>
            <span>{key}</span>
            <span>{MENU[key]}</span>
          </div>
        ))}
      </div>
    </>
  );
}
