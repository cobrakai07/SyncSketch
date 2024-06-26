"use client";

import EmptyBoards from "./empty-boards";
import EmptyFavorites from "./empty-favorites";
import EmptySearch from "./empty-search";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
    }

const BoardList = ({orgId, query}:BoardListProps) => {
    const data=[];
    if(!data?.length && query.search){
        return <EmptySearch/>
    }
    if(!data?.length && query.favorites){
        return <EmptyFavorites/>
    }
    if(!data?.length){
        return <EmptyBoards/> 
    }
  return (
    <div>BoardList</div>
  )
}

export default BoardList