import React from 'react'
import { NexArticle } from './NexArticle'

export const NewContainer = ({ title, text }) => {
  return (
    <aside className='bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]'>
      <h1 className='text-SoftOrange text-4xl font-bold'>New</h1>
      <NexArticle
        title='Hydrogen VS Electric Cars'
        text='Will hydrogen-fueled cars ever catch up to EVs?'
      />
      <NexArticle
        title='The Downsides of AI Artistry'
        text='What are the possible adverse effects of on-demand AI image generation?'
      />
      <NexArticle
        title='Is VC Funding Drying Up?'
        text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
      />

    </aside>
  )
}
