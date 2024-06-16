import { Box, Button, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" p={4} borderBottom="1px solid #e2e8f0">
        <Box>
          <Heading size="md">COMVIQ</Heading>
        </Box>
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Text>MOBILER</Text>
          <Text>MOBILABONNEMANG</Text>
          <Text>KONTANTKORT</Text>
          <Text>BREDBAND</Text>
          <Text>SMARTWATCH</Text>
          <Text>HJÄLP</Text>
        </HStack>
        <HStack spacing={4}>
          <FaSearch />
          <Text display={{ base: "none", md: "block" }}>SÖK</Text>
          <Text display={{ base: "none", md: "block" }}>MITT KONTO</Text>
          <Button colorScheme="pink">Tanka</Button>
        </HStack>
      </Flex>

      {/* Main Banner */}
      <Flex as="section" bg="pink.500" color="white" p={8} align="center" direction={{ base: "column", md: "row" }}>
        <VStack align="flex-start" spacing={4} flex="1">
          <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="md">
            <Text>Spara upp till 1 200 kr</Text>
          </Box>
          <Heading size="2xl">Säkra sommarsurfen</Heading>
          <Text>Skaffa stort abonnemang till litet pris! Från 195 kr/mån för 20 GB surf.</Text>
          <Button colorScheme="pink" size="lg">Skaffa nu</Button>
        </VStack>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Image src="/images/surfing.jpg" alt="Surfing" borderRadius="md" />
        </Box>
      </Flex>

      {/* Product Section */}
      <Container maxW="container.xl" py={8}>
        <Heading size="lg" mb={4}>Skaffa mobil med 5G-abonnemang</Heading>
        <Flex wrap="wrap" spacing={4} justify="space-between">
          {/* Product Card 1 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="md" mb={2}>
              <Text>Månadens mobil</Text>
            </Box>
            <Image src="/images/galaxy-s23.jpg" alt="Samsung Galaxy S23" mb={4} />
            <Text>Samsung</Text>
            <Heading size="md">Galaxy S23</Heading>
            <Text>329 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
          {/* Product Card 2 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Image src="/images/iphone-15.jpg" alt="iPhone 15" mb={4} />
            <Text>Apple</Text>
            <Heading size="md">iPhone 15</Heading>
            <Text>419 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
          {/* Product Card 3 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="md" mb={2}>
              <Text>Hörlurar på köpet</Text>
            </Box>
            <Image src="/images/galaxy-s24.jpg" alt="Samsung Galaxy S24" mb={4} />
            <Text>Samsung</Text>
            <Heading size="md">Galaxy S24</Heading>
            <Text>399 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
          {/* Product Card 4 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Image src="/images/iphone-15-pro-max.jpg" alt="iPhone 15 Pro Max" mb={4} />
            <Text>Apple</Text>
            <Heading size="md">iPhone 15 Pro Max</Heading>
            <Text>599 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;