import { FaAngular, FaReact, FaJava } from "react-icons/fa";
import { SiMongodb, SiCsharp, SiExpress, SiMysql } from "react-icons/si";
export const data = [
  {
    title: "Angular",
    image: (
      <FaAngular
        style={{
          fontSize: "250px",
          color: "#f7ce3e",
        }}
      />
    ),
  },
  {
    title: "React",
    image: <FaReact style={{ fontSize: "250px", color: "#f7ce3e" }} />,
  },
  {
    title: "MongoDB",
    image: <SiMongodb style={{ fontSize: "250px", color: "#f7ce3e" }} />,
  },
  {
    title: "Express",
    image: <SiExpress style={{ fontSize: "250px", color: "#f7ce3e" }} />,
  },
  {
    title: "Ado.net",
    image: <SiCsharp style={{ fontSize: "250px", color: "#f7ce3e" }} />,
  },
  {
    title: "SQL",
    image: <SiMysql style={{ fontSize: "250px", color: "#f7ce3e" }} />,
  },
];
