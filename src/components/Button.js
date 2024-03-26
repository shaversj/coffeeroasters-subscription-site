export default function Button({ title, description, onClickHandler }) {
  return (
    <button
      onClick={() => onClickHandler(title)}
      className={"bg-button-brown group/button rounded-xl px-[25px] py-6 text-left first:mt-[32px] hover:bg-dark-cyan"}
    >
      <span className={"font-fraunces text-[24px] font-bold group-hover/button:text-white"}>{title}</span>
      <p className={"font-barlow text-[16px] text-dark-grey-blue group-hover/button:text-white"}>{description}</p>
    </button>
  );
}
