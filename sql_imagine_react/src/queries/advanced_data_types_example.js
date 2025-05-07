export const advanced_data_types_example_query = {
  title: "Advanced Data Types Example",
  description: "Demonstrates advanced SQL data types: ENUM, composite, range, and JSONB.",
  sql: `-- Create an ENUM type
CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');

-- Create a composite type
CREATE TYPE address AS (
  street VARCHAR,
  city VARCHAR,
  zip VARCHAR
);

-- Create a table with range and JSONB columns
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event_time TSRANGE,
  details JSONB
);`,
  explanation: `This example shows how to define and use advanced data types in SQL:\n- ENUM for limited set of values\n- Composite for structured types\n- Range for intervals\n- JSONB for flexible, indexed JSON data.`,
  result: async () => [
    { message: "ENUM, composite, range, and JSONB types created and used in table definition." }
  ],
  columns: ['message']
}; 