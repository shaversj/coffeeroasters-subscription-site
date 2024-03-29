import Link from "next/link";
import { PLAN_TYPE_DATA } from "@/app/constants/constants";

export default function DetailsList({ searchParams }) {
  const listOfPlanTypes = Object.keys(PLAN_TYPE_DATA);

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
              <Link key={optionIdx} scroll={false} href={`?${generateUrlParams(listOfPlanTypes, planTypeIndex, option, searchParams)}`}>
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
