export class LocalStorageManager {
    save(key, value) {
        localStorage[key] = JSON.stringify(value);
    }
    load(key) {
        return localStorage[key];
    }
}
