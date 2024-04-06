import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={
        "mb-10 mt-[120px] flex flex-col items-center bg-very-dark-blue pb-[54px] lg:flex lg:h-[120px] lg:flex-row lg:items-center lg:px-[85px] lg:pb-0"
      }
    >
      <picture>
        <source srcSet="/assets/shared/desktop/logo.svg" media={"(min-width: 1440px)"} type="image/svg+xml" />
        <source srcSet="/assets/shared/tablet/logo.svg" media={"(min-width: 768px)"} type="image/svg+xml" />
        <img className={"mt-[54px] lg:mt-0"} src="/assets/shared/desktop/logo.svg" alt="coffeeroasters" />
      </picture>
      <nav
        className={
          "flex flex-col items-center space-y-6 pt-[48.44px] md:flex-row md:justify-center md:space-x-[33px] md:space-y-0 md:pt-[32px] lg:flex-row lg:pl-[103px] lg:pt-0"
        }
      >
        <Link href={"/"}>
          <h4 className={"font-barlow text-[12px] font-semibold uppercase tracking-widest text-grey"}>Home</h4>
        </Link>
        <Link href={"/about"}>
          <h4 className={"font-barlow text-[12px] font-semibold uppercase tracking-widest text-grey"}>About us</h4>
        </Link>
        <Link href={"/plan"}>
          <h4 className={"font-barlow text-[12px] font-semibold uppercase tracking-widest text-grey"}>Create your plan</h4>
        </Link>
      </nav>
      <div className={"flex justify-center gap-x-6 pt-[48.56px] lg:ml-auto lg:pt-0"}>
        <Image src={"/assets/shared/desktop/icon-facebook.svg"} width={24} height={24} alt={"facebook icon"} />
        <Image src={"/assets/shared/desktop/icon-twitter.svg"} width={24} height={19.5} alt={"twitter icon"} />
        <Image src={"/assets/shared/desktop/icon-instagram.svg"} width={24} height={24} alt={"instagram icon"} />
      </div>
    </footer>
  );
}
