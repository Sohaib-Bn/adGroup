function System({ data: { system, url } }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={url}
      className={`flex uppercase flex-col items-center gap-3 justify-center border-[1.5px] border-colorGreyText py-8 px-3 text-colorGreyText ${
        system === "adcomrc"
          ? "hover:bg-colorADCOMRC hover:border-colorADCOMRC"
          : ""
      } ${
        system === "admedia"
          ? "hover:bg-colorADMEDIA hover:border-colorADMEDIA"
          : ""
      } transition-all hover:text-colorWhite hover:-translate-y-2 hover:shadow-xl active:shadow-sm active:-translate-y-1`}
    >
      <span className="font-extrabold text-[1.7rem] 2xl:text-[1.8rem] leading-[1]">
        {system}
      </span>
      <span className="text-[1.5rem] 2xl:text-[1.4rem] font-light leading-[1]">
        system
      </span>
    </a>
  );
}

export default System;
