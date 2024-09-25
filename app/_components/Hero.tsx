import { Section } from "./Section";
import Image from "next/image";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2>Doreen Oubbahi</h2>
        <h3>Sotware developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae
          itaque fugit vero illum voluptatum nesciunt qui impedit, accusantium
          quia cumque numquam dolorum reiciendis error ratione debitis repellat
          pariatur temporibus.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/picture.png"
          layout="responsive"
          width={500}
          height={500}
          alt="Doreen picture"
        />
      </div>
    </Section>
  );
};
