import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  buttonLink: string;
  buttonText: string | null;
  className?: string;
};

const Button = ({ buttonText, className, buttonLink }: Props) => {
  return (
    <Link href={buttonLink}>
      <div
        className={clsx(
          "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
          className
        )}
      >
        {buttonText}
      </div>
    </Link>
  );
};
export default Button;
