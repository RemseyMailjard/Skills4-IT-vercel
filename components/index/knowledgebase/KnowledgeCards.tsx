"use client";
import { CustomLoadingButton } from "@/components/common";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import imgGpt from "/public/images/chatgpt.png";
import imgACS from "/public/images/blog_1.jpg";
import imgAVM from "/public/images/blog_2.jpg";
import imgBI from "/public/images/blog_3.jpg";
import imgPc from "/public/images/blog_4.jpg";
import imgDA from "/public/images/blog_5.jpg";
import imgNDA from "/public/images/blog_images_1.jpg";
import imgDB from "/public/images/blog_images_2.jpg";
import imgMS from "/public/images/latest_1.jpg";
import NoImage from "/public/images/no-image.jpg";
import theme from "@/theme";

const KnowledgeBaseCardsData = [
  {
    imageCard: imgGpt,
    CardTitle: "What is ChatGpt?",
    CardDesc:
      "ChatGPT is een geavanceerd taalmodel ontwikkeld door OpenAI. Het maakt gebruik van kunstmatige intelligentie om mensachtige tekst te genereren en te begrijpen. ChatGPT wordt ingezet in verschillende toepassingen, waaronder chatbots, klantenservice, contentgeneratie en meer. Het heeft een breed scala aan mogelijke toepassingen en kan worden gebruikt om menselijke interactie te automatiseren en te verbeteren.",
  },
  {
    imageCard: imgACS,
    CardTitle: "What is Azure Cloud Shell",
    CardDesc:
      "Azure Cloud Shell is een interactieve opdrachtregelinterface (CLI) die toegankelijk is via de Azure-portal. Het biedt een geïntegreerde omgeving met vooraf geïnstalleerde tools voor het beheren van Azure-resources. In deze blogpost verkennen we Azure Cloud Shell en laten we zien hoe het kan worden gebruikt om opdrachten uit te voeren, scripts te schrijven en efficiënt te werken met Azure-services.",
  },
  {
    imageCard: imgAVM,
    CardTitle: "What is Azure Virtual Machine",
    CardDesc:
      "An Azure Virtual Machine is a virtual computer that runs in the cloud on the Azure platform. It allows users to run various operating systems and software applications without having to purchase and maintain physical hardware. In this blog post we dive deeper into Azure Virtual Machines, discussing the deployment options, management functionalities and use cases.",
  },
  {
    imageCard: imgBI,
    CardTitle: "What is business intelligence?",
    CardDesc:
      "Business Intelligence (BI) is a technology-driven process for collecting, analyzing and presenting business information to help organizations make strategic decisions. BI tools enable companies to turn data into valuable insights, discover trends and improve performance. In this blog post we explore the world of Business Intelligence, discuss its essence and highlight its importance for modern businesses.",
  },
  {
    imageCard: imgPc,
    CardTitle: "PODCASTS:What are they? and Why are they so popular ",
    CardDesc:
      "Podcasts are digital audio or video files available for streaming or downloading over the Internet. They provide a platform for sharing stories, information and discussions on a wide range of topics such as news, technology, culture, entertainment and more. Podcasts have gained popularity in recent years due to their accessibility and diversity of content. They allow listeners to learn, be inspired and be entertained, all while on the go or relaxing at home.",
  },
  {
    imageCard: imgDA,
    CardTitle: "The 4 forms of Data Analysis",
    CardDesc:
      "Data analysis includes four forms: Descriptive (summarizing), Diagnostic (understanding causes), Predictive (predicting the future) and Prescriptive (making recommendations). Each form offers unique insights for decision-making.",
  },
  {
    imageCard: imgACS,
    CardTitle: "What is Azure?",
    CardDesc:
      "Azure is a cloud computing platform from Microsoft that provides a wide range of services for hosting, managing, and developing applications. It enables organizations to operate flexibly and scalably in the digital world.",
  },
  {
    imageCard: imgAVM,
    CardTitle: "What is Power BI?",
    CardDesc:
      "Power BI is a powerful business intelligence tool developed by Microsoft. It allows users to visualize and analyze data, create dashboards and reports, and gain insights from various data sources. In this blog post we take a deeper dive into Power BI, discussing its capabilities and its impact on data-driven decision-making.",
  },
  {
    imageCard: imgNDA,
    CardTitle: "What is IT?",
    CardDesc:
      "Information technology (IT) involves the use of computers, software, networks and electronic systems to store, process, transmit and manage information. IT plays a crucial role in modern societies and businesses, enabling efficiency, connectivity and innovation.",
  },
  {
    imageCard: imgBI,
    CardTitle: "What is DataBase?",
    CardDesc:
      "A database is an organized collection of data that is stored and managed electronically. They serve as central repositories for information and are used in a variety of applications, from business systems to web applications.",
  },
  {
    imageCard: imgDA,
    CardTitle: "SQL vs NOSQL database",
    CardDesc:
      "SQL databases are relational and structured, while NoSQL databases are flexible and scalable. Both have unique benefits depending on the needs of the project.",
  },
  {
    imageCard: imgDB,
    CardTitle: "Importance of database Normalization",
    CardDesc:
      "Database normalization is the process of organizing data efficiently to minimize redundant information. This improves data integrity and efficiency.",
  },
  {
    imageCard: imgPc,
    CardTitle: "In Memory Databases: Fast Memory Data Processing",
    CardDesc:
      "In-memory databases hold data entirely in RAM, allowing ultra-fast data processing. They are ideal for real-time applications and analysis.",
  },
  {
    imageCard: imgBI,
    CardTitle: "In Memory Databases: Fast Memory Data Processing",
    CardDesc:
      "In-memory databases hold data entirely in RAM, allowing ultra-fast data processing. They are ideal for real-time applications and analysis.",
  },
  {
    imageCard: null,
    CardTitle: "What is MicroSoft 365?",
    CardDesc:
      "Microsoft 365 is an integrated productivity platform from Microsoft designed to help organizations collaborate, communicate and manage their work more efficiently. It includes well-known tools like Word, Excel, PowerPoint, Outlook, Teams and more, along with cloud services like OneDrive and SharePoint. Microsoft 365 offers flexibility and scalability for both individual users and companies of all sizes.",
  },
];

export default function KnowledgeBaseCards() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile);
  return (
    <Box className="p-5">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry gutter="20px">
          {KnowledgeBaseCardsData.map((data, i) => (
            <Card
              sx={{
                transition: "200ms all ease-in-out",
                ":hover": {
                  transition: "200ms all ease-in-out",
                  transform: " scale(1.02)",
                  boxShadow: "0px 5px 11px -5px black",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    data.imageCard === null ? NoImage.src : data.imageCard.src
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.CardTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.CardDesc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <Box className="w-full flex justify-center my-5 ">
        <CustomLoadingButton>VIEW MORE </CustomLoadingButton>
      </Box>
    </Box>
  );
}
