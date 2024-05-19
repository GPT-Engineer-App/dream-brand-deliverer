import { useState } from "react";
import { Container, Box, VStack, HStack, Text, Button, Image, IconButton, Flex, Grid, GridItem, Circle, useDisclosure, Collapse } from "@chakra-ui/react";
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaElementor } from "react-icons/fa";

const Index = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [servicesVisible, setServicesVisible] = useState(false);

  const handleArrowClick = () => {
    setServicesVisible(true);
    onToggle();
  };

  return (
    <Container maxW="container.xl" p={4}>
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb={8}>
        <VStack align="start" spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">
            Welcome to My Portfolio
          </Text>
          <HStack spacing={4}>
            <Button colorScheme="teal" onClick={() => (window.location.href = "#hire-me")}>
              Hire Me
            </Button>
            <Button colorScheme="teal" variant="outline" onClick={() => (window.location.href = "#contact")}>
              Contact Me
            </Button>
          </HStack>
        </VStack>
        <Box position="relative" w="300px" h="300px">
          <Image src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdGFuZGluZyUyMGFuZCUyMGxvb2tpbmclMjB1cCUyMHdpdGglMjBoYW5kJTIwb24lMjBjaGlufGVufDB8fHx8MTcxNjE1NzA2Mnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" />
          <Circle position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" size="300px" border="2px solid teal" animation="spin 20s linear infinite">
            <IconButton aria-label="HTML5" icon={<FaHtml5 />} size="lg" position="absolute" top="10%" left="50%" transform="translate(-50%, -50%)" />
            <IconButton aria-label="CSS3" icon={<FaCss3Alt />} size="lg" position="absolute" top="50%" left="10%" transform="translate(-50%, -50%)" />
            <IconButton aria-label="JavaScript" icon={<FaJs />} size="lg" position="absolute" top="90%" left="50%" transform="translate(-50%, -50%)" />
            <IconButton aria-label="WordPress" icon={<FaWordpress />} size="lg" position="absolute" top="50%" left="90%" transform="translate(-50%, -50%)" />
            <IconButton aria-label="Elementor" icon={<FaElementor />} size="lg" position="absolute" top="10%" left="10%" transform="translate(-50%, -50%)" />
          </Circle>
        </Box>
      </Flex>

      {/* Services Section */}
      <VStack spacing={4} align="center" mb={8}>
        <Text fontSize="3xl" fontWeight="bold">
          Services
        </Text>
        <Text fontSize="lg" textAlign="center">
          I'm here to deliver your dream brand and bring your vision to life.
        </Text>
        <HStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTYxNTY4Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="md" />
          <Image src="https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDB8fHx8MTcxNjE1Njg4MHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="md" />
          <Image src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3MTYxNTY4ODF8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="md" />
          <Image src="https://images.unsplash.com/photo-1504691342899-4d92b50853e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwd3JpdGluZ3xlbnwwfHx8fDE3MTYxNTcwNjh8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="md" />
        </HStack>
        <Circle size="50px" bg="teal" color="white" onClick={handleArrowClick} cursor="pointer" animation="vibrate 1s infinite">
          <Text fontSize="2xl">↓</Text>
        </Circle>
      </VStack>

      <Collapse in={isOpen} animateOpacity>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTYxNTY4Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="md" />
            <Text mt={2}>Web development is an essential resource which one can't ignore. With web development the plugins and functionalities it gives the client ability to know how website should interact and behave together with other elements.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxncmFwaGljJTIwZGVzaWdufGVufDB8fHx8MTcxNjE1Njg4MHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="md" />
            <Text mt={2}>Welcome to the Graphic Design Services section of my portfolio. Here, I specialize in transforming your vision into stunning visual experiences. I'm dedicated to crafting designs that not only capture the essence of your brand but also engage and inspire your audience.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3MTYxNTY4ODF8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="md" />
            <Text mt={2}>I'm dedicated to developing high-quality software solutions that meet the diverse needs of our clients. We combine technical expertise with a creative approach to solve complex problems and deliver efficient, effective results.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxjb250ZW50JTIwd3JpdGluZ3xlbnwwfHx8fDE3MTYxNTcwNjh8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="md" />
            <Text mt={2}>I'm specialized in creating compelling, high-quality written content tailored to your audience and business objectives. I understand the power of words and strive to use them to tell your story in the most engaging and effective way possible.</Text>
          </GridItem>
        </Grid>
      </Collapse>
    </Container>
  );
};

export default Index;
