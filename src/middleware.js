import { NextResponse } from 'next/server'
import { createClient } from './lib/supabase/middleware'

export async function middleware(request) {
  try {
    const { supabase, response } = createClient(request)
    const {data: {session}} = await supabase.auth.getSession()
    const url = request.nextUrl.pathname
    console.log(session)
    if (!session && url.includes('/dashboard')) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return response
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}
