import Image from "next/image";
import Product from "@/components/Product";

export default function Home() {
  return (
    <>
      <div className={"container px-6"}>
        <header className={"flex items-center gap-x-[5.53px] pt-8"}>
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.93826 2.07878C7.51092 -0.352297 3.91292 -0.702264 1.91759 1.29992C-0.078766 3.30107 0.270364 6.9077 2.69355 9.33981C3.34001 9.98782 4.08489 10.4832 4.87121 10.8383C5.12917 9.33566 5.86887 7.89114 6.99189 6.70519C6.61997 6.57227 6.23872 6.46011 5.8409 6.35107C3.48505 5.70306 2.31438 3.73307 2.04088 1.4235C2.26709 1.69617 2.47304 1.98217 2.6784 2.26733C3.07682 2.8206 3.47296 3.3707 4.0103 3.81407C4.84619 4.50399 5.76371 4.77031 6.7675 5.06167C6.80625 5.07292 6.84513 5.08421 6.88415 5.09556C7.35967 5.23367 7.77303 5.43825 8.1522 5.6771C9.14883 4.94705 10.2729 4.46105 11.4332 4.26062C11.0799 3.47241 10.5847 2.72679 9.93826 2.07878ZM5.83365 11.4157C5.98801 9.91097 6.71528 8.43945 7.88077 7.27117C10.3081 4.84009 13.9061 4.48908 15.9014 6.49231C17.8978 8.49345 17.5497 12.1001 15.1234 14.5322C13.9579 15.7005 12.4899 16.4295 10.9888 16.5853C10.7888 16.605 10.5909 16.6154 10.3972 16.6154C9.10635 16.6154 7.95329 16.1616 7.10378 15.31C6.1258 14.3307 5.67411 12.9475 5.83365 11.4157ZM9.384 12.6505C10.1796 12.0419 11.0406 11.801 11.9771 11.5445C14.3329 10.8965 15.5026 8.9265 15.7771 6.61692C15.5528 6.88806 15.3484 7.17211 15.1445 7.45531L15.1445 7.45535C14.7449 8.01059 14.3476 8.56256 13.8077 9.0075C12.9692 9.69853 12.0496 9.9653 11.0413 10.2578L10.9338 10.289C8.62876 10.9598 7.48917 12.9132 7.22602 15.1864C7.4531 14.913 7.66111 14.6291 7.86803 14.3467L7.86804 14.3466C8.31722 13.7336 8.76127 13.1275 9.384 12.6505Z"
              fill="#0E8784"
            />
          </svg>

          <span className={"font-fraunces text-2xl font-bold text-dark-grey-blue"}>coffeeroasters</span>
          <svg className={"ml-auto"} width="16" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z"
              fill="#333D4B"
              fillRule="evenodd"
            />
          </svg>
          <nav></nav>
        </header>
        <main className={"pt-[40px]"}>
          <div className={"bg-hero-mobile flex h-[500px] w-[327px] flex-col items-center justify-center rounded-xl bg-cover px-6"}>
            <h1 className={"text-center font-fraunces text-[40px] font-bold leading-[40px] text-light-cream"}>Great coffee made simple.</h1>
            <p className={"pt-6 text-center font-barlow text-[15px] font-light leading-[1.65rem] text-[#cccac6]"}>
              Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to
              your door, at your schedule.
            </p>
            <button className={"mt-[39px] rounded-lg bg-dark-cyan px-8 py-4"}>
              <span className={"font-fraunces text-xl font-semibold text-light-cream"}>Create your plan</span>
            </button>
          </div>
          <div className={"pt-[120px]"}>
            <h2 className={"text-center font-fraunces text-[40px] font-black text-grey"}>our collection</h2>
            <div>
              <Product
                name={"Gran Espresso"}
                description={"Light and flavorful blend with cocoa and black pepper for an intense experience"}
                imageSrc={"/assets/home/desktop/image-gran-espresso.png"}
              />

              <Product
                name={"Planalto"}
                description={"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"}
                imageSrc={"/assets/home/desktop/image-planalto.png"}
              />
              <Product
                name={"Piccollo"}
                description={"Mild and smooth blend featuring notes of toasted almond and dried cherry"}
                imageSrc={"/assets/home/desktop/image-piccollo.png"}
              />
              <Product
                name={"Danche"}
                description={"Ethiopian hand-harvested blend densely packed with vibrant fruit notes"}
                imageSrc={"/assets/home/desktop/image-danche.png"}
              />
            </div>
            <div>
              <h3>Why choose us?</h3>
              <p>
                A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best
                coffee growers to give you a more impactful experience on every level.
              </p>
              <div>
                <div>
                  <img src="" alt="" />
                  <h4>Best quality</h4>
                  <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                </div>
                <div>
                  <img src="" alt="" />
                  <h4>Exclusive benefits</h4>
                  <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                </div>
                <div>
                  <img src="" alt="" />
                  <h4>Free shipping</h4>
                  <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                </div>
              </div>
            </div>
            <div>
              <h3>How it works</h3>
              <div>
                <div>
                  <img src="" alt="" />
                  <h4>Choose your coffee</h4>
                  <p>
                    Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new
                    coffees in all profiles every month for you to try out.
                  </p>
                </div>
                <div>
                  <img src="" alt="" />
                  <h4>Choose your frequency</h4>
                  <p>
                    Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no
                    commitment through our online portal.
                  </p>
                </div>
                <div>
                  <img src="" alt="" />
                  <h4>Receive and enjoy!</h4>
                  <p>
                    We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a
                    distinct tasting experience.
                  </p>
                </div>
              </div>
            </div>
            <button>
              <span>Create your plan</span>
            </button>
          </div>
        </main>
        <footer>
          <nav>
            <div>
              <img src="" alt="" />
              <h4>Home</h4>
            </div>
            <div>
              <img src="" alt="" />
              <h4>About us</h4>
            </div>
            <div>
              <img src="" alt="" />
              <h4>Create your plan</h4>
            </div>
          </nav>
          <div>
            <h4>Facebook</h4>
            <h4>Twitter</h4>
            <h4>Instagram</h4>
          </div>
        </footer>
      </div>
    </>
  );
}
