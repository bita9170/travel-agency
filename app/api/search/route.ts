import { NextRequest, NextResponse } from 'next/server';
import Post from '@/lib/model/Posts';
import connectMongoDB from '@/lib/mongodb';

export async function GET(req: NextRequest) {
  await connectMongoDB();

  const query = req.nextUrl.searchParams.get('q') || '';
  const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 10);
  const limit = 10;
  const skip = (page - 1) * limit;

  // Extract sort and filter options from the query parameters
  const sortField = req.nextUrl.searchParams.get('sortField') || 'title';
  const sortOrder = req.nextUrl.searchParams.get('sortOrder') === 'desc' ? -1 : 1;
  const filterField = req.nextUrl.searchParams.get('filterField');
  const filterValue = req.nextUrl.searchParams.get('filterValue');

  // Construct sort options
  const sortOptions: { [key: string]: 1 | -1 } = { [sortField]: sortOrder };

  // Construct filter options
  const filterOptions = filterField && filterValue ? { [filterField]: filterValue } : {};

  try {
    const results = await Post.find({ 
      title: { $regex: query, $options: 'i' },
      ...filterOptions
    })
    .sort(sortOptions as { [key: string]: 1 | -1 })
    .skip(skip)
    .limit(limit);

    const totalResults = await Post.countDocuments({ 
      title: { $regex: query, $options: 'i' },
      ...filterOptions
    });

    const totalPages = Math.ceil(totalResults / limit);

    return NextResponse.json({ results, totalPages });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
