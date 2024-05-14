import Arweave from 'arweave';
export async function uploadData(metadata: any, isImage: boolean) {
  try {
    const arweave = Arweave.init({
      host: 'arweave.net',
      port: 443,
      protocol: 'https',
      timeout: 20000,
      logging: false,
    });
    const wallet = JSON.parse(process.env.NEXT_PUBLIC_ARWEAVE_KEY!);
    const metadataRequest = JSON.stringify(metadata);
    const metadataTransaction = await arweave.createTransaction({
      data: isImage ? metadata : metadataRequest,
    });

    if (isImage) {
      metadataTransaction.addTag('Contet-Type', 'image/png');
    }
    await arweave.transactions.sign(metadataTransaction, wallet);

    await arweave.transactions.post(metadataTransaction);

    const metadataUrl = 'https://arweave.net/' + metadataTransaction.id;

    return { arweave_id: metadataUrl };
  } catch (error) {
    console.log(error);
    return { error: error };
  }
}
