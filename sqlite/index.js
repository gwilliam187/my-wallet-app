import { SQLite } from 'expo';

import { setCategories } from '../redux/actions/categoryActions';

const db = SQLite.openDatabase('db.db');

export const initialize = async () => {
	const createCategoryTableQuery = `CREATE TABLE IF NOT EXISTS category 
			(_id text primary key, color text, icon_name text, icon_family text)`;

	// db.transaction(tx => { tx.executeSql(`DROP TABLE category`) })
	db.transaction(tx => {
		tx.executeSql(createCategoryTableQuery);
	});

	// const query = `INSERT INTO category VALUES('food', '#FF0000', 
	// 		'silverware-fork-knife', 'MaterialCommunityIcons')`;
	// db.transaction(tx => {
	// 	tx.executeSql(query, [], (_, { rows }) => {
	// 		console.log(rows)
	// 	}, (_, err) => { console.log(err) })
	// })
}

export const readCategories = () => {
	return new Promise((resolve, reject) => {
		const query = `SELECT * FROM category`;
		const args = [];
		db.transaction(tx => {
			tx.executeSql(query, args, 
				(_, { rows: { _array } }) => resolve(_array), 
				(_, err) => reject(err)
			);
		})
	})
}
