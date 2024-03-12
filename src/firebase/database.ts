import db from '../main';
import {
	doc,
	setDoc,
	deleteDoc,
	getDocs,
	getDoc,
	collection,
	type DocumentData,
} from 'firebase/firestore';
import {
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
} from 'firebase/auth';

export type Expense = {
	expenseId: string;
	expenseName: string;
	expenseDescription: string;
	expenseAmount: number;
	expenseCategory: string;
	createdAt: Date;
	modifiedAt: Date;
};

/**
 * Adds a budget to the user's budgets in the database.
 *
 * @param budgetName - The name of the budget.
 * @param categories - The categories and their respective amounts within the budget.
 * @returns A promise that resolves when the budget is successfully added to the user's budgets.
 */
export async function addUserBudget(
	userId: string,
	budgetName: string,
	categories: Array<{ name: string; amount: number }>
) {
	try {
			const budgetId = crypto.randomUUID();
			const userDoc = doc(db, 'users', userId);

			await setDoc(doc(userDoc, 'budgets', budgetId), {
					budgetId: budgetId,
					budgetName: budgetName,
					categories: categories,
					createdAt: Date.now(),
					modifiedAt: Date.now(),
			});

			console.log('User budget added');
	} catch (e) {
			console.error('Error adding budget: ', e);
	}
}


export type User = {
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
	gender: string;
};

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
export async function addExpense(
	name: string,
	description: string,
	amount: number,
	category: string
) {
	try {
		const randomUUID = crypto.randomUUID();
		await setDoc(doc(db, 'expenses', randomUUID), {
			expenseId: randomUUID,
			expenseName: name,
			expenseDescription: description,
			expenseAmount: amount,
			expenseCategory: category,
			createdAt: Date.now(),
			modifiedAt: Date.now(),
		});
	} catch (e) {
		console.error('Error adding document: ', e);
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
export async function updateExpense(
	expenseId: string,
	updatedName: string,
	updatedDescription: string,
	updatedAmount: number,
	updatedCategory: string
) {
	try {
		await setDoc(doc(db, 'expenses', expenseId), {
			expenseId: expenseId,
			expenseName: updatedName,
			expenseDescription: updatedDescription,
			expenseAmount: updatedAmount,
			expenseCategory: updatedCategory,
			modifedAt: Date.now(),
		});
	} catch (e) {
		console.error('Error updating document: ', e);
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
		await deleteDoc(doc(db, 'expenses', expenseId));
	} catch (e) {
		console.error('Error deleting document: ', e);
	}
}

/**
 * Retrieves expenses from the Firestore database.
 * @returns A promise that resolves to an array of DocumentData representing the expenses.
 */
export async function getExpenses() {
	const querySnapshot = await getDocs(collection(db, 'expenses'));
	const querySnapshotData = querySnapshot.docs.map((doc) => doc.data());
	const expenses: Expense[] = querySnapshotData.map((doc) => {
		return {
			expenseId: doc.expenseId,
			expenseName: doc.expenseName,
			expenseDescription: doc.expenseDescription,
			expenseAmount: doc.expenseAmount,
			expenseCategory: doc.expenseCategory,
			createdAt: doc.createdAt,
			modifiedAt: doc.modifiedAt,
		};
	}, []);
	return expenses;
}

/**
 * Retrieves an expense from the database.
 * @param expenseId - The ID of the expense to retrieve.
 * @returns A Promise that resolves to the expense data if it exists, or false if it doesn't.
 */
export async function getExpense(
	expenseId: string
): Promise<boolean | DocumentData> {
	const docRef = doc(db, 'expenses', expenseId);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		return false;
	}
}

/**
 * Adds an expense to the user's expenses in the database.
 *
 * @param name - The name of the expense.
 * @param description - The description of the expense.
 * @param amount - The amount of the expense.
 * @param category - The category of the expense.
 * @param expenseDate - The date of the expense.
 * @returns A promise that resolves when the expense is successfully added to the user's expenses.
 */
export async function addUserExpense(
	name: string,
	description: string,
	amount: number,
	category: string,
	expenseDate: Date
) {
	const randomUUID = crypto.randomUUID();
	const auth = getAuth();
	const userId = auth.currentUser?.uid as string;
	const userDoc = doc(db, 'users', userId);

	await setDoc(
		doc(userDoc, 'expenses', randomUUID),
		{
			expenseId: randomUUID,
			expenseName: name,
			expenseDescription: description,
			expenseAmount: amount,
			expenseCategory: category,
			createdAt: expenseDate,
			modifiedAt: Date.now(),
		},
		{ merge: true }
	);
	console.log('User expense added');
}

/**
 * Deletes a user's expense document from the database.
 *
 * @param expenseId - The ID of the expense document to delete.
 * @returns A promise that resolves when the document is successfully deleted.
 */
export async function deleteUserExpense(expenseId: string) {
	const auth = getAuth();
	const userId = auth.currentUser?.uid as string;
	const userDoc = doc(db, 'users', userId);

	await deleteDoc(doc(userDoc, 'expenses', expenseId));
}

/**
 * Retrieves the user's expenses from the Firestore database.
 * @returns A promise that resolves to an array of DocumentData representing the user's expenses.
 */
export async function getUserExpenses() {
	const auth = getAuth();
	const userId = auth.currentUser?.uid as string;

	const querySnapshot = await getDocs(
		collection(db, `users/${userId}/expenses`)
	);
	const querySnapshotData = querySnapshot.docs.map((doc) => doc.data());
	const expenses: Expense[] = querySnapshotData.map((doc) => {
		return {
			expenseId: doc.expenseId,
			expenseName: doc.expenseName,
			expenseDescription: doc.expenseDescription,
			expenseAmount: doc.expenseAmount,
			expenseCategory: doc.expenseCategory,
			createdAt: doc.createdAt,
			modifiedAt: doc.modifiedAt,
		};
	}, []);
	return expenses;
}

/**
 * Retrieves the user's details from the Firestore database.
 * @returns A Promise that resolves to the user's data.
 */
export async function getUserDetails(): Promise<DocumentData> {
	const auth = getAuth();
	const userId = auth.currentUser?.uid;
	const userDocRef = doc(db, `users/${userId}`);
	const userDoc = await getDoc(userDocRef);
	const userData = userDoc.data() as DocumentData;
	return userData;
}

/**
 * Signs up a user and adds their details to the database.
 *
 * @param email - The email of the user.
 * @param username - The username of the user.
 * @param firstName - The first name of the user.
 * @param lastName - The last name of the user.
 * @param dateOfBirth - The date of birth of the user.
 * @param gender - The gender of the user.
 * @param password - The password of the user.
 * @param confirmPassword - The confirmation password of the user.
 * @returns A promise that resolves when the user is successfully signed up and their details are added to the database.
 */
export async function signUpUser(
	email: string,
	username: string,
	firstName: string,
	lastName: string,
	dateOfBirth: Date,
	gender: string,
	password: string,
	confirmPassword: string
) {
	const auth = getAuth();
	if (password !== confirmPassword) {
		console.error('Passwords do not match');
		return;
	} else {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await updateProfile(userCredential.user, {
				displayName: username,
				photoURL: 'https://placehold.co/250.png',
			});

			const userDoc = doc(db, `users/${userCredential.user.uid}`);
			await setDoc(userDoc, {
				email: email,
				username: username,
				firstName: firstName,
				lastName: lastName,
				dateOfBirth: dateOfBirth,
				gender: gender,
			});
			//await sendEmailVerification(userCredential.user);
			console.log('User signed up');
		} catch (error) {
			console.log(error);
		}
	}
}
