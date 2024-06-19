import React from 'react'

const page = ({params}) => {
  return <>
    <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold'>You Chose {params.service === "thai"?"Thai Massage":params.service ==="ice"?"Ice therapy" : params.service === "cup"?"Cup Therapy" :`${params.service} is'nt mentioned.`}.</h1>
  </>
}

export default page