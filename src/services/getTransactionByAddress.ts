export const getTransactionByAddress = async (address: string) => {
  if (!address) return;
  const response = await fetch(
    `https://devnet-api.multiversx.com/accounts/${address}/transactions?size=10`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.json();

  console.log('what transactions ', data);
  return data.result;
};
