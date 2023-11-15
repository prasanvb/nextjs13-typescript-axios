import { NextResponse } from "next/server";
import courses from './data.json';

// API: http://localhost:8000/api/courses
export async function GET(request: Request){
    // return new Response('Hello NextJs Route!');
    return NextResponse.json(courses);
}