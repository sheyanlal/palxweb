export async function getAllTransactions() {

    const response = await fetch('/api/transactions');
    return await response.json();
}