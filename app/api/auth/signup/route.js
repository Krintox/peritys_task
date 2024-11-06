// app/api/auth/signup/route.js

import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

// Dummy in-memory database, replace it with your actual database logic
const users = [];

export async function POST(request) {
  const { name, emailOrPhone, password } = await request.json();

  // Check if the user already exists
  const existingUser = users.find(user => user.email === emailOrPhone);
  if (existingUser) {
    return NextResponse.json(
      { error: 'User already exists' },
      { status: 400 }
    );
  }

  // Hash the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the new user and save to the "database"
  const newUser = { name, email: emailOrPhone, password: hashedPassword };
  users.push(newUser);

  // Return a success response
  return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}
