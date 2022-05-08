// Chakra imports
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Card/Card.js";
import CardBody from "../../../../components/Card/CardBody.js";
// Custom icons
import {
  CartIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "../../../../components/Icons/Icons.js";
import React from "react";
import ChartStatistics from "./ChartStatistics";

const ActiveUsers = ({ title, percentage, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='16px'>
      <CardBody>
        <Flex direction='column' w='100%'>
          {chart}
          <Flex direction='column' mt='24px' mb='36px' alignSelf='flex-start'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
              {title}
            </Text>
            <Text fontSize='md' fontWeight='medium' color='gray.400'>
              <Text
                as='span'
                color={percentage < 0 ? "green.400" : "red.400"}
                fontWeight='bold'>
                {percentage > 0 ? `+${percentage}%` : `-${percentage}%`}
              </Text>{" "}
              than last week
            </Text>
            <Text fontSize='md' fontWeight='medium' color='gray.400'>
              <Text
                as='span'
                color={(percentage - 45) < 0 ? "green.400" : "red.400"}
                fontWeight='bold'>
                {(percentage - 45) > 0 ? `+${percentage - 45}%` : `-${22}%`}
              </Text>{" "}
              than your 1-month weekly average
            </Text>
            <Text fontSize='md' fontWeight='medium' color='gray.400'>
              <Text
                as='span'
                color={(percentage + 11) < 0 ? "green.400" : "red.400"}
                fontWeight='bold'>
                {(percentage + 11) > 0 ? `+${percentage + 11}%` : `-${percentage + 11}%`}
              </Text>{" "}
              than your 1-year weekly average
            </Text>
            {/* <Text fontSize='md' fontWeight='medium' color='gray.400'>
              <Text
                as='span'
                color={(percentage - 11) < 0 ? "green.400" : "red.400"}
                fontWeight='bold'>
                {(percentage - 11) > 0 ? `+${percentage - 11}%` : `-${percentage - 11}%`}
              </Text>{" "}
              than your 2-year weekly average
            </Text> */}
            <Text fontSize='md' fontWeight='medium' color='gray.400'>
              <Text
                as='span'
                color={(percentage - 15) < 0 ? "green.400" : "red.400"}
                fontWeight='bold'>
                {(percentage - 15) > 0 ? `+${percentage - 15}%` : `-${percentage - 15}%`}
              </Text>{" "}
              than your overall weekly average
            </Text>
            {/* <Text fontSize='md' fontWeight='medium' color='gray.400'>
              <Text
                as='span'
                color={(percentage - 28) < 0 ? "green.400" : "red.400"}
                fontWeight='bold'>
                {(percentage - 28) > 0 ? `+${percentage - 28}%` : `-${percentage - 28}%`}
              </Text>{" "}
              than your set weekly budget
            </Text> */}
          </Flex>
           {/* <SimpleGrid gap={{ sm: "12px" }} columns={4}>
            <ChartStatistics
              title={"Users"}
              amount={"32,984"}
              percentage={20}
              icon={<WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Clicks"}
              amount={"2.42m"}
              percentage={80}
              icon={<RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Sales"}
              amount={"2,400$"}
              percentage={30}
              icon={<CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Items"}
              amount={"320"}
              percentage={40}
              icon={<StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
          </SimpleGrid> */}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ActiveUsers;
