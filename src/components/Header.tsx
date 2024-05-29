import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      h="20"
      align="center"
      px="28"
      py="14"
      bg="blue.900"
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        color="blue.100"
      >
        BYTES
        <Text color="black.900" ml="0.8" as="span">
          delivery.
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW="400"
        alignSelf="center"
        color="blue.300"
        position="relative"
        bg="blue.50"
        borderRadius="full"
      >
        <Input
          color="black.700"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar por endereço"
          _placeholder={{
            color: 'gray.400',
          }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right" color="blue.100">
            <Text>Guilherme Marques</Text>
            <Text color="blue.300" fontSize="small">
              g-marques@outlook.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Guilherme Marques"
            src="https://avatars.githubusercontent.com/u/81578826?s=400&u=142a6fdef0a7a3f3d76446c53f1f086736619552&v=4"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
