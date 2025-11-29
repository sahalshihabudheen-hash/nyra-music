// YouTube Data API v3 Service
const YOUTUBE_API_KEY = 'AIzaSyAIwudMYA0r7VHvTXuh4OBc0agoH9U6I_o';
const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

class YouTubeService {
  async searchSongs(query, maxResults = 20) {
    try {
      const response = await fetch(
        `${YOUTUBE_API_BASE}/search?part=snippet&type=video&videoCategoryId=10&maxResults=${maxResults}&q=${encodeURIComponent(query)}&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      
      if (data.error) {
        console.error('YouTube API Error:', data.error);
        return [];
      }

      // Get video details for duration
      const videoIds = data.items.map(item => item.id.videoId).join(',');
      const detailsResponse = await fetch(
        `${YOUTUBE_API_BASE}/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      );
      const detailsData = await detailsResponse.json();

      return data.items.map((item, index) => {
        const details = detailsData.items[index];
        const duration = details ? this.parseDuration(details.contentDetails.duration) : 'N/A';
        
        return {
          id: item.id.videoId,
          title: item.snippet.title,
          artist: item.snippet.channelTitle,
          duration: duration,
          durationSeconds: details ? this.durationToSeconds(details.contentDetails.duration) : 0,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
          videoId: item.id.videoId,
        };
      });
    } catch (error) {
      console.error('Error searching YouTube:', error);
      return [];
    }
  }

  async getPopularSongs(maxResults = 20) {
    try {
      const response = await fetch(
        `${YOUTUBE_API_BASE}/videos?part=snippet,contentDetails&chart=mostPopular&videoCategoryId=10&maxResults=${maxResults}&regionCode=US&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      
      if (data.error) {
        console.error('YouTube API Error:', data.error);
        return [];
      }

      return data.items.map(item => ({
        id: item.id,
        title: item.snippet.title,
        artist: item.snippet.channelTitle,
        duration: this.parseDuration(item.contentDetails.duration),
        durationSeconds: this.durationToSeconds(item.contentDetails.duration),
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        videoId: item.id,
      }));
    } catch (error) {
      console.error('Error fetching popular songs:', error);
      return [];
    }
  }

  parseDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');

    const h = hours ? parseInt(hours) : 0;
    const m = minutes ? parseInt(minutes) : 0;
    const s = seconds ? parseInt(seconds) : 0;

    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  durationToSeconds(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');

    const h = hours ? parseInt(hours) : 0;
    const m = minutes ? parseInt(minutes) : 0;
    const s = seconds ? parseInt(seconds) : 0;

    return h * 3600 + m * 60 + s;
  }
}

export default new YouTubeService();
