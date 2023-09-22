# mongodb-learning

Database - Collections(Table相当) - Document(Record相当)

## Getting started

### Install
- [MongoDB shell](https://www.mongodb.com/try/download/shell) 【CLI】
- [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) 【MongoDB Client and Server with NodeJS】

### MongoDB shell commands
#### DB/Collection operations
|Action|Command|
|----|----|
|Login|`mongosh -u root -p password`|
|DB一覧|`show databases`|
|DBスイッチ|`use ${database}`|
|DB作成|`use ${database}` <br/>※Collectionを作成すると`show dbs`で表示される。|
|DB削除|`db.dropDatabase();`|
|Collection作成|`db.createCollection('user')`|
|Collection一覧|`show collections`|
|Collection削除|`db.xxxx.drop()`|

#### Document CRUD operations
参考：[MongoDBデータ操作(DB, Collection, Document)](https://www.wakuwakubank.com/posts/784-server-mongodb-introduction/#index_id5)

|Action|Command|
|----|----|
|INSERT|`db.user.insert( { id:1, name:'aaa', memo:'aaaaaaaaa', age:21} )`|
|DELETE|`db.user.deleteMany({})` -> 全件削除<br>`db.user.deleteOne({"id": 1});` -> 条件指定で削除|
|COUNT|`db.user.countDocuments();`|
|全件取得|`db.user.find()`|
|条件指定|`db.user.find({"id":3});`<br>`db.user.find({"age":{ $gte: 40 }});`|
|LIMIT|`db.user.find().limit(5)`|
|フィールド指定|`db.user.find({}, {"id":1, "age":1});` -> id,ageのみ取得<br>`db.user.find({}, {"id":0, "age":0});` -> id,age以外取得|
|ソート|`db.user.find({}).sort({"age": 1})` -> 昇順<br>`db.user.find({}).sort({"age": -1})` -> 降順|

# Sample data
```
db.createCollection('user');
db.user.insert( { id:1, name:'aaa', memo:'aaaaaaaaa', age:21} );
db.user.insert( { id:2, name:'bbb', memo:'bbbbbbbbb', age:67} );
db.user.insert( { id:3, name:'ccc', memo:'ccccccccc', age:34} );
db.user.insert( { id:4, name:'ddd', memo:'ddddddddd', age:22} );
db.user.insert( { id:5, name:'eee', memo:'eeeeeeeee', age:62} );
db.user.insert( { id:6, name:'fff', memo:'fffffffff', age:33} );
db.user.insert( { id:7, name:'aaa', memo:'a2a2a2a2a', age:53} );
db.user.insert( { id:8, name:'aaa', memo:'a3a3a3a3a', age:12} );
db.user.insert( { id:9, name:'bbb', memo:'b2b2b2b2b', age:52} );
```