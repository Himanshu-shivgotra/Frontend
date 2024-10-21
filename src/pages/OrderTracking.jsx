import { useState, useEffect } from "react";
import axios from "axios";

const orderStatuses = [
    "Order Placed",
    "Order Transit",
    "Out for Delivery",
    "Delivered",
];

const OrderTracking = () => {
    const [orderId, setOrderId] = useState("");
    const [orderDetails, setOrderDetails] = useState(null);
    const [orders, setOrders] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.get("http://localhost:1000/api/orders");
                if (data.success) {
                    setOrders(data.orders);
                }
            } catch (err) {
                console.error("Failed to fetch orders:", err);
            }
        };

        fetchOrders();
    }, []);

    const trackOrder = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:1000/api/orders/track/${orderId}`
            );
            setOrderDetails(data.order);
            setError("");
        } catch (err) {
            setError("Order not found", err);
            setOrderDetails(null);
        }
    };

    const handleNextStatus = async () => {
        if (!orderDetails || !selectedOrderId) return;

        const currentStatusIndex = orderStatuses.indexOf(orderDetails.status);
        if (currentStatusIndex < orderStatuses.length - 1) {
            const nextStatus = orderStatuses[currentStatusIndex + 1];
            try {
                const { data } = await axios.put(
                    `http://localhost:1000/api/orders/update/${selectedOrderId}`,
                    { status: nextStatus }
                );
                setOrderDetails(data.order);
            } catch (error) {
                console.error("Error updating status:", error);
            }
        }
    };

    const handleOrderSelect = (e) => {
        const selectedId = e.target.value;
        setSelectedOrderId(selectedId);
        setOrderId(selectedId);

        if (selectedId) {
            const fetchSelectedOrder = async () => {
                try {
                    const { data } = await axios.get(
                        `http://localhost:1000/api/orders/track/${selectedId}`
                    );
                    setOrderDetails(data.order);
                } catch (err) {
                    setError("Order not found", err);
                    setOrderDetails(null);
                }
            };

            fetchSelectedOrder();
        } else {
            setOrderDetails(null);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Track Your Order</h1>

            {/* Dropdown for selecting orders */}
            <select
                value={selectedOrderId}
                onChange={handleOrderSelect}
                className="border p-2 rounded mb-4"
            >
                <option value="">Select an order</option>
                {/* Filter out delivered orders */}
                {orders
                    .filter((order) => order.status !== "Delivered") // Exclude delivered orders
                    .map((order) => (
                        <option
                            key={order.razorpay_order_id}
                            value={order.razorpay_order_id}
                        >
                            {order.razorpay_order_id}
                        </option>
                    ))}
            </select>

            {/* Track order input */}
            <input
                type="text"
                placeholder="Or enter Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="border p-2 rounded mr-2"
            />
            <button
                onClick={trackOrder}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Track Order
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {orderDetails && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">
                        Order Status: {orderDetails.status}
                    </h2>

                    {/* Stepper */}
                    <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base mt-4">
                        {orderStatuses.map((status, index) => (
                            <li
                                key={index}
                                className={`flex w-full relative ${index < orderStatuses.length - 1
                                        ? 'after:content-[""] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4'
                                        : ""
                                    }`}
                            >
                                <div className="block whitespace-nowrap z-10">
                                    <span
                                        className={`w-6 h-6 ${index <= orderStatuses.indexOf(orderDetails.status)
                                                ? "bg-indigo-600 border-2 border-transparent text-white"
                                                : "bg-gray-50 border-2 border-gray-200 text-gray-900"
                                            } rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10`}
                                    >
                                        {index + 1}
                                    </span>
                                    <span
                                        className={`block text-sm ${index <= orderStatuses.indexOf(orderDetails.status)
                                                ? "text-indigo-600"
                                                : "text-gray-500"
                                            }`}
                                    >
                                        {status}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ol>

                    {/* Show Next Status button only if order isn't delivered */}
                    {orderDetails.status !== "Delivered" && (
                        <button
                            onClick={handleNextStatus}
                            className="mt-4 bg-green-500 text-white p-2 rounded"
                        >
                            Next Status
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default OrderTracking;
