db.users.drop()
db.links.drop()

db.users.insert({
	name: { first: "John", last: "Doe" },
	age: 30,
	email: "johndoe@gmail.com",
	passwordHash: "some_password_hash",
	logins: [
		{ at: new Date(2012, 3, 4, 5, 6, 7), minutes: 20 },
		{ at: new Date(2012, 3, 15, 16, 17, 18), minutes: 18 },
		{ at: new Date(2012, 4, 1, 2, 3, 4), minutes: 34 },
	]
});
db.users.insert({
	name: { first: "Jane", last: "Wilson" },
	age: 25,
	email: "janewilson@gmail.com",
	passwordHash: "another_password_hash",
	logins: [
		{ at: new Date(2012, 5, 6, 7, 8, 9), minutes: 21 },
		{ at: new Date(2012, 5, 16, 17, 18, 19), minutes: 50 }
	]
});
db.users.insert({
	name: { first: "Bob", last: "Smith" },
	age: 31,
	email: "bob.smith@gmail.com",
	passwordHash: "last_password_hash",
	logins: [
		{ at: new Date(2012, 2, 3, 4, 5, 6), minutes: 59 },
		{ at: new Date(2012, 3, 3, 4, 5, 6), minutes: 20 }
	]
});

var u1 = db.users.findOne({ 'name.first': 'John' }),
    u2 = db.users.findOne({ 'name.first': 'Jane' }),
	u3 = db.users.findOne({ 'name.first': 'Bob' });

db.links.insert({
	title: 'Nettuts+',
	url: 'http://net.tutsplus.com',
	comment: 'Great site for web dev tutorials',
	tags: ['tutorials', 'dev', 'code'],
	favorites: 100,
	userId: u1._id
});
db.links.insert({
	title: 'Psdtuts+',
	url: 'http://psd.tutsplus.com',
	comment: 'Photoshop tutorials like no other',
	tags: ['photoshop', 'tutorials'],
	favorites: 507,
	userId: u2._id
});
db.links.insert({
	title: 'Tuts+ Premium',
	url: 'http://tutsplus.com',
	comment: 'The best screencast courses ever',
	tags: ['screencasts', 'tutorials'],
	favorites: 149,
	userId: u1._id
});
db.links.insert({
	title: 'Envato',
	url: 'http://envato.com',
	comment: 'Greatest company in Australia',
	tags: ['business', 'australia'],
	favorites: 279,
	userId: u2._id
});
db.links.insert({
	title: 'MongoDB.org',
	url: 'http://mongodb.org',
	comment: 'Really cool NoSQL database',
	tags: ['database', 'development'],
	favorites: 79,
	userId: u3._id
});
db.links.insert({
	title: 'Audible Audio Books',
	url: 'http://www.audible.com',
	comment: 'Good audio books',
	tags: ['books', 'audio'],
	favorites: 100,
	userId: u2._id
});
db.links.insert({
	title: 'Wikipedia',
	url: 'http://wikipedia.org',
	comment: 'The source of all knowledge',
	tags: ['information', 'encyclopedia', 'online', 'wikis'],
	favorites: 187,
	userId: u3._id
});
db.links.insert({
	title: 'Mobiletuts+',
	url: 'http://mobile.tutsplus.com',
	comment: 'Great tutorials for developing on mobile devices',
	tags: ['mobile', 'development'],
	favorites: 84,
	userId: u2._id
});
db.links.insert({
	title: 'Amazon.com',
	url: 'http://www.amazon.com',
	comment: 'Where to buy things',
	tags: ['selling', 'buying'],
	favorites: 329,
	userId: u1._id
});
db.links.insert({
	title: 'ThemeForest',
	url: 'http://themeforest.net',
	comment: 'Where to buy the best website themes',
	tags: ['marketplace', 'themes'],
	favorites: 654,
	userId: u1._id
});
db.links.insert({
	title: 'CodeCanyon',
	url: 'http://codecanyon.net',
	comment: 'A marketplace for code',
	tags: ['marketplace', 'code'],
	favorites: 217,
	userId: u2._id
});
db.links.insert({
	title: 'GraphicRiver',
	url: 'http://graphicriver.net',
	comment: 'A marketplace for graphics',
	tags: ['marketplace', 'graphics'],
	favorites: 543,
	userId: u3._id
});