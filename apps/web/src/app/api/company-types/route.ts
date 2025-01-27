import { NextResponse } from 'next/server'
import { createClient } from '@agendall/supabase/client'

export async function GET() {
  try {
    const client = createClient()

    const { data: companyTypes, error } = await client
      .from('company_types')
      .select('*')

    if (error) {
      return NextResponse.json(
        { message: 'Failed to fetch company types', error: error.message },
        { status: 500 },
      )
    }

    if (!companyTypes || companyTypes.length === 0) {
      return NextResponse.json(
        { data: [], message: 'No company types available' },
        { status: 204 },
      )
    }

    return NextResponse.json(
      { data: companyTypes, message: null },
      { status: 200 },
    )
  } catch (err) {
    return NextResponse.json(
      { message: 'An unexpected error occurred', error: err },
      { status: 500 },
    )
  }
}
