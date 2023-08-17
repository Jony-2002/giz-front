import { StaticImageData } from "next/image";
import Project1 from "../../../public/images/image 4.png";
import Project2 from "../../../public/images/image 5.png";
import Project3 from "../../../public/images/image 6.png";
import Project4 from "../../../public/images/image 7.png";
import Project5 from "../../../public/images/image 8.png";

interface DataInterface {
  id: number;
  title: string;
  subtitle: string;
  image: any;
  district: string;
}

export const mock_data: any = [
  {
    id: 1,
    title:
      "Cultivating of New Sort of Organic Potato Seeds for Producing Chips",
    subtitle:
      "Mountain Food Products, LLC (MFP), a Tajik company incorporated in July of 2013, is a for – profit social enterprise, with a mission to benefit local economies, alleviate poverty and create sustainable loca employment.The LLC MFP has been granted subsidy for renting one hectare of land to cultivate raw potato for processing.",
    image: Project1,
    district: "Rushon",
    status: "deleted"
  },
  {
    id: 2,
    title: "Tajik company incorporated in July of 2013",
    subtitle:
      "Mountain Food Products, LLC (MFP), a Tajik company incorporated in July of 2013, is a for – profit social enterprise, with a mission to benefit local economies, alleviate poverty and create sustainable loca employment.The LLC MFP has been granted subsidy for renting one hectare of land to cultivate raw potato for processing. The idea behind the project was to encourage farmers to invest in potato farming to enhance rural development and thus improving their living standards.The main outcomes of the projec are the following: ▪ Creation of additional four job places. ▪ Around twenty-five people benefited from the project indirectly as suppliers, service providers",
    image: Project2,
    district: "Shurobod",
    status: "published"
  },
  {
    id: 3,
    title: "alleviate poverty and create sustainable loca providers",
    subtitle: "Mountain Food Products, Ls, service providers",
    image: Project3,
    district: "Hisor",
    status: "pending"
  },
  {
    id: 4,
    title:
      "Cultivating of New Sort of Organic Potato Seeds for Producing Chips",
    subtitle:
      "Mountain Food Products, LLC (MFP), a Tajik company incorporated in July of 2013, is a for – profit social enterprise, with a mission to benefit local economies, alleviate poverty and create sustainable loca employment.The LLC MFP has been granted subsidy for renting one hectare of land to cultivate raw potato for processing. The idea behind the project was to encourage farmers to invest in potato farming to enhance rural development and thus improving their living standards.The main outcomes of the projec are the following: ▪ Creation of additional four job places. ▪ Around twenty-five people benefited from the project indirectly as suppliers, service providers",
    image: Project4,
    district: "Darvoz",
    status: "published"
  },
  {
    id: 5,
    title:
      "Cultivating of New Sort of Organic Potato Seeds for Producing Chips",
    subtitle:
      "Mountain Food Products, LLC (MFP), a Tajik company incorporated in July of 2013, is a for – profit social enterprise, with a mission to benefit local economies, alleviate poverty and create sustainable loca employment.The LLC MFP has been granted subsidy for renting one hectare of land to cultivate raw potato for processing. The idea behind the project was to encourage farmers to invest in potato farming to enhance rural development and thus improving their living standards.The main outcomes of the projec are the following: ▪ Creation of additional four job places. ▪ Around twenty-five people benefited from the project indirectly as suppliers, service providers",
    image: Project5,
    district: "Vanj",
    status: "published"
  },
];
