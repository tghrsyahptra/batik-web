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
  Badge,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React, { useState } from "react";
import { FaBox, FaWarehouse, FaSyncAlt, FaExclamationTriangle } from "react-icons/fa";

function Stok() {
  const textColor = useColorModeValue("gray.700", "white");
  const toast = useToast();

  const [formData, setFormData] = useState({
    produk: "",
    jumlah: "",
    jenis: "masuk",
    sumber: "",
    tanggal: new Date().toISOString().split("T")[0],
  });

  const [stok, setStok] = useState([
    {
      id: 1,
      nama: "Batik Cap Motif A",
      stokToko: 45,
      stokOnline: 50,
      status: "aman",
      lastUpdate: "2024-01-15",
    },
    {
      id: 2,
      nama: "Batik Cap Motif B",
      stokToko: 8,
      stokOnline: 10,
      status: "menipis",
      lastUpdate: "2024-01-15",
    },
    {
      id: 3,
      nama: "Batik Printing Motif A",
      stokToko: 120,
      stokOnline: 115,
      status: "aman",
      lastUpdate: "2024-01-14",
    },
    {
      id: 4,
      nama: "Batik Printing Motif B",
      stokToko: 5,
      stokOnline: 5,
      status: "kritis",
      lastUpdate: "2024-01-13",
    },
  ]);

  const [mutasiStok, setMutasiStok] = useState([
    {
      id: 1,
      tanggal: "2024-01-15",
      produk: "Batik Cap Motif A",
      jenis: "masuk",
      jumlah: 50,
      sumber: "Pabrik",
      keterangan: "Stok masuk dari pabrik",
    },
    {
      id: 2,
      tanggal: "2024-01-15",
      produk: "Batik Cap Motif A",
      jenis: "keluar",
      jumlah: 5,
      sumber: "Toko",
      keterangan: "Penjualan ke pelanggan",
    },
    {
      id: 3,
      tanggal: "2024-01-14",
      produk: "Batik Printing Motif A",
      jenis: "masuk",
      jumlah: 100,
      sumber: "Pabrik",
      keterangan: "Stok masuk dari pabrik",
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
    const newMutasi = {
      id: mutasiStok.length + 1,
      tanggal: formData.tanggal,
      produk: formData.produk,
      jenis: formData.jenis,
      jumlah: parseInt(formData.jumlah),
      sumber: formData.sumber,
      keterangan: `Stok ${formData.jenis} dari ${formData.sumber}`,
    };
    setMutasiStok([...mutasiStok, newMutasi]);

    // Update stok
    const updatedStok = stok.map((item) => {
      if (item.nama === formData.produk) {
        if (formData.jenis === "masuk") {
          return {
            ...item,
            stokToko: item.stokToko + parseInt(formData.jumlah),
            stokOnline: item.stokOnline + parseInt(formData.jumlah),
            lastUpdate: formData.tanggal,
          };
        } else {
          return {
            ...item,
            stokToko: Math.max(0, item.stokToko - parseInt(formData.jumlah)),
            stokOnline: Math.max(0, item.stokOnline - parseInt(formData.jumlah)),
            lastUpdate: formData.tanggal,
          };
        }
      }
      return item;
    });
    setStok(updatedStok);

    toast({
      title: "Stok berhasil diperbarui",
      description: `Stok ${formData.jenis} untuk ${formData.produk} telah dicatat`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setFormData({
      produk: "",
      jumlah: "",
      jenis: "masuk",
      sumber: "",
      tanggal: new Date().toISOString().split("T")[0],
    });
  };

  const handleSync = () => {
    toast({
      title: "Sinkronisasi berhasil",
      description: "Stok toko dan stok online telah disinkronkan",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "aman":
        return "green";
      case "menipis":
        return "orange";
      case "kritis":
        return "red";
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
                  <FaWarehouse size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Total Produk
                </Text>
              </Flex>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                {stok.length}
              </Text>
              <Text fontSize="sm" color="gray.400">
                Item dalam gudang
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
                  <FaExclamationTriangle size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Stok Menipis
                </Text>
              </Flex>
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                {
                  stok.filter((item) => item.status === "menipis" || item.status === "kritis")
                    .length
                }
              </Text>
              <Text fontSize="sm" color="gray.400">
                Perlu perhatian
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
                  <FaSyncAlt size="20px" />
                </Box>
                <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                  Sinkronisasi
                </Text>
              </Flex>
              <Button
                size="sm"
                bg="teal.300"
                color="white"
                onClick={handleSync}
                _hover={{ bg: "teal.200" }}
              >
                Sinkronkan Stok
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Grid templateColumns={{ md: "1fr", lg: "1fr 1fr" }} gap="24px" mb="24px">
        <Card>
          <CardHeader>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Input Stok Masuk/Keluar
            </Text>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb="20px">
                <FormLabel>Jenis Transaksi</FormLabel>
                <Select
                  name="jenis"
                  value={formData.jenis}
                  onChange={handleInputChange}
                  required
                >
                  <option value="masuk">Stok Masuk</option>
                  <option value="keluar">Stok Keluar</option>
                </Select>
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
                  {stok.map((item) => (
                    <option key={item.id} value={item.nama}>
                      {item.nama}
                    </option>
                  ))}
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
                <FormLabel>Sumber/Tujuan</FormLabel>
                <Select
                  name="sumber"
                  value={formData.sumber}
                  onChange={handleInputChange}
                  placeholder="Pilih sumber/tujuan"
                  required
                >
                  <option value="Pabrik">Pabrik</option>
                  <option value="Toko">Toko</option>
                  <option value="Reseller">Reseller</option>
                  <option value="Pelanggan">Pelanggan</option>
                </Select>
              </FormControl>
              <FormControl mb="20px">
                <FormLabel>Tanggal</FormLabel>
                <Input
                  name="tanggal"
                  type="date"
                  value={formData.tanggal}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <Button
                type="submit"
                bg="teal.300"
                color="white"
                w="100%"
                _hover={{ bg: "teal.200" }}
              >
                Simpan Transaksi
              </Button>
            </form>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Daftar Stok
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor} size="sm">
              <Thead>
                <Tr>
                  <Th>Produk</Th>
                  <Th>Stok Toko</Th>
                  <Th>Stok Online</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {stok.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.nama}</Td>
                    <Td>{item.stokToko}</Td>
                    <Td>{item.stokOnline}</Td>
                    <Td>
                      <Badge
                        colorScheme={getStatusColor(item.status)}
                        fontSize="xs"
                      >
                        {item.status}
                      </Badge>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Grid>

      <Card>
        <CardHeader>
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            Mutasi Stok
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr>
                <Th>Tanggal</Th>
                <Th>Produk</Th>
                <Th>Jenis</Th>
                <Th>Jumlah</Th>
                <Th>Sumber</Th>
                <Th>Keterangan</Th>
              </Tr>
            </Thead>
            <Tbody>
              {mutasiStok.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.tanggal}</Td>
                  <Td>{item.produk}</Td>
                  <Td>
                    <Badge
                      colorScheme={item.jenis === "masuk" ? "green" : "red"}
                      fontSize="xs"
                    >
                      {item.jenis}
                    </Badge>
                  </Td>
                  <Td>{item.jumlah}</Td>
                  <Td>{item.sumber}</Td>
                  <Td>{item.keterangan}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Stok;

