import db from '@/firebase'
import { doc, setDoc } from "firebase/firestore";

export async function addExpense(name: string, description: string, amount: number, category: string) {
    try {
        const randomUUID = crypto.randomUUID();
        await setDoc(doc(db, "expenses", randomUUID), {
            expenseId: randomUUID,
            expenseName: name,
            expenseDescription: description,
            expenseAmount: amount,
            expenseCategory: category,
            createdAt: Date.now()
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}