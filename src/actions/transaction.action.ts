// 'use server';

// import { ID, Query } from 'node-appwrite';
// import { createAdminClient } from '~/lib/appwrite';
// import { parseStringify } from '~/lib/utils';

// const {
//   APPWRITE_DATABASE_ID: DATABASE_ID,
//   APPWRITE_TRANSACTION_COLLECTION_ID:
//     TRANSACTION_COLLECTION_ID,
// } = process.env;

// export async function createTransaction(
//   transaction: CreateTransactionProps,
// ) {
//   try {
//     const { database } = await createAdminClient();

//     const newTransaction = await database.createDocument(
//       DATABASE_ID!,
//       TRANSACTION_COLLECTION_ID!,
//       ID.unique(),
//       {
//         channel: 'online',
//         category: 'Transfer',
//         ...transaction,
//       },
//     );

//     return parseStringify(newTransaction);
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getTransactionsByBankId({
//   bankId,
// }: getTransactionsByBankIdProps) {
//   console.log('bank id', bankId);
//   try {
//     const { database } = await createAdminClient();

//     const senderTransactions = await database.listDocuments(
//       DATABASE_ID!,
//       TRANSACTION_COLLECTION_ID!,
//       [Query.equal('senderBankId', bankId)],
//     );
//     console.log('sender transaction', senderTransactions);

//     const receiverTransactions =
//       await database.listDocuments(
//         DATABASE_ID!,
//         TRANSACTION_COLLECTION_ID!,
//         [Query.equal('receiverBankId', bankId)],
//       );
//     console.log(
//       'receiver transaction',
//       receiverTransactions,
//     );

//     const transactions = {
//       total:
//         senderTransactions.total +
//         receiverTransactions.total,
//       documents: [
//         ...senderTransactions.documents,
//         ...receiverTransactions.documents,
//       ],
//     };

//     return parseStringify(transactions);
//   } catch (error) {
//     console.log(error);
//   }
// }
