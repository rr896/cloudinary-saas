"use client"
import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios';
import VideoCard from '@/components/VideoCard';
import { Video } from '@/types';
function Home() {

  const [videos, setVideos] = useState<Video[]>([])
  const [loading,setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchVideos = useCallback(async ()=>{
    try {
      
      const response = await axios.get("/api/videos")
      const returnedVideos = Array.isArray(response.data)
        ? response.data
        : response.data?.videos

      if(Array.isArray(returnedVideos)){
        setVideos(returnedVideos)
      } else {
        throw new Error("Unexpected response format")
      }

    } catch (error) {

      console.log(error)
      setError("Failed to fetch vidoes")

    } finally {

      setLoading(false)

    }

  },[]);

  useEffect(()=>{

    fetchVideos()

  },[fetchVideos])

  const handleDownload = useCallback((url:string,title:string) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${title}.mp4`);
    link.setAttribute("target","_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },[])

  if(loading){
    return <div>Loading.......</div>
  }

  if(error){
    return <div className='text-center text-red-500'>{error}</div>
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Videos</h1>
      {videos.length === 0 ? (
        <div className='text-center text-lg text-gray-500'>No Videos Available</div>
      ): (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            videos.map((video) => {
              const normalizedVideo = {
                ...video,
                compressedSize: String(video.compressedSize),
                originalSize: String(video.originalSize),
              };

              return (
                <VideoCard
                  key={video.id}
                  video={normalizedVideo as any}
                  onDownload={handleDownload}
                />
              );
            })
          }
        </div>
      )}
    </div>
  )


  /* return (
    <div>Home</div>
  ) */
}

export default Home