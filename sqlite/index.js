import { SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');

export const initialize = async () => {
	const createTransactionTableQuery = `CREATE TABLE IF NOT EXISTS my_transaction (
		_id INTEGER PRIMARY KEY,
		amount INTEGER,
		date TEXT,
		note TEXT,
		category TEXT,
	)`;

	// db.transaction(tx => { 
	// 	tx.executeSql(`DROP TABLE my_transaction`)
	// });

	db.transaction(tx => {
		tx.executeSql(createTransactionTableQuery);
	});
}

export const readTransactions = () => {
	return new Promise((resolve, reject) => {
		const query = `SELECT * FROM my_transaction`;
		const args = [];
		db.transaction(tx => {
			tx.executeSql(query, args, 
				(_, { rows: { _array } }) => resolve(_array), 
				(_, err) => reject(err)
			);
		})
	});
};

export const createTransaction = transaction => {
	return new Promise((resolve, reject) => {
		const query = `INSERT INTO my_transaction(amount, date, note, category) 
				VALUES(?, ?, ?, ?)`;
		const args = [transaction.amount, transaction.date, transaction.note, transaction.category];

		db.transaction(tx => {
			tx.executeSql(query, args, 
				(_, { insertId }) => resolve(true),
				(_, err) => reject(err)
			);
		})
	});
};