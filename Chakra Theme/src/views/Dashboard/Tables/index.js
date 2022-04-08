// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        title={"Cart"}
        captions={["Item", "Price", "Company", "Date Added", ""]}
        data={tablesTableData}
      />
      <Projects
        title={"Real-Time Statistics"}
        captions={["Company", "Total Cost", "Number of Items", "Percent of Cart", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default Tables;
