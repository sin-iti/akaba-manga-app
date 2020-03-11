import SQLite, { SQLiteDatabase, DatabaseParams } from "react-native-sqlite-storage";

export class DB {
    private db: SQLiteDatabase;
    public readonly params: DatabaseParams;
    constructor(params: DatabaseParams) {
        this.params = params;
    }
    public open(): Promise<SQLiteDatabase> {
        if (this.db) {
            return Promise.resolve(this.db);
        }
        return new Promise<SQLiteDatabase>((resolve, reject) => {
            this.db = SQLite.openDatabase(this.params, () => {
                resolve(this.db);
            }, (err) => {
                reject(err);
            });
        });
    }
    public async run(sql: string, params?: any[]) {
        if (!this.db) {
            await this.open();
        }
        return this.db.executeSql(sql, params);
    }
    public static getInstance(params: DatabaseParams) {
        return (new DB(params)).open();
    }
}
