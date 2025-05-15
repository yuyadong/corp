import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await request()
  return NextResponse.json({
    code: 0,
    message: "添加成功",
    data,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({
    code: 0,
    message: "添加成功",
    data,
  });
}
