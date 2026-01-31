import React from 'react'

export default function Card(props) {
    // console.log("props" , props) ;
    console.log(props.username) ;
  return (

<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img className="w-full" src="https://tse2.mm.bing.net/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Card Image"/>
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">{props.username}</div>
<p className="text-gray-700 text-base">
{props.btnText|| "Default"}This is a simple card example created using Tailwind CSS
</p>
</div>
<div className="px-6 pt-4 pb-2">
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
</div>
</div>

  )
}
