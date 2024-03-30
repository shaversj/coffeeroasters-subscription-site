import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"mb-10 mt-[120px] bg-very-dark-blue pb-[54px]"}>
      <div className={"flex items-center justify-center space-x-2 pt-[54px]"}>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.93826 2.07878C7.51092 -0.352297 3.91292 -0.702264 1.91759 1.29992C-0.078766 3.30107 0.270364 6.9077 2.69355 9.33981C3.34001 9.98782 4.08489 10.4832 4.87121 10.8383C5.12917 9.33566 5.86887 7.89114 6.99189 6.70519C6.61997 6.57227 6.23872 6.46011 5.8409 6.35107C3.48505 5.70306 2.31438 3.73307 2.04088 1.4235C2.26709 1.69617 2.47304 1.98217 2.6784 2.26733C3.07682 2.8206 3.47296 3.3707 4.0103 3.81407C4.84619 4.50399 5.76371 4.77031 6.7675 5.06167C6.80625 5.07292 6.84513 5.08421 6.88415 5.09556C7.35967 5.23367 7.77303 5.43825 8.1522 5.6771C9.14883 4.94705 10.2729 4.46105 11.4332 4.26062C11.0799 3.47241 10.5847 2.72679 9.93826 2.07878ZM5.83365 11.4157C5.98801 9.91097 6.71528 8.43945 7.88077 7.27117C10.3081 4.84009 13.9061 4.48908 15.9014 6.49231C17.8978 8.49345 17.5497 12.1001 15.1234 14.5322C13.9579 15.7005 12.4899 16.4295 10.9888 16.5853C10.7888 16.605 10.5909 16.6154 10.3972 16.6154C9.10635 16.6154 7.95329 16.1616 7.10378 15.31C6.1258 14.3307 5.67411 12.9475 5.83365 11.4157ZM9.384 12.6505C10.1796 12.0419 11.0406 11.801 11.9771 11.5445C14.3329 10.8965 15.5026 8.9265 15.7771 6.61692C15.5528 6.88806 15.3484 7.17211 15.1445 7.45531L15.1445 7.45535C14.7449 8.01059 14.3476 8.56256 13.8077 9.0075C12.9692 9.69853 12.0496 9.9653 11.0413 10.2578L10.9338 10.289C8.62876 10.9598 7.48917 12.9132 7.22602 15.1864C7.4531 14.913 7.66111 14.6291 7.86803 14.3467L7.86804 14.3466C8.31722 13.7336 8.76127 13.1275 9.384 12.6505Z"
            fill="#0E8784"
          />
        </svg>
        <span className={"font-fraunces text-2xl font-bold text-light-cream"}>coffeeroasters</span>
      </div>

      <nav className={"flex flex-col items-center space-y-6 pt-[48.44px] md:flex-row md:justify-center md:space-x-[33px] md:space-y-0 md:pt-[32px]"}>
        <Link href={"/"}>
          <h4 className={"font-barlow text-[12px] font-semibold uppercase tracking-widest text-grey"}>Home</h4>
        </Link>
        <Link href={"/about"}>
          <h4 className={"font-barlow text-[12px] font-semibold uppercase tracking-widest text-grey"}>About us</h4>
        </Link>
        <Link href={"/subscribe"}>
          <h4 className={"font-barlow text-[12px] font-semibold uppercase tracking-widest text-grey"}>Create your plan</h4>
        </Link>
      </nav>
      <div className={"flex justify-center gap-x-6 pt-[48.56px]"}>
        <Image src={"/assets/shared/desktop/icon-facebook.svg"} width={24} height={24} alt={"facebook icon"} />
        <Image src={"/assets/shared/desktop/icon-twitter.svg"} width={24} height={19.5} alt={"twitter icon"} />
        <Image src={"/assets/shared/desktop/icon-instagram.svg"} width={24} height={24} alt={"instagram icon"} />
      </div>
    </footer>
  );
}
