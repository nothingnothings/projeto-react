import React from 'react';


import Link from 'next/link';




export default function Custom404() {
    return (
    <div>
    <h1>404 - Page Not Found</h1>
    <p>Try <Link href="/"><a>going back</a></Link></p>
    </div>
    )
  }