import { API_BASE_URL } from "../api-config";

export function call(api, method, request) {
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
        method: method,
        body: request ? JSON.stringify(request) : undefined,
        credentials: 'include', // Add this line
    };

    return fetch(`${API_BASE_URL}${api}`, options).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    });
}

export default call;