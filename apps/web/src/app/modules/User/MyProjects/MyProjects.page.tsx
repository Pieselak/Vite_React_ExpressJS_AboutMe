import { useParams } from "react-router-dom";
import { MyProjectsList } from "@/app/modules/User/MyProjects/MyProjectsList.tsx";
import { MyProjectsDetails } from "@/app/modules/User/MyProjects/MyProjectsDetails.tsx";
import { NotFoundPage } from "@/app/modules/NotFound/NotFound.page.tsx";
import { useTranslation } from "react-i18next";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  status: "completed" | "inProgress" | "planned";
  sourceCodeOpen: boolean;
  sourceCodeUrl?: string;
  tags?: string[];
  startDate?: string;
  completeDate?: string;
  developers?: Array<{
    name: string;
    role: string;
  }>;
};

export function MyProjectsPage() {
  const params = useParams();
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      tags: ["TypeScript", "React", "TailwindCSS", "Node.JS", "NestJS"],
      title: "Portfolio Website with Glucose Sensor Integration",
      description:
        "The project involves creating a modern portfolio website divided into four main sections: Home, About me, Projects, and Blood sugar. The purpose of the site is to present the individual, their experience, skills, and completed work, as well as to showcase an integration with a sensor that measures glucose levels, with the collected data being processed and displayed to the user. The frontend layer is built using Vite, React, and TypeScript, ensuring high performance, modular code structure, and clear application logic. TailwindCSS is used for styling, providing a lightweight, responsive, and easily extendable interface. Each section of the website serves a specific role: the Home page introduces the user and presents the most important information; About me describes the creator’s profile and experience; the Projects section showcases completed work; and the Blood sugar section enables the presentation of data gathered from the sensor. The backend is developed with NestJS and is responsible for communication with the sensor’s API. The server logic includes retrieving, processing, and securely providing the data to the frontend in an organized manner. Thanks to this architecture, the project is scalable, understandable, and ready for further development.",
      image:
        "https://cdn.discordapp.com/attachments/1304862782939729932/1442267729175515158/10552057.png?ex=6924cffe&is=69237e7e&hm=3a5b41e360881fee27202e927bf059ccf685aa1b435a63cda741e26b20d91f73&",
      status: "inProgress",
      sourceCodeOpen: true,
      sourceCodeUrl: "https://github.com/Pieselak/Vite_React_ExpressJS_AboutMe",
      startDate: "19.11.2025",
      developers: [
        {
          name: "Patryk Z.",
          role: "Full-Stack Developer",
        },
      ],
    },
  ];

  const projectId = params.projectId ? parseInt(params.projectId) : null;
  const projectFound = projects.find((p) => p.id === projectId);
  if (projectId && !projectFound) {
    return <NotFoundPage message={t("user.myProjectsPage.projectNotFound")} />;
  }

  return (
    <div className="flex flex-col gap-2.5 justify-start items-center p-3 bg-card border-2 border-border rounded-xl">
      {projectFound ? (
        <MyProjectsDetails project={projectFound} />
      ) : (
        <MyProjectsList projects={projects} />
      )}
    </div>
  );
}
