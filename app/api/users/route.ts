import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { hash } from "bcrypt";

export async function GET() {
  return NextResponse.json({ success: true });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password, email, phone } = body;

    const existingUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const existingPhone = await prisma.user.findUnique({
      where: {
        phone: phone,
      },
    });

    if (existingUser) {
      return NextResponse.json({
        success: false,
        status: 409,
        message: "User already exists",
      });
    }

    if (existingEmail) {
      return NextResponse.json({
        success: false,
        status: 409,
        message: "Email already exists",
      });
    }

    if (existingPhone) {
      return NextResponse.json({
        success: false,
        status: 409,
        message: "Phone already exists",
      });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        phone,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      status: 201,
      message: "User created successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
      },
    });
  } catch (error) {
    // @ts-ignore
    return NextResponse.error({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
