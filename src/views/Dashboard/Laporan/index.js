// Chakra imports
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Badge,
  Progress,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import React from "react";
import { FaChartBar, FaBoxOpen, FaShoppingBag, FaExclamationCircle } from "react-icons/fa";

function Laporan() {
  const textColor = useColorModeValue("gray.700", "white");

  const produkTerlaris = [
    {
      id: 1,
      nama: "Batik Cap Motif A",
      jumlahTerjual: 150,
      totalPenjualan: 7500000,
      persentase: 35,
    },
    {
      id: 2,
      nama: "Batik Printing Motif A",
      jumlahTerjual: 120,
      totalPenjualan: 5400000,
      persentase: 28,
    },
    {
      id: 3,
      nama: "Batik Cap Motif B",
      jumlahTerjual: 80,
      totalPenjualan: 4000000,
      persentase: 18,
    },
    {
      id: 4,
      nama: "Batik Printing Motif B",
      jumlahTerjual: 75,
      totalPenjualan: 3375000,
      persentase: 17,
    },
  ];

  const stokMenipis = [
    {
      id: 1,
      nama: "Batik Cap Motif B",
      stokTersisa: 8,
      stokMinimal: 20,
      persentase: 40,
      status: "menipis",
    },
    {
      id: 2,
      nama: "Batik Printing Motif B",
      stokTersisa: 5,
      stokMinimal: 15,
      persentase: 33,
      status: "kritis",
    },
    {
      id: 3,
      nama: "Batik Cap Motif A",
      stokTersisa: 45,
      stokMinimal: 50,
      persentase: 90,
      status: "perhatian",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "kritis":
        return "red";
      case "menipis":
        return "orange";
      case "perhatian":
        return "yellow";
      default:
        return "gray";
    }
  };

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing="24px" mb="24px">
        <Card>
          <CardBody>
            <Flex direction="column">
              <Flex align="center" mb="10px">
                <Box
                  bg="blue.500"
                  color="white"
                  borderRadius="15px"
                  p="15px"
                  me="10px"
                >
                  <FaShoppingBag size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Total Penjualan
                </Text>
              </Flex>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Rp 20.275.000
              </Text>
              <Text fontSize="sm" color="gray.400">
                Bulan ini
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Flex direction="column">
              <Flex align="center" mb="10px">
                <Box
                  bg="green.500"
                  color="white"
                  borderRadius="15px"
                  p="15px"
                  me="10px"
                >
                  <FaBoxOpen size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Unit Terjual
                </Text>
              </Flex>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                425
              </Text>
              <Text fontSize="sm" color="gray.400">
                Bulan ini
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Flex direction="column">
              <Flex align="center" mb="10px">
                <Box
                  bg="orange.500"
                  color="white"
                  borderRadius="15px"
                  p="15px"
                  me="10px"
                >
                  <FaExclamationCircle size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Stok Menipis
                </Text>
              </Flex>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                3
              </Text>
              <Text fontSize="sm" color="gray.400">
                Produk
              </Text>
            </Flex>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Flex direction="column">
              <Flex align="center" mb="10px">
                <Box
                  bg="teal.500"
                  color="white"
                  borderRadius="15px"
                  p="15px"
                  me="10px"
                >
                  <FaChartBar size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Rata-rata Penjualan
                </Text>
              </Flex>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Rp 47.706
              </Text>
              <Text fontSize="sm" color="gray.400">
                Per unit
              </Text>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Grid templateColumns={{ md: "1fr", lg: "1fr 1fr" }} gap="24px" mb="24px">
        <Card>
          <CardHeader>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Grafik Penjualan
            </Text>
          </CardHeader>
          <CardBody>
            <LineChart />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Distribusi Penjualan
            </Text>
          </CardHeader>
          <CardBody>
            <BarChart />
          </CardBody>
        </Card>
      </Grid>

      <Grid templateColumns={{ md: "1fr", lg: "1fr 1fr" }} gap="24px" mb="24px">
        <Card>
          <CardHeader>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Produk Terlaris
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor} size="sm">
              <Thead>
                <Tr>
                  <Th>Produk</Th>
                  <Th>Terjual</Th>
                  <Th>Total</Th>
                  <Th>Persentase</Th>
                </Tr>
              </Thead>
              <Tbody>
                {produkTerlaris.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.nama}</Td>
                    <Td>{item.jumlahTerjual}</Td>
                    <Td>Rp {item.totalPenjualan.toLocaleString("id-ID")}</Td>
                    <Td>
                      <Flex align="center" gap="10px">
                        <Progress
                          value={item.persentase}
                          colorScheme="teal"
                          size="sm"
                          w="60px"
                        />
                        <Text fontSize="xs">{item.persentase}%</Text>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Laporan Stok Menipis
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor} size="sm">
              <Thead>
                <Tr>
                  <Th>Produk</Th>
                  <Th>Stok Tersisa</Th>
                  <Th>Stok Minimal</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {stokMenipis.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.nama}</Td>
                    <Td>{item.stokTersisa}</Td>
                    <Td>{item.stokMinimal}</Td>
                    <Td>
                      <Badge
                        colorScheme={getStatusColor(item.status)}
                        fontSize="xs"
                      >
                        {item.status}
                      </Badge>
                      <Progress
                        value={item.persentase}
                        colorScheme={getStatusColor(item.status)}
                        size="sm"
                        mt="5px"
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Laporan;

