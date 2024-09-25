import Link from "next/link";
import { Section } from "./Section";
import { Githubicon } from "./icons/Githubicon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Linkedinicon } from "./icons/Linkedinicon";
import { Instagramicon } from "./icons/Instagramicon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-center">
        <h1 className="text-4xl font-bold text-primary">doreen.com</h1>
        <div className="flex-1" />
        <ul className="flex flex-row space-x-4">
          <Link
            href="https://github.com/DoreenOubb"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <Githubicon size={20} className="text-foreground" />
          </Link>
          <Linkedinicon size={20} className="text-foreground" />
          <Instagramicon size={20} className="text-foreground" />
        </ul>
      </Section>
    </header>
  );
};
