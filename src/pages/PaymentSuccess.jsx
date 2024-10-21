import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import { useSearchParams, useNavigate, Link } from "react-router-dom"
import Navbar from '../common-components/Navbar.jsx'

const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0]
    const referenceNum = searchQuery.get("reference")

    const orderId = searchQuery.get("orderId");
    const navigate = useNavigate();
    console.log("PaymentSucess: ", orderId)

    const handleTrackOrder = () => {
        navigate(`/track-order?orderId=${orderId}`)
    }
    return (

        <Box>
            <Navbar />
            <VStack h="100vh" justifyContent={"center"}>
                <Heading textTransform={"uppercase"}>Order Successfull
                </Heading>
                <Link to="/store">
                    <Button>Home</Button>
                </Link>
                <Text>
                    Reference Number: {referenceNum}
                </Text>
                {orderId && (
                    <Button onClick={handleTrackOrder} colorScheme='teal' mt={4}> Track Your Order</Button>
                )}
            </VStack>
        </Box>
    )
}

export default PaymentSuccess