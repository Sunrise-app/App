import fs from 'fs/promises';
import path from 'path';

const dataPath = path.join(__dirname, '../data/mentalchat16k.json');

export async function getSuggestions() {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
}
