//function for converting timestamp to ISO string in order to display it in the domain detail component
export function convertTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'UTC',       
    };
    return date.toLocaleString('en-US', options);
}