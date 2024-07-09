import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
const USER_ID = import.meta.env.VITE_INSTAGRAM_USER_ID;

const getInstagramPosts = async () => {
  const url = `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await axios.get(url);
    const posts = response.data.data;

    const photos = posts.filter(post => post.media_type === 'IMAGE');

    // Retornar apenas as 4 últimas fotos
    return photos.slice(0, 4);
  } catch (error) {
    console.error('Erro ao buscar posts do Instagram:', error);
    return [];
  }
};

export default getInstagramPosts;