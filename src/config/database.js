import 'dotenv/config';
import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle }  from 'drizzle-orm/singlestore/driver';


const sql = neon(process.env.DB_URL, neonConfig());

const db = drizzle(sql);

export { db, sql };