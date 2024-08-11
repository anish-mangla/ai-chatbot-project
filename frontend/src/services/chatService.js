const sendMessage = async (message) => {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.response; // Assuming the response is in { response: "..." } format
    } catch (error) {
        console.error('Error in chat service:', error);
        throw error;
    }
};

export default {
    sendMessage,
};
