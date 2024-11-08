import { useState, useEffect } from 'react';

function useEnterspeed(url: string | null, handles: string[], cacheSeconds: number = 0) {
  const [enterspeedResponse, setEnterspeedResponse] = useState<EnterspeedResponse>();

  let queryParams: string[] = [];
  if(url) {
    queryParams.push(`url=${url}`)
  }
  (handles ?? []).forEach((handle) => queryParams.push(`handle=${handle}`));
  const queryString = queryParams.join('&');
  
  useEffect(() => {

    if(cacheSeconds > 0) {
      const cacheValue = getFromCache(queryString);
      if(cacheValue) {
        setEnterspeedResponse(cacheValue);
        return;
      }
    }

    fetch(`https://delivery.enterspeed.com/v2?${queryString}`, {
      headers: {
        "X-Api-Key": "environment-9523687b-eb23-4cc6-a38f-d866474535db",
      }
    })
      .then(response => response.json())
      .then(data => {
        const response = {
          navigation: data?.views?.navigation,
          page: data?.route
        };

        setEnterspeedResponse(response);
        
        if(cacheSeconds > 0) {
          SetCache(response, queryString, cacheSeconds);
        }
      });
  }, []);

  return enterspeedResponse;
}

function getFromCache(key: string): EnterspeedResponse | null {
  const cacheEntry = localStorage.getItem(`hackathon-${key}`);

  if(!cacheEntry) {
    return null
  }

  const cacheItem = JSON.parse(cacheEntry) as CacheItem;
  if(Date.parse(cacheItem.validUntil) < Date.now()) {
    return null
  }

  return JSON.parse(cacheItem.value) as EnterspeedResponse;
}

function SetCache(value: any, key: string, cacheSeconds: number) {
  let date = new Date();
  date.setSeconds ( date.getSeconds() + cacheSeconds )

  localStorage.setItem(`hackathon-${key}`, JSON.stringify({ value: JSON.stringify(value), validUntil: date.toString() }))
}

export default useEnterspeed;