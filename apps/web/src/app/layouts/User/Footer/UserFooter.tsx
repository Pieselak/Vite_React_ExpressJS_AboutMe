import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  CopyrightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MonitorIcon,
  ServerCog,
  UserIcon,
} from "lucide-react";

export function UserFooter() {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-wrap justify-between items-baseline w-full p-3 gap-3 bg-background border-t-2 border-border overflow-x-hidden">
      <div className="flex flex-col flex-1 justify-center items-center gap-2">
        <h1 className="text-primary font-bold">
          {t("user.footer.creator.title")}
        </h1>

        <div className="flex justify-start items-center w-full gap-3 px-3 py-1.5 border border-border hover:border-ring hover:bg-accent/50 rounded-lg">
          <div className="flex justify-center items-center p-2 bg-accent/30 border border-ring rounded-md">
            <UserIcon className="size-6 text-ring" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-primary font-medium">
              {t("user.footer.creator.madeBy.title")}
            </h2>
            <h3 className="text-nowrap">
              {t("user.footer.creator.madeBy.content")}
            </h3>
          </div>
        </div>

        <div className="flex justify-start items-center w-full gap-3 px-3 py-1.5 border border-border hover:border-ring hover:bg-accent/50 rounded-lg">
          <div className="flex justify-center items-center p-2 bg-accent/30 border border-ring rounded-md">
            <CopyrightIcon className="size-6 text-ring" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-primary font-medium">
              {t("user.footer.creator.copyright.title")}
            </h2>
            <h3 className="text-nowrap">
              {t("user.footer.creator.copyright.content", {
                year: new Date().getFullYear(),
              })}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-center items-center gap-2">
        <h1 className="text-primary font-bold">
          {t("user.footer.contact.title")}
        </h1>

        <Link
          to="mailto:znamirowskipatryk@gmail.com"
          className="flex justify-start items-center w-full gap-3 px-3 py-1.5 border border-border hover:border-ring hover:bg-accent/50 rounded-lg"
        >
          <div className="flex justify-center items-center p-2 bg-accent/30 border border-ring rounded-md">
            <MailIcon className="size-6 text-ring" />
          </div>
          <div>
            <h2 className="text-primary font-medium">
              {t("user.footer.contact.email.title")}
            </h2>
            <h3 className="text-nowrap">znamirowskipatryk@gmail.com</h3>
          </div>
        </Link>
      </div>

      <div className="flex flex-col flex-1 justify-center items-center gap-2">
        <h1 className="text-primary font-bold">
          {t("user.footer.socials.title")}
        </h1>

        <Link
          to="https://github.com/Pieselak"
          className="flex justify-start items-center w-full gap-3 px-3 py-1.5 border border-border hover:border-ring hover:bg-accent/50 rounded-lg"
        >
          <div className="flex justify-center items-center p-2 bg-accent/30 border border-ring rounded-md">
            <GithubIcon className="size-6 text-ring" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-primary font-medium">Github</h2>
            <h3 className="text-nowrap">/Pieselak</h3>
          </div>
        </Link>

        <Link
          to="https://www.linkedin.com/in/patryk-znamirowski"
          className="flex justify-start items-center w-full gap-3 px-3 py-1.5 border border-border hover:border-ring hover:bg-accent/50 rounded-lg"
        >
          <div className="flex justify-center items-center p-2 bg-accent/30 border border-ring rounded-md">
            <LinkedinIcon className="size-6 text-ring" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-primary font-medium">Linkedin</h2>
            <h3 className="text-nowrap">/patryk-znamirowski</h3>
          </div>
        </Link>
      </div>

      <div className="flex flex-col flex-1 justify-center items-center gap-2">
        <h1 className="text-primary font-bold">
          {t("user.footer.technologies.title")}
        </h1>

        <div className="flex justify-start items-center w-full gap-3 px-3 py-1.5 border border-border hover:border-ring hover:bg-accent/50 rounded-lg">
          <div className="flex justify-center items-center p-2 bg-accent/30 border border-ring rounded-md">
            <ServerCog className="size-6 text-ring" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-primary font-medium">Frontend</h2>
            <h3 className="text-nowrap">Vite, React, TailwindCSS</h3>
          </div>
        </div>

        <div className="flex justify-start items-center w-full gap-3 px-3 py-1.5 border border-border hover:border-ring hover:bg-accent/50 rounded-lg">
          <div className="flex justify-center items-center p-2 bg-accent/30 border border-ring rounded-md">
            <MonitorIcon className="size-6 text-ring" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-primary font-medium">Backend</h2>
            <h3 className="text-nowrap">NestJS</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
