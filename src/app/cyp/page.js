"use client";

import Instruction from "@/components/Instruction";
import CYPInstruction from "@/components/CYPInstruction";
import Button from "@/components/Button";
import { useState } from "react";

export default function CYPPage() {
  const [drinkType, setDrinkType] = useState("");
  const [coffeeType, setCoffeeType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [grindOption, setGrindOption] = useState("");
  const [deliveryFrequency, setDeliveryFrequency] = useState("");

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

        <div className={"pt-[120px]"}>
          <div>
            <details className={"group"}>
              <summary className={"flex list-none items-center font-fraunces text-[20px] font-black leading-7 text-grey"}>
                How do you drink your coffee?
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
                <Button title={"Capsule"} description={"Compatible with Nespresso systems and similar brewers"} onClickHandler={setDrinkType} />
                <Button
                  title={"Filter"}
                  description={"For pour over or drip methods like Aeropress, Chemex, and V60"}
                  onClickHandler={setDrinkType}
                />
                <Button
                  title={"Espresso"}
                  description={"Dense and finely ground beans for an intense, flavorful experience"}
                  onClickHandler={setDrinkType}
                />
              </div>
            </details>
          </div>
          <div>
            <details className={"group"}>
              <summary className={"flex list-none items-center font-fraunces text-[20px] font-black leading-7 text-grey"}>
                What type of coffee?
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
                <Button
                  title={"Single Origin"}
                  description={"Distinct, high quality coffee from a specific family-owned farm"}
                  onClickHandler={setCoffeeType}
                />
                <Button
                  title={"Decaf"}
                  description={"Just like regular coffee, except the caffeine has been removed"}
                  onClickHandler={setCoffeeType}
                />
                <Button
                  title={"Blended"}
                  description={"Combination of two or three dark roasted beans of organic coffees"}
                  onClickHandler={setCoffeeType}
                />
              </div>
            </details>
          </div>
          <div>
            <details className={"group"}>
              <summary className={"flex list-none items-center font-fraunces text-[20px] font-black leading-7 text-grey"}>
                How much would you like?
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
                <Button title={"250g"} description={"Perfect for the solo drinker. Yields about 12 delicious cups."} onClickHandler={setQuantity} />
                <Button title={"500g"} description={"Perfect option for a couple. Yields about 40 delectable cups."} onClickHandler={setQuantity} />
                <Button
                  title={"1000g"}
                  description={"Perfect for offices and events. Yields about 90 delightful cups."}
                  onClickHandler={setQuantity}
                />
              </div>
            </details>
          </div>
          <div>
            <details className={"group"}>
              <summary className={"flex list-none items-center font-fraunces text-[20px] font-black leading-7 text-grey"}>
                Want us to grind them?
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
                <Button title={"Wholebean"} description={"Best choice if you cherish the full sensory experience"} onClickHandler={setGrindOption} />
                <Button
                  title={"Filter"}
                  description={"For drip or pour-over coffee methods such as V60 or Aeropress"}
                  onClickHandler={setGrindOption}
                />
                <Button
                  title={"Cafetiére"}
                  description={"Course ground beans specially suited for french press coffee"}
                  onClickHandler={setGrindOption}
                />
              </div>
            </details>
          </div>
          <div>
            <details className={"group"}>
              <summary className={"flex list-none items-center font-fraunces text-[20px] font-black leading-7 text-grey"}>
                How often should we deliver?
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
                <Button
                  title={"Every week"}
                  description={"$14.00 per shipment. Includes free first-class shipping."}
                  onClickHandler={setDeliveryFrequency}
                />
                <Button
                  title={"Every 2 weeks"}
                  description={"$17.25 per shipment. Includes free priority shipping."}
                  onClickHandler={setDeliveryFrequency}
                />
                <Button
                  title={"Every month"}
                  description={"$22.50 per shipment. Includes free priority shipping."}
                  onClickHandler={setDeliveryFrequency}
                />
              </div>
            </details>
          </div>
        </div>

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
