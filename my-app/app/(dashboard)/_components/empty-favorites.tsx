import Image from 'next/image';


const EmptyFavorites = () => {
  return (
    <div className='h-4 flex flex-col items-center justify-center'>
        <Image
        src={'/empty-favorites.svg'}
        height={140}
        width={140}
        alt='Empty'/>
        <h2 className='text-2xl font-semibold mt-6'>
            No favorites found!
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            Try favoriting a board
        </p>
    </div>
  )
}

export default EmptyFavorites