export default function Order() {
  return (
    <>
      <div className={"px-6"}>
        <h1 className={"rounded-t-lg bg-very-dark-blue px-6 py-[20px] font-fraunces text-[24px] font-bold text-white"}>Order Summary</h1>
        <div className={"px-6"}>
          <p className={"pt-[40px] font-fraunces text-[24px] font-bold text-grey"}>
            "I drink coffee as <span className={"text-dark-cyan"}>Filter</span>, with a <span className={"text-dark-cyan"}>Decaf</span> type of bean.{" "}
            <span className={"text-dark-cyan"}>250g</span> ground ala <span className={"text-dark-cyan"}>Cafetiere</span>, sent to me{" "}
            <span className={"text-dark-cyan"}>Every Week</span>."
          </p>
          <p className={"font-barlow text-[15px] text-grey"}>
            Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be
            redeemed at the checkout.
          </p>
          <button className={"mt-6 w-full rounded-lg bg-dark-cyan py-3.5"}>
            <span className={"font-fraunces text-[16px] font-bold text-white"}>Checkout - $14.00 /mo</span>
          </button>
        </div>
      </div>
    </>
  );
}
