// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
// import { tablesTableData, dashboardTableData } from "../../../variables/general";
import { tablesTableData, dashboardTableData, statDashboard } from "../../../variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        title={"Your Cart"}
        captions={["Item", "Price", "Store", "Date Added", ""]}
        data={tablesTableData}
      />
      <Projects
        title={"Your Store Accounts"}
        captions={["Store Name", "Budget", "Number of Cart Items", "Percentage of Budget", ""]}
        // data={dashboardTableData}
        data={statDashboard}
      />
    </Flex>
  );
}

export default Tables;
