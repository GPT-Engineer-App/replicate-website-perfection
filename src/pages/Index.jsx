import { Box, Button, Container, Flex, Heading, HStack, Image, Text, VStack, Link, SimpleGrid } from "@chakra-ui/react";
import { FaHeart, FaMobileAlt, FaQuestionCircle, FaUser, FaInfoCircle } from "react-icons/fa";
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
            <Image src="https://images.ctfassets.net/iidtcybzv1rq/58Zgx0Drz91ZP6AlboJnss/4033db5107fcb6d5f9a48eca19ad493a/Samsung-Galaxy-S23-Green-IQ---front_V2.png?fm=avif&w=100&q=80" alt="Samsung Galaxy S23" mb={4} />
            <Text>Samsung</Text>
            <Heading size="md">Galaxy S23</Heading>
            <Text>329 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
          {/* Product Card 2 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Image src="https://images.ctfassets.net/iidtcybzv1rq/21p8XKQHZk5NtYa83t7jO0/6802dd0c6c8a515bdc5abdd9815c1b8f/iPhone-15-Blue-IQ---front.png?fm=avif&w=100&q=80" alt="iPhone 15" mb={4} />
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
            <Image src="https://images.ctfassets.net/iidtcybzv1rq/dIEBDRblvKIfkJWgfn2Ij/78323537b25f16d21eba6e1b47e7d9a9/Samsung_Galaxy_S24_OnyxBlack_Buds2Pro_Bundle.png?fm=avif&w=100&q=80" alt="Samsung Galaxy S24" mb={4} />
            <Text>Samsung</Text>
            <Heading size="md">Galaxy S24</Heading>
            <Text>399 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
          {/* Product Card 4 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Image src="https://images.ctfassets.net/iidtcybzv1rq/41LYwSSGmpWJirA8blpxAF/2db56d3c4a9bf05175c8db34fa25c235/iPhone-15-Pro-Max-Naturligt-Titan-IQ---front.png?fm=avif&w=100&q=80" alt="iPhone 15 Pro Max" mb={4} />
            <Text>Apple</Text>
            <Heading size="md">iPhone 15 Pro Max</Heading>
            <Text>599 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
        </Flex>
      </Container>

      {/* New Scroll Elements */}
      <Container maxW="container.xl" py={8}>
        <Heading size="lg" mb={4}>Skaffa mobilabonnemang</Heading>
        <Flex wrap="wrap" spacing={4} justify="space-between">
          <Text>Ingen bindningstid</Text>
          <Text>Alltid billigt</Text>
          <Text>Grym täckning</Text>
        </Flex>
        <Flex wrap="wrap" spacing={4} justify="space-between">
          {/* Product Card 1 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="md" mb={2}>
              <Text>Spara 1200 kr</Text>
            </Box>
            <Text>100 GB</Text>
            <Text>295 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
          {/* Product Card 2 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="md" mb={2}>
              <Text>Spara 840 kr</Text>
            </Box>
            <Text>40 GB</Text>
            <Text>225 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
          {/* Product Card 3 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="md" mb={2}>
              <Text>Spara 360 kr</Text>
            </Box>
            <Text>20 GB</Text>
            <Text>195 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
          {/* Product Card 4 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Text>6 GB</Text>
            <Text>145 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
        </Flex>
        <Button variant="outline" colorScheme="pink" mt={4}>Se alla våra mobiler</Button>
      </Container>

      {/* Move "Se våra mobilabonnemang" button up */}
      <Container maxW="container.xl" py={8}>
        <Button variant="outline" colorScheme="pink" mt={4}>Se våra mobilabonnemang</Button>
      </Container>

      {/* Skaffa bredbandsabonnemang Section */}
      <Container maxW="container.xl" py={8}>
        <Heading size="lg" mb={4}>Skaffa bredbandsabonnemang</Heading>
        <Flex wrap="wrap" spacing={4} justify="space-between">
          <Text>Obegränsad surf</Text>
          <Text>Enkelt att komma igång</Text>
          <Text>Utan startavgifter</Text>
        </Flex>
        <Flex wrap="wrap" spacing={4} justify="space-between">
          {/* Product Card 1 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="md" mb={2}>
              <Text>Router ingår</Text>
            </Box>
            <Text>Obegränsad surf</Text>
            <Text>299 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
          {/* Product Card 2 */}
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} flex="1" maxW={{ base: "100%", md: "sm" }} m={2}>
            <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="md" mb={2}>
              <Text>Rabatt 1 år</Text>
            </Box>
            <Text>Obegränsad surf</Text>
            <Text>349 kr/mån</Text>
            <Button colorScheme="pink" mt={4}>Beställ</Button>
          </Box>
        </Flex>
      </Container>

      {/* Nyheter och erbjudanden Section */}
      <Container maxW="container.xl" py={8}>
        <Heading size="lg" mb={4}>Nyheter och erbjudanden</Heading>
        <Flex wrap="wrap" spacing={4} justify="space-between">
          {/* News Card 1 */}
          <Box position="relative" borderWidth="1px" borderRadius="md" overflow="hidden" p={0} flex="1" maxW="100%" m={2}>
            <Image src="//images.ctfassets.net/iidtcybzv1rq/4IxPJdhVltxkgJi2xe6uYd/808e8ba0c586dc295dcd8a2559b1a955/comviq-familj-1920x1900.png" alt="Familjeabonnemang" />
            <Box position="absolute" bottom="0" left="0" p={4} bg="rgba(0, 0, 0, 0.5)" color="white" width="100%">
              <Heading size="md">Familjeabonnemang! 40 GB surf var.</Heading>
              <Button colorScheme="pink" mt={4} as="a" href="/mobilabonnemang/familj">Läs mer</Button>
            </Box>
          </Box>
          <Flex flex="1" maxW="100%" wrap="wrap">
            {/* News Card 2 */}
            <Box position="relative" borderWidth="1px" borderRadius="md" overflow="hidden" p={0} flex="1" maxW={{ base: "100%", md: "50%" }} m={2}>
              <Image src="//images.ctfassets.net/iidtcybzv1rq/5CHKLpAEb0SNlI0AtfdIJH/abba68b9441c05227153935d6f7247b2/comviq-trasig-mobil-16.9_1920x1080.png" alt="Byt in din gamla mobil" />
              <Box position="absolute" bottom="0" left="0" p={4} bg="rgba(0, 0, 0, 0.5)" color="white" width="100%">
                <Heading size="md">Byt in din gamla mobil och få rabatt.</Heading>
                <Button colorScheme="pink" mt={4} as="a" href="/mobiler/byt-in">Läs mer</Button>
              </Box>
            </Box>
            {/* News Card 3 */}
            <Box position="relative" borderWidth="1px" borderRadius="md" overflow="hidden" p={0} flex="1" maxW={{ base: "100%", md: "50%" }} m={2}>
              <Image src="//images.ctfassets.net/iidtcybzv1rq/4uWBoHOHEaZfUTGMx0Tt4i/8b7c621c9b968cdb870aa4f0771fce48/Comviq-karim-vid-kiosk-16.9-1920x1080.png" alt="Nyheter och schyssta deals" />
              <Box position="absolute" bottom="0" left="0" p={4} bg="rgba(0, 0, 0, 0.5)" color="white" width="100%">
                <Heading size="md">Nyheter och schyssta deals</Heading>
                <Button colorScheme="pink" mt={4} as="a" href="/erbjudanden">Läs mer</Button>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="black" color="white" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="flex-start">
            <Box>
              <Heading size="lg" mb={2}>Ladda ner vår app!</Heading>
              <Text mb={4}>Du vet väl om att du kan göra det mesta i vår app? Betala dina fakturor, tanka på ditt kontantkort och mycket mer.</Text>
              <HStack spacing={4}>
                <Button as="a" href="https://apps.apple.com/se/app/comviq/id123456789" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/app-store-badge.svg" alt="App Store" />
                </Button>
                <Button as="a" href="https://play.google.com/store/apps/details?id=com.comviq" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/google-play-badge.svg" alt="Google Play" />
                </Button>
              </HStack>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 5 }} spacing={8} w="full">
              <Box>
                <Heading size="sm" mb={4}><FaHeart /> Populära sidor</Heading>
                <VStack align="flex-start">
                  <Link href="#">Familjeabonnemang</Link>
                  <Link href="#">Studentabonnemang</Link>
                  <Link href="#">Seniorabonnemang</Link>
                  <Link href="#">eSIM</Link>
                  <Link href="#">5G hos Comviq</Link>
                  <Link href="#">Surf</Link>
                  <Link href="#">Byt in din gamla mobil</Link>
                </VStack>
              </Box>
              <Box>
                <Heading size="sm" mb={4}><FaMobileAlt /> Varumärken</Heading>
                <VStack align="flex-start">
                  <Link href="#">Apple iPhone</Link>
                  <Link href="#">Apple Watch</Link>
                  <Link href="#">Samsung Galaxy</Link>
                  <Link href="#">Samsung Galaxy Watch</Link>
                  <Link href="#">Google Pixel</Link>
                  <Link href="#">Xiaomi</Link>
                  <Link href="#">OnePlus</Link>
                  <Link href="#">Sony Xperia</Link>
                  <Link href="#">Motorola</Link>
                </VStack>
              </Box>
              <Box>
                <Heading size="sm" mb={4}><FaQuestionCircle /> Hjälp</Heading>
                <VStack align="flex-start">
                  <Link href="#">Till hjälp</Link>
                  <Link href="#">Spåra din beställning</Link>
                  <Link href="#">Driftinformation</Link>
                  <Link href="#">Utland</Link>
                  <Link href="#">Registrera kontantkort</Link>
                </VStack>
              </Box>
              <Box>
                <Heading size="sm" mb={4}><FaUser /> Mitt Konto</Heading>
                <VStack align="flex-start">
                  <Link href="#">Logga in</Link>
                  <Link href="#">App till iOS</Link>
                  <Link href="#">App till Android</Link>
                  <Link href="#">Smarta tips i appen</Link>
                </VStack>
              </Box>
              <Box>
                <Heading size="sm" mb={4}><FaInfoCircle /> Om Comviq</Heading>
                <VStack align="flex-start">
                  <Link href="#">Comviqs historia</Link>
                  <Link href="#">Jobba på Comviq</Link>
                  <Link href="#">Kontakta oss</Link>
                  <Link href="#">Se täckningskarta</Link>
                  <Link href="#">Press</Link>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
        <Box bg="gray.800" py={4}>
          <Container maxW="container.xl">
            <HStack spacing={8} justify="center">
              <Link href="#">Cookies</Link>
              <Link href="#">Inställningar</Link>
              <Link href="#">Säkerhet på nätet</Link>
            </HStack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;