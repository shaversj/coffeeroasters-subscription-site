import Instruction from "@/components/Instruction";
import CYPInstruction from "@/components/CYPInstruction";
import Button from "@/components/Button";

export default function CYPPage() {
  return (
    <>
      <div>
        <div className={"bg-plan-hero-mobile mt-[40px] rounded-xl bg-cover bg-no-repeat px-6 pb-[136px] pt-[101px]"}>
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

        <div>
          <details className={"group"}>
            <summary className={"flex list-none items-center font-fraunces text-[24px] font-black leading-7 text-grey"}>
              How do you drink your coffee?
              <span>
                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.3629 11.9238L18.1913 9.0954L9.09566 -0.000263214L0 9.0954L2.82843 11.9238L9.09521 5.65661L15.3629 11.9238Z"
                    fill="#0E8784"
                  />
                </svg>
              </span>
            </summary>
            <div className={"space-y-4"}>
              <Button title={"Capsule"} description={"Compatible with Nespresso systems and similar brewers"} />
              <Button title={"Filter"} description={"For pour over or drip methods like Aeropress, Chemex, and V60"} />
              <Button title={"Espresso"} description={"Dense and finely ground beans for an intense, flavorful experience"} />
            </div>
          </details>
        </div>

        <details className="group open:ring">
          <summary className="list-none text-blue-500 group-open:text-green-500">
            <span className="mr-4 group-open:hidden">Show Closed</span>
            <span className="mr-4 hidden group-open:inline">Show Open</span>
            How do you drink your coffee?
          </summary>
          <p>Whatever else</p>
        </details>
      </div>
    </>
  );
}
