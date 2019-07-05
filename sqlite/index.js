import { SQLite } from 'expo';

let db = SQLite.openDatabase('db.db');

export const initialize = async () => {
	const foodQuery = `INSERT INTO category 
		VALUES('Food', 'expense', '#FF0000', 'MaterialCommunityIcons', 'silverware-fork-knife')`;

	const groceryQuery = `INSERT INTO category 
		VALUES('Groceries', 'expense', '#FFC600', 'MaterialIcons', 'shopping-cart')`;

	// db.transaction(tx => { 
		// tx.executeSql(`DROP TABLE my_transaction`)
		// tx.executeSql(`DROP TABLE category`)
	// });

	const [createCategoryTablePromise, createTransactionTablePromise] = 
			await Promise.all([createCategoryTable(), createTransactionTable()])

	const categories = await readCategories();

	if(categories.length === 0) {
		if(createCategoryTablePromise && createTransactionTablePromise) {
			const insertDefaultCategoriesPromise = await insertDefaultCategories();
			return insertDefaultCategoriesPromise;
		} else {
			return false
		}
	} else {
		return true
	}
}

const createCategoryTable = () => {
	return new Promise((resolve, reject) => {
		const createCategoryTableQuery = `
			CREATE TABLE IF NOT EXISTS category (
				id TEXT PRIMARY KEY,
				type TEXT,
				color TEXT,
				icon_family TEXT,
				icon_name TEXT 
			)`;

		db.transaction(tx => {
			tx.executeSql(createCategoryTableQuery, [],
				() => { console.log('created Category table'); resolve(true) },
				(_, err) => { console.log(error); reject(false) })
		});
	});
};

const createTransactionTable = () => {
	return new Promise((resolve ,reject) => {
		const createTransactionTableQuery = `
			CREATE TABLE IF NOT EXISTS my_transaction (
				id INTEGER PRIMARY KEY,
				amount INTEGER,
				date TEXT,
				note TEXT,
				category_id TEXT REFERENCES category(id)
			)`;
		db.transaction(tx => {
			tx.executeSql(createTransactionTableQuery, [], 
				() => { console.log('created Transaction table'); resolve(true) },
				(_, err) => { console.log(error); reject(false) })
		});
	});
};

const insertDefaultCategories = () => {
	const categories = 
	[
		{
			id: 'Food',
			type: 'expense',
			color: '#FF0000',
			iconFamily: 'MaterialCommunityIcons',
			iconName: 'silverware-fork-knife'
		},
		{
			id: 'Groceries',
			type: 'expense',
			color: '#FFC600',
			iconFamily: 'MaterialIcons',
			iconName: 'shopping-cart'
		},
	];

	const promises = categories.map(category => createCategory(category));

	return Promise.all(promises).then(values => !values.some(curr => curr === false));
};

export const readCategories = () => {
	return new Promise((resolve, reject) => {
		const query = `SELECT * FROM category`;
		const args = [];
		db.transaction(tx => {
			tx.executeSql(query, args, 
				(_, { rows: { _array } }) => resolve(_array), 
				(_, err) => reject(new Error(err))
			);
		})
	});
}

export const readTransactions = () => {
	return new Promise((resolve, reject) => {
		const query = `
			SELECT t.id, t.amount, t.date, t.note, t.category_id, c.type, c.color, c.icon_family, c.icon_name  
			FROM my_transaction t INNER JOIN category c ON t.category_id = c.id
			ORDER BY t.date DESC`;
		const args = [];
		db.transaction(tx => {
			tx.executeSql(query, args, 
					(_, { rows: { _array } }) => resolve(_array), 
					(_, err) => reject(new Error(err))
			);
		})
	});
};

export const createCategory = ({ id, type, color, iconFamily, iconName }) => {
	return new Promise((resolve, reject) => {
		const query = `INSERT INTO category(id, type, color, icon_family, icon_name)
				VALUES(?, ?, ?, ?, ?)`;
		const args = [id, type, color, iconFamily, iconName];
		db.transaction(tx => {
			tx.executeSql(query, args, 
					(_, { insertId }) => { console.log(`created category ${ id }`); resolve(true) },
					(_, err) => { console.log(err); reject(false) });
		})
	});
};

export const createTransaction = ({ amount, date, note, categoryId }) => {
	return new Promise((resolve, reject) => {
		const query = `INSERT INTO my_transaction(amount, date, note, category_id) 
				VALUES(?, ?, ?, ?)`;
		const args = [amount, date, note, categoryId];

		db.transaction(tx => {
			tx.executeSql(query, args, 
					(_, { insertId }) => { console.log(`created Transaction ${ amount }, ${ categoryId }`); resolve(true) },
					(_, err) => reject(false));
		})
	});
};

export const updateTransaction = ({ id, amount, date, note, categoryId }) => {
	return new Promise((resolve, reject) => {
		const query = `
				UPDATE my_transaction
				SET amount=?, date=?, note=?, category_id=?
				WHERE id=?`;
		const args = [amount, date, note, categoryId, id];

		db.transaction(tx => {
			tx.executeSql(query, args,
					(_, { rowsAffected }) => { console.log(`updated Transaction ${ id }`); resolve(true) },
					(_, err) => reject(new Error(err)));
		})
	});
};