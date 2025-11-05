// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import React from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Conversations from "./components/Conversations";
import Header from "./components/Header";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";

function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction='column'>
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Admin Batik H.M. Akmal"}
        email={"admin@batik-hmakmal.com"}
        tabs={[
          {
            name: "RINGKASAN",
            icon: <FaCube w='100%' h='100%' />,
          },
          {
            name: "RESELLER",
            icon: <IoDocumentsSharp w='100%' h='100%' />,
          },
          {
            name: "PRODUK",
            icon: <FaPenFancy w='100%' h='100%' />,
          },
        ]}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <PlatformSettings
          title={"Pengaturan Platform"}
          subtitle1={"AKUN"}
          subtitle2={"APLIKASI"}
        />
        <ProfileInformation
          title={"Informasi Profil"}
          description={
            "Selamat datang di profil admin Batik H.M. Akmal. Kelola informasi akun dan pengaturan sistem untuk operasional penjualan dan manajemen stok batik."
          }
          name={"Admin Batik H.M. Akmal"}
          mobile={"+62 812-3456-7890"}
          email={"admin@batik-hmakmal.com"}
          location={"Indonesia"}
        />
        <Conversations title={"Pesan & Notifikasi"} />
      </Grid>
      <Projects title={"Produk Batik"} description={"Koleksi produk batik terbaru"} />
    </Flex>
  );
}

export default Profile;
