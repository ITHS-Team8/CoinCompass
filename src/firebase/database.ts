import db from '../main'
import { doc, setDoc, deleteDoc, getDocs, getDoc, collection, type DocumentData } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

export type Expense = {
    expenseId: string,
    expenseName: string,
    expenseDescription: string,
    expenseAmount: number,
    expenseCategory: string,
    createdAt: Date,
    modifiedAt: Date
}

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
export async function getExpenses() {
    const querySnapshot = await getDocs(collection(db, "expenses"));
    const querySnapshotData = querySnapshot.docs.map((doc) => doc.data());
    const expenses: Expense[] = querySnapshotData.map((doc) => {
        return {
            expenseId: doc.expenseId,
            expenseName: doc.expenseName,
            expenseDescription: doc.expenseDescription,
            expenseAmount: doc.expenseAmount,
            expenseCategory: doc.expenseCategory,
            createdAt: doc.createdAt,
            modifiedAt: doc.modifiedAt
        }
    }, []);
    return expenses;
}

/**
 * Retrieves an expense from the database.
 * @param expenseId - The ID of the expense to retrieve.
 * @returns A Promise that resolves to the expense data if it exists, or false if it doesn't.
 */
export async function getExpense(expenseId: string): Promise<boolean | DocumentData> {
    const docRef = doc(db, "expenses", expenseId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    else {
      return false;
    }
}

export async function addUserExpense(name: string, description: string, amount: number, category: string) {
    const randomUUID = crypto.randomUUID();
    const auth = getAuth();
    const userId = auth.currentUser?.uid as string;
    const userDoc = doc(db, "users", userId)
    
    await setDoc(doc(userDoc, "expenses", randomUUID), {
      expenseId: randomUUID,
      expenseName: name,
      expenseDescription: description,
      expenseAmount: amount,
      expenseCategory: category,
      createdAt: Date.now(),
      modifiedAt: Date.now()
    }, { merge: true });  
    console.log('User expense added');
}

export async function deleteUserExpense(expenseId: string) {
    const auth = getAuth();
    const userId = auth.currentUser?.uid as string;
    const userDoc = doc(db, "users", userId)

    await deleteDoc(doc(userDoc, "expenses", expenseId));
    console.log('User expense deleted');

}

export async function getUserExpenses() {
    const auth = getAuth();
    const userId = auth.currentUser?.uid as string;
  
    const querySnapshot = await getDocs(collection(db, `users/${userId}/expenses`));
      const querySnapshotData = querySnapshot.docs.map((doc) => doc.data());
      const expenses: Expense[] = querySnapshotData.map((doc) => {
          return {
              expenseId: doc.expenseId,
              expenseName: doc.expenseName,
              expenseDescription: doc.expenseDescription,
              expenseAmount: doc.expenseAmount,
              expenseCategory: doc.expenseCategory,
              createdAt: doc.createdAt,
              modifiedAt: doc.modifiedAt
          }
      }, []);
      return expenses;
}