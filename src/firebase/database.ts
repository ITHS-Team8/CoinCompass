import db from '@/firebase'
import { doc, setDoc, deleteDoc, getDocs, collection, type DocumentData } from "firebase/firestore";

/**
 * Adds an expense to the database.
 * 
 * @param name - The name of the expense.
 * @param description - The description of the expense.
 * @param amount - The amount of the expense.
 * @param category - The category of the expense.
 * @returns A promise that resolves when the expense is successfully added to the database.
 * @throws An error if there is an issue adding the document to the database.
 * 
 */
export async function addExpense(name: string, description: string, amount: number, category: string) {
    try {
        const randomUUID = crypto.randomUUID();
        await setDoc(doc(db, "expenses", randomUUID), {
            expenseId: randomUUID,
            expenseName: name,
            expenseDescription: description,
            expenseAmount: amount,
            expenseCategory: category,
            createdAt: Date.now(),
            modifiedAt: Date.now()
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

/**
 * Updates an expense in the database.
 * @param expenseId - The ID of the expense to update.
 * @param updatedName - The updated name of the expense.
 * @param updatedDescription - The updated description of the expense.
 * @param updatedAmount - The updated amount of the expense.
 * @param updatedCategory - The updated category of the expense.
 * @returns A promise that resolves when the update is successful, or rejects with an error.
 */
export async function updateExpense(expenseId: string, updatedName: string, updatedDescription: string, updatedAmount: number, updatedCategory: string) {
    try {
        await setDoc(doc(db, "expenses", expenseId), {
            expenseId: expenseId,
            expenseName: updatedName,
            expenseDescription: updatedDescription,
            expenseAmount: updatedAmount,
            expenseCategory: updatedCategory,
            modifedAt: Date.now()
        });
      } catch (e) {
        console.error("Error updating document: ", e);
    }
}

/**
 * Deletes an expense document from the database.
 * 
 * @param expenseId - The ID of the expense document to delete.
 * @returns A promise that resolves when the document is successfully deleted.
 */
export async function deleteExpense(expenseId: string) {
    try {
        await deleteDoc(doc(db, "expenses", expenseId));
    }
    catch (e) {
        console.error("Error deleting document: ", e);
    }
}

/**
 * Retrieves expenses from the Firestore database.
 * @returns A promise that resolves to an array of DocumentData representing the expenses.
 */
export async function getExpenses(): Promise<DocumentData[]> {
    const querySnapshot = await getDocs(collection(db, "expenses"));
    const expenses = Array.from(querySnapshot.docs, doc => doc.data());
    return expenses;
}