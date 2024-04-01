import Link from "next/link";
import { PLAN_TYPE_DATA } from "@/app/constants/constants";
import { cn } from "@/app/utils/utils";

export default function DetailsList({ searchParams }) {
  const listOfPlanTypes = Object.keys(PLAN_TYPE_DATA);
  const urlParams = new URLSearchParams(searchParams);

  function generateUrlParams(planTypes, planTypeIndex, option, searchParams) {
    const params = new URLSearchParams(searchParams);

    planTypes.forEach((planType, index) => {
      const value = index === planTypeIndex ? option.title : params.get(planType);
      if (value) {
        params.set(planType, value);
      }
    });

    return params.toString();
  }

  let v =
    "group/button w-full rounded-xl bg-button-brown px-[25px] py-6 text-left first:mt-[32px] hover:bg-dark-cyan md:h-[250px] md:w-[223px] md:py-0 md:first:mt-0";

  return (
    <>
      {listOfPlanTypes.map((planType, planTypeIndex) => (
        <details open={true} id={planType} className={"group pt-[100px] first:md:pt-[144px] first:lg:pt-[168px]"} key={planTypeIndex}>
          <summary className={"flex list-none items-center font-fraunces text-[20px] font-bold leading-7 text-grey md:text-[32px]"}>
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
          <div className={"space-y-4 md:flex md:gap-x-[10px] md:space-y-0"}>
            {PLAN_TYPE_DATA[planType].options.map((option, optionIdx) => (
              <div className={"md:pt-[40px]"}>
                <Link key={optionIdx} scroll={false} href={`?${generateUrlParams(listOfPlanTypes, planTypeIndex, option, searchParams)}`}>
                  <button
                    className={cn(
                      "group/button w-full rounded-xl bg-button-brown px-[25px] hover:bg-dark-cyan md:flex md:h-[250px] md:w-[233px] md:items-start md:justify-start",
                      { "bg-dark-cyan text-white": urlParams.get(planType) === option.title },
                      { "hover:bg-pale-orange hover:text-red-500": urlParams.get(planType) !== null && urlParams.get(planType) !== option.title },
                    )}
                  >
                    <div>
                      <span
                        className={cn(
                          "block font-fraunces text-[24px] font-bold text-dark-grey-blue group-hover/button:text-white md:pt-[32px] md:text-left",
                          { "text-white": urlParams.get(planType) === option.title },
                          { "group-hover/button:text-dark-grey-blue": urlParams.get(planType) !== null && urlParams.get(planType) !== option.title },
                        )}
                      >
                        {option.title}
                      </span>
                      <p
                        className={cn(
                          "block font-barlow text-[16px] text-dark-grey-blue group-hover/button:text-white md:pt-6 md:text-left",
                          { "text-white": urlParams.get(planType) === option.title },
                          { "group-hover/button:text-dark-grey-blue": urlParams.get(planType) !== null && urlParams.get(planType) !== option.title },
                        )}
                      >
                        {option.description}
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </details>
      ))}
    </>
  );
}
