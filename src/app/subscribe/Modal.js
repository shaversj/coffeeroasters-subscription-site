import Link from "next/link";
import { PER_SHIPMENT_MULTIPLE, PER_SHIPMENT_PRICE } from "@/app/constants/constants";

export default function Modal({ searchParams }) {
  function calculatePrice() {
    const pricePerShipment = PER_SHIPMENT_PRICE[searchParams?.quantity][searchParams?.deliveryFrequency];
    const total = pricePerShipment * PER_SHIPMENT_MULTIPLE[searchParams?.deliveryFrequency];
    return total.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  return (
    <>
      <div className={"fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50"}>
        <div className={"px-6"}>
          <h1 className={"rounded-t-lg bg-very-dark-blue px-6 py-[20px] font-fraunces text-[24px] font-bold text-white"}>Order Summary</h1>
          <div className={"rounded-b-lg bg-light-cream px-6 pb-6"}>
            <p className={"pt-[40px] font-fraunces text-[24px] font-bold text-grey"}>
              "I drink coffee as <span className={"text-dark-cyan"}>{searchParams?.drinkType}</span>, with a{" "}
              <span className={"text-dark-cyan"}>{searchParams?.coffeeType}</span> type of bean.{" "}
              <span className={"text-dark-cyan"}>{searchParams?.quantity}</span>
              {searchParams?.drinkType !== "Capsule" && (
                <>
                  {" "}
                  ground ala <span className={"text-dark-cyan"}>{searchParams?.grindOption}</span>,
                </>
              )}
              <span> sent to me</span> <span className={"text-dark-cyan"}>{searchParams?.deliveryFrequency}</span>."
            </p>
            <p className={"font-barlow text-[15px] text-grey"}>
              Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be
              redeemed at the checkout.
            </p>
            <Link href="/">
              <button className={"mt-6 w-full rounded-lg bg-dark-cyan py-3.5"}>
                <span className={"font-fraunces text-[16px] font-bold text-white"}>Checkout - {calculatePrice()} /mo</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
