import { Button, Image, Text, VStack, Box } from '@chakra-ui/react';
import React from 'react';

const Card = ({ amount, img, checkoutHandler, itemName }) => {
    return (
        <Box
            maxW="sm"
            maxH={"fit-content"}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg="white"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)' }}
            p={4}
        >
            <VStack align="start" spacing={3}>
                {/* Product Image */}
                <Image src={img} alt="Product Image" boxSize="20rem" objectFit="contain" h={"15rem"} />

                {/* Item Name */}
                <Text fontWeight="bold" fontSize="lg" isTruncated maxW="full">
                    {itemName}
                </Text>

                {/* Price */}
                <Text fontSize="xl" fontWeight="semibold" color="green.600">
                    ₹{amount}
                </Text>

                {/* Buy Now Button */}
                <Button
                    onClick={() => checkoutHandler(amount)}
                    colorScheme="yellow"
                    size="md"
                    w="full"
                    fontWeight="bold"
                >
                    Buy Now
                </Button>
            </VStack>
        </Box>
    );
};

export default Card;
