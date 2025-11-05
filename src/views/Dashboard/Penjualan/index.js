// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React, { useState } from "react";
import { FaShoppingCart, FaStore, FaUser } from "react-icons/fa";

function Penjualan() {
  const textColor = useColorModeValue("gray.700", "white");
  const toast = useToast();

  const [formData, setFormData] = useState({
    reseller: "",
    produk: "",
    jumlah: "",
    harga: "",
    status: "pending",
  });

  const [transaksi, setTransaksi] = useState([
    {
      id: 1,
      tanggal: "2024-01-15",
      reseller: "Reseller A",
      produk: "Batik Cap Motif A",
      jumlah: 50,
      harga: 50000,
      total: 2500000,
      status: "diproses",
    },
    {
      id: 2,
      tanggal: "2024-01-14",
      reseller: "Reseller B",
      produk: "Batik Printing Motif B",
      jumlah: 30,
      harga: 45000,
      total: 1350000,
      status: "dikirim",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaksi = {
      id: transaksi.length + 1,
      tanggal: new Date().toISOString().split("T")[0],
      reseller: formData.reseller,
      produk: formData.produk,
      jumlah: parseInt(formData.jumlah),
      harga: parseInt(formData.harga),
      total: parseInt(formData.jumlah) * parseInt(formData.harga),
      status: formData.status,
    };
    setTransaksi([...transaksi, newTransaksi]);
    toast({
      title: "Pesanan berhasil ditambahkan",
      description: "Pesanan reseller telah dicatat",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFormData({
      reseller: "",
      produk: "",
      jumlah: "",
      harga: "",
      status: "pending",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "diproses":
        return "orange";
      case "dikirim":
        return "blue";
      case "selesai":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing="24px" mb="24px">
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
                  <FaStore size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Transaksi Toko
                </Text>
              </Flex>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                25
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
                  bg="teal.500"
                  color="white"
                  borderRadius="15px"
                  p="15px"
                  me="10px"
                >
                  <FaUser size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Reseller Aktif
                </Text>
              </Flex>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                12
              </Text>
              <Text fontSize="sm" color="gray.400">
                Total reseller
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
                  <FaShoppingCart size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Total Penjualan
                </Text>
              </Flex>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Rp 18.500.000
              </Text>
              <Text fontSize="sm" color="gray.400">
                Bulan ini
              </Text>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Grid templateColumns={{ md: "1fr", lg: "1fr 1fr" }} gap="24px" mb="24px">
        <Card>
          <CardHeader>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Input Pesanan Reseller
            </Text>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb="20px">
                <FormLabel>Nama Reseller</FormLabel>
                <Input
                  name="reseller"
                  value={formData.reseller}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama reseller"
                  required
                />
              </FormControl>
              <FormControl mb="20px">
                <FormLabel>Produk</FormLabel>
                <Select
                  name="produk"
                  value={formData.produk}
                  onChange={handleInputChange}
                  placeholder="Pilih produk"
                  required
                >
                  <option value="Batik Cap Motif A">Batik Cap Motif A</option>
                  <option value="Batik Cap Motif B">Batik Cap Motif B</option>
                  <option value="Batik Printing Motif A">
                    Batik Printing Motif A
                  </option>
                  <option value="Batik Printing Motif B">
                    Batik Printing Motif B
                  </option>
                </Select>
              </FormControl>
              <FormControl mb="20px">
                <FormLabel>Jumlah</FormLabel>
                <Input
                  name="jumlah"
                  type="number"
                  value={formData.jumlah}
                  onChange={handleInputChange}
                  placeholder="Masukkan jumlah"
                  required
                />
              </FormControl>
              <FormControl mb="20px">
                <FormLabel>Harga per Unit</FormLabel>
                <Input
                  name="harga"
                  type="number"
                  value={formData.harga}
                  onChange={handleInputChange}
                  placeholder="Masukkan harga"
                  required
                />
              </FormControl>
              <FormControl mb="20px">
                <FormLabel>Status</FormLabel>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="pending">Pending</option>
                  <option value="diproses">Diproses</option>
                  <option value="dikirim">Dikirim</option>
                  <option value="selesai">Selesai</option>
                </Select>
              </FormControl>
              <Button
                type="submit"
                bg="teal.300"
                color="white"
                w="100%"
                _hover={{ bg: "teal.200" }}
              >
                Simpan Pesanan
              </Button>
            </form>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Notifikasi
            </Text>
          </CardHeader>
          <CardBody>
            <Flex direction="column" gap="15px">
              <Box
                p="15px"
                bg="orange.50"
                borderRadius="10px"
                borderLeft="4px solid"
                borderColor="orange.500"
              >
                <Text fontSize="sm" fontWeight="bold" mb="5px">
                  Pesanan #2 sedang diproses
                </Text>
                <Text fontSize="xs" color="gray.600">
                  Reseller B - Batik Printing Motif B
                </Text>
              </Box>
              <Box
                p="15px"
                bg="blue.50"
                borderRadius="10px"
                borderLeft="4px solid"
                borderColor="blue.500"
              >
                <Text fontSize="sm" fontWeight="bold" mb="5px">
                  Pesanan #1 telah dikirim
                </Text>
                <Text fontSize="xs" color="gray.600">
                  Reseller A - Batik Cap Motif A
                </Text>
              </Box>
              <Box
                p="15px"
                bg="red.50"
                borderRadius="10px"
                borderLeft="4px solid"
                borderColor="red.500"
              >
                <Text fontSize="sm" fontWeight="bold" mb="5px">
                  Stok Batik Cap Motif A menipis
                </Text>
                <Text fontSize="xs" color="gray.600">
                  Sisa: 15 unit
                </Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </Grid>

      <Card>
        <CardHeader>
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            Daftar Transaksi
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr>
                <Th>Tanggal</Th>
                <Th>Reseller</Th>
                <Th>Produk</Th>
                <Th>Jumlah</Th>
                <Th>Harga</Th>
                <Th>Total</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transaksi.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.tanggal}</Td>
                  <Td>{item.reseller}</Td>
                  <Td>{item.produk}</Td>
                  <Td>{item.jumlah}</Td>
                  <Td>Rp {item.harga.toLocaleString("id-ID")}</Td>
                  <Td>Rp {item.total.toLocaleString("id-ID")}</Td>
                  <Td>
                    <Text
                      as="span"
                      px="10px"
                      py="5px"
                      borderRadius="5px"
                      bg={`${getStatusColor(item.status)}.100`}
                      color={`${getStatusColor(item.status)}.700`}
                      fontSize="xs"
                      fontWeight="bold"
                    >
                      {item.status}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Penjualan;

