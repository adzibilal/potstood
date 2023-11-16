import React from 'react'

const SkeletonTable = () => {
  return (
    <div className='mt-5'>
        <div className="grid grid-cols-[3fr_1fr] items-center gap-5 mb-8">
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_0.3fr] items-center gap-5 mb-2">
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_0.3fr] items-center gap-5 mb-2">
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_0.3fr] items-center gap-5 mb-2">
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_0.3fr] items-center gap-5 mb-2">
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_0.3fr] items-center gap-5 mb-2">
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_0.3fr] items-center gap-5 mb-2">
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
            <div className="h-8 bg-zinc-300 rounded-sm w-full animate-pulse"></div>
        </div>
    </div>
  )
}

export default SkeletonTable