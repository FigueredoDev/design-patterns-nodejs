class Database {
    private static instance: Database;
    private readonly connection: object

    private constructor() {
        this.connection = this.createConnection()
    }

    private createConnection() {
        console.log('Creating a databse connection')
        return {}
    }

    public static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }

    public getConnection() {
        return this.connection
    }
}

const db1 = Database.getInstance()
const db2 = Database.getInstance()

console.log(db1 === db2)