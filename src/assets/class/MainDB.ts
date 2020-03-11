import { DB } from "./DB";

export class MainDB extends DB {
    private constructor() {
        super({
            name: "akaba-manga-app",
            location: "Documents",
        });
    }
    private static instance: MainDB;
    public static getInstance() {
        if (MainDB.instance) {
            return MainDB.instance.open();
        }
        return (new MainDB()).open();
    }
}
