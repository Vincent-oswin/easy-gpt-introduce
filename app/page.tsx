'use client'

import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      align="center"
      justify="center"
      minHeight="100vh"
      bg="black"
      color="white"
    >
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={5}>
          易用智能
        </Heading>
        <Text fontSize="xl" mb={10}>
          让每一个人都能轻松的使用 AI
        </Text>
        <Button colorScheme="white" size="lg" mb={5}>
          开始使用
        </Button>
      </Box>
    </Flex>
  )
}
