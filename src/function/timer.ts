function countdownToSaleEnd(saleEndTime: string): any {
    // Parse saleEndTime to get milliseconds
    const endTime = new Date(saleEndTime).getTime();

    if (isNaN(endTime)) {
        return "Invalid Date";
    }

    // Update the countdown every second
    // Get current time
    const now = new Date().getTime();

    // Calculate remaining time
    let distance = endTime - now;

    // Check if the sale has ended
    if (distance <= 0) {
        return "Sale Ended";
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Return formatted countdown string
    return `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export { countdownToSaleEnd };