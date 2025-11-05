// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Total Penjualan Bulan Ini"}
          amount={"Rp 20.275.000"}
          percentage={15}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Unit Terjual"}
          amount={"425"}
          percentage={12}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Reseller Aktif"}
          amount={"12"}
          percentage={8}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Stok Menipis"}
          amount={"3"}
          percentage={-5}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <BuiltByDevelopers
          title={"Tentang Sistem"}
          name={"Batik H.M. Akmal"}
          description={
            "Sistem Informasi Penjualan & Manajemen Stok untuk UMKM Batik. Kelola penjualan, stok, dan reseller dengan mudah."
          }
        />
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          title={"Manajemen Reseller"}
          description={
            "Kelola pesanan reseller, pantau stok, dan dapatkan laporan penjualan secara real-time untuk pertumbuhan bisnis yang lebih baik."
          }
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"Penjualan per Reseller"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"Grafik Penjualan"}
          percentage={15}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"Produk Terlaris"}
          amount={425}
          captions={["Produk", "Reseller", "Terjual", "Persentase"]}
          data={dashboardTableData}
        />
        <OrdersOverview
          title={"Transaksi Terbaru"}
          amount={25}
          data={timelineData}
        />
      </Grid>
    </Flex>
  );
}
