// Chakra imports
import { Box, Flex, Grid, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Assets
// import BackgroundCard1 from "../../../assets/img/BackgroundCard1.png";
// import { MastercardIcon, VisaIcon } from "../../../components/Icons/Icons";
import React from "react";
// import { FaPaypal, FaWallet } from "react-icons/fa";
// import { RiMastercardFill } from "react-icons/ri";
import {
  // billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "../../../variables/general";
// import BillingInformation from "./components/BillingInformation";
// import CreditCard from "./components/CreditCard";
// import Invoices from "./components/Invoices";
// import PaymentMethod from "./components/PaymentMethod";
// import PaymentStatistics from "./components/PaymentStatistics";
import Transactions from "./components/Transactions";
import SpendingChart from "./components/SpendingChart";
import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import StyleSheet from "react";

am4core.useTheme(am4themes_animated);

function Billing() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid>
        <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
        <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
      </Grid>
      <Grid>
      <Text color='gray.700' fontSize='lg' fontWeight='semibold' textAlign='center'>
                Spending Tracker
              </Text>
        <SpendingChart>
        </SpendingChart>
      </Grid>
      <Grid>
      {/* <Grid templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }}> */}
        {/* <BillingInformation title={"Billing Information"} data={billingData} /> */}
        <Transactions
          title={"Your Transactions"}
          date={"March - April"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        />
      </Grid>
    </Flex>
  );
}

// const styles = StyleSheet.create({
// });

export default Billing;
