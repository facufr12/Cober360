// import node module libraries
import { Folder2, FolderFill } from "react-bootstrap-icons";
import { File } from "react-feather";
import { v4 as uuid } from "uuid";

export const fileStructureData = [
  {
    id: uuid(),
    name: "GeeksUI",
    desc: "The root folder geeks-react contains the below project structure of a GeeksUI ReactJS application",
    icon: <FolderFill className="text-warning" size={20} />,
    children: [
      {
        id: uuid(),
        name: "public",
        desc: "It holds favicon.ico, manifest.json, robots.txt and index.html",
        icon: <Folder2 className="text-warning" size={20} />,
      },
      {
        id: uuid(),
        name: "src",
        desc: "",
        icon: <Folder2 className="text-warning" size={20} />,
        children: [
          {
            id: uuid(),
            name: "assets",
            desc: "It contains all the images, scss and font files which are used in the theme",
            icon: <Folder2 className="text-warning" size={20} />
          },
          {
            id: uuid(),
            name: "components",
            desc: "All common components",
            icon: <Folder2 className="text-warning" size={20} />,
          },
          {
            id: uuid(),
            name: "context",
            desc: "It contains all context files, where context, in React, is a way to pass data down through a component tree without having to pass props down through every level. ",
            icon: <Folder2 className="text-warning" size={20} />,
          },
          {
            id: uuid(),
            name: "data",
            desc: "JSON formatted data files",
            icon: <Folder2 className="text-warning" size={20} />,
          },
          {
            id: uuid(),
            name: "helpers",
            desc: "It holds the utility functions",
            icon: <Folder2 className="text-warning" size={20} />,
          },
          {
            id: uuid(),
            name: "hooks",
            desc: "It holds custom hooks",
            icon: <Folder2 className="text-warning" size={20} />,
          },
          {
            id: uuid(),
            name: "layouts",
            desc: "It contains various app layouts",
            icon: <Folder2 className="text-warning" size={20} />,
          },
          {
            id: uuid(),
            name: "reducers",
            desc: "It handles the current state of an application and an action, and returns a new state",
            icon: <Folder2 className="text-warning" size={20} />,
          },
          {
            id: uuid(),
            name: "routes",
            desc: "All navigations' route structure",
            icon: <Folder2 className="text-warning" size={20} />,
          },
          {
            id: uuid(),
            name: "App.js",
            desc: "This is the main component of your React application.",
            icon: <File className="text-body" size={20} />,
          },
          {
            id: uuid(),
            name: "AppConfig.js",
            desc: "Custom theme configuration file.",
            icon: <File className="text-body" size={20} />,
          },
          {
            id: uuid(),
            name: "index.js",
            desc: "Initial point of entry for your React application",
            icon: <File className="text-body" size={20} />,
          },
          {
            id: uuid(),
            name: "reportWebVitals.js",
            desc: "Used to measure and analyze the performance of your application",
            icon: <File className="text-body" size={20} />,
          },
          {
            id: uuid(),
            name: "setupTests.js",
            desc: "This file is used for running components tests.",
            icon: <File className="text-body" size={20} />,
          },
        ],
      },
      {
        id: uuid(),
        name: ".env",
        desc: "It's a file that stores environment variables for a project.",
        icon: <File className="text-body" size={20} />,
      }, {
        id: uuid(),
        name: ".eslintrc.json",
        desc: "Configuration file for ESLint",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: ".gitignore",
        desc: "Git files and folders to ignore",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "jsconfig.json",
        desc: "Configuration file for JavaScript",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "package.json",
        desc: "Project dependencies and scripts",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "README.md",
        desc: "It's a Markdown file containing brief information about the project.",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "server.js",
        desc: "Custom node js file to run build version locally with different port.",
        icon: <File className="text-body" size={20} />,
      },
    ],
  },
];
