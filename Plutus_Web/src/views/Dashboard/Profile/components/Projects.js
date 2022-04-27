// Chakra imports
import {
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "../../../../assets/img/avatars/avatar2.png";
import avatar4 from "../../../../assets/img/avatars/avatar4.png";
import avatar6 from "../../../../assets/img/avatars/avatar6.png";
import imageArchitect1 from "../../../../assets/img/ImageArchitect1.png";
import imageArchitect2 from "../../../../assets/img/ImageArchitect2.png";
import imageArchitect3 from "../../../../assets/img/ImageArchitect3.png";
// Custom components
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import CardHeader from "../../../../components/Card/CardHeader";
import React from "react";
import { FaPlus } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = ({ title, description }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px' my='24px'>
      <CardHeader p='12px 5px' mb='12px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {title}
          </Text>
          <Text fontSize='sm' color='gray.500' fontWeight='400'>
            {description}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px='5px'>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap='24px'>
          <ProjectCard
            image={imageArchitect1}
            name={"05/01/2022"}
            category={"$30.00"}
            description={
              "Amazon"
            }
            avatars={[avatar2, avatar4, avatar6]}
          />
          <ProjectCard
            image={imageArchitect2}
            name={"04/25/2022"}
            category={"$59.99"}
            description={
              "Urban Outfitters"
            }
            avatars={[avatar4, avatar2, avatar6, avatar4]}
          />
          <ProjectCard
            image={imageArchitect3}
            name={"04/23/2022"}
            category={"$24.59"}
            description={
              "Target"
            }
            avatars={[avatar2, avatar4, avatar6]}
          />
          <ProjectCard
            image={imageArchitect3}
            name={"04/17/2022"}
            category={"$89.75"}
            description={
              "Whole Foods"
            }
            avatars={[avatar2, avatar4, avatar6]}
          />
        </Grid>
      </CardBody>
    </Card>
  );
};

export default Projects;
